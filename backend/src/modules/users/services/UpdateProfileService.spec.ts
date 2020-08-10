import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import AppError from '@shared/errors/AppError';
import UpdateProfileService from '@modules/users/services/UpdateProfileService';
import FakeHashPassword from '@modules/users/providers/HashPassword/fakes/FakeHashPassword';

let fakeUsersRepository: FakeUsersRepository;
let fakeHashPassword: FakeHashPassword;
let updateProfile: UpdateProfileService;

describe('UpdateProfile', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();
    fakeHashPassword = new FakeHashPassword();

    updateProfile = new UpdateProfileService(
      fakeUsersRepository,
      fakeHashPassword,
    );
  });

  it('Should be able to update the profile', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const updateUser = await updateProfile.execute({
      user_id: user.id,
      name: 'John Doe T',
      email: 'johndoet@example.com',
      old_password: '123456',
      password: '1234567',
    });

    expect(updateUser.name).toBe('John Doe T');
    expect(updateUser.email).toBe('johndoet@example.com');
  });

  it('Should not be able to show the profile from non-existing user', async () => {
    expect(
      updateProfile.execute({
        user_id: 'non-existing-id',
        name: 'John Doe',
        email: 'Johndoe@example.com',
        old_password: '1234567',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to change to another user email', async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Doe',
        email: 'Johndoet@example.com',
        old_password: '1234567',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to update the password without old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Doe',
        email: 'Johndoe@example.com',
        password: '1234569',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should be able to update the password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    const updateUser = await updateProfile.execute({
      user_id: user.id,
      name: 'johndoe@example.com',
      email: 'johndoe@example.com',
      old_password: '123456',
      password: '1234567',
    });

    expect(updateUser.password).toBe('1234567');
  });

  it('Should not be able to update the password with wrong old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Doe',
        email: 'johndoe@example.com',
        old_password: 'wrong-password',
        password: '1234567',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to update the password with same old password', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await expect(
      updateProfile.execute({
        user_id: user.id,
        name: 'John Doe',
        email: 'johndoe@example.com',
        old_password: '123456',
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
