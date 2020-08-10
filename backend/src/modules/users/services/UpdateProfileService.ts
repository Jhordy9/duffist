import { injectable, inject } from 'tsyringe';

import AppError from '@shared/errors/AppError';
import IHashPassword from '@modules/users/providers/HashPassword/models/IHashPassword';
import IUsersRepository from '@modules/users/repositories/IUsersRepository';
import User from '@modules/users/infra/typeorm/entities/User';

interface IRequest {
  user_id: string;
  name: string;
  email: string;
  old_password?: string;
  password?: string;
}

@injectable()
class UpdateProfileService {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,

    @inject('HashPassword')
    private hashPassword: IHashPassword,
  ) {
    /** */
  }

  public async execute({
    user_id,
    name,
    email,
    password,
    old_password,
  }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError('User not found');
    }

    user.name = name;
    user.email = email;

    if (password && !old_password) {
      throw new AppError('old password is required');
    }

    if (password && old_password) {
      const checkOldPassword = await this.hashPassword.compareHash(
        old_password,
        user.password,
      );

      if (!checkOldPassword) {
        throw new AppError('Old password does not match.');
      }
    }

    if (password && old_password) {
      const checkNewPasswordIsEqual = await this.hashPassword.compareHash(
        password,
        user.password,
      );

      if (checkNewPasswordIsEqual) {
        throw new AppError('New password is equal at old password');
      }
    }

    if (password) {
      user.password = await this.hashPassword.generateHash(password);
    }

    return this.usersRepository.save(user);
  }
}

export default UpdateProfileService;
