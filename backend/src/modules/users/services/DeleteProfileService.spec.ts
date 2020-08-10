import FakeUsersRepository from '@modules/users/repositories/fakes/FakeUsersRepository';
import AppError from '@shared/errors/AppError';
import DeleteProfileService from '@modules/users/services/DeleteProfileService';

let fakeUsersRepository: FakeUsersRepository;
let deleteProfile: DeleteProfileService;

describe('DeleteUser', () => {
  beforeEach(() => {
    fakeUsersRepository = new FakeUsersRepository();

    deleteProfile = new DeleteProfileService(fakeUsersRepository);
  });

  it('Should be able to delete a user', async () => {
    const user = await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await deleteProfile.execute({
      user_id: user.id,
    });

    expect(204);
  });

  it('Should not be able to delete user with wrong id', async () => {
    await fakeUsersRepository.create({
      name: 'John Doe',
      email: 'johndoe@example.com',
      password: '123456',
    });

    await expect(
      deleteProfile.execute({
        user_id: 'wrong-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
