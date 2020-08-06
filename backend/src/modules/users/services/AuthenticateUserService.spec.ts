import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import AppError from '@shared/errors/AppError';
import AuthenticateUserService from '@modules/users/services/AuthenticateUserService';
import FakeHashPassword from '@modules/users/providers/HashPassword/fakes/FakeHashPassword';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashPassword: FakeHashPassword;
let authenticateUser: AuthenticateUserService;

describe('Authenticate', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashPassword = new FakeHashPassword();

    authenticateUser = new AuthenticateUserService(
      fakeUsersRepository,
      fakeHashPassword,
    );
  });

  it('Should be able to authenticated', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const response = await authenticateUser.execute({
      email: 'johndoe@example.com',
      password: '123456',
    });

    expect(response).toHaveProperty('token');
    expect(response.user).toEqual(user);
  });

  it('Should be not able to authenticate with non existing user', async () => {
    await expect(
      authenticateUser.execute({
        email: 'johndoe@example.com',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to authenticate with wrong password', async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await expect(
      authenticateUser.execute({
        email: 'johndoe@example.com',
        password: 'wrong-passowrd',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
