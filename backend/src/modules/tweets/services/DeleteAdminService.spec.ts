import { uuid } from 'uuidv4';

import AppError from '@shared/errors/AppError';
import FakePostsRepository from '@modules/tweets/repositories/fakes/FakePostsRepository';
import FakeCommentsRepository from '@modules/tweets/repositories/fakes/FakeCommentsRepository';
import DeleteAdminService from '@modules/tweets/services/DeleteAdminService';

let fakePostsRepository: FakePostsRepository;
let fakeCommentsRepository: FakeCommentsRepository;
let deleteAdmin: DeleteAdminService;

describe('DeleteAdmin', () => {
  beforeEach(() => {
    fakePostsRepository = new FakePostsRepository();
    fakeCommentsRepository = new FakeCommentsRepository();

    deleteAdmin = new DeleteAdminService(
      fakeCommentsRepository,
      fakePostsRepository,
    );
  });

  it('Should be able to delete any comments on your post', async () => {
    const post = await fakePostsRepository.create({
      message_post: 'Something to testing',
      post_user_id: uuid(),
    });

    const comment = await fakeCommentsRepository.create({
      post_id: post.id,
      comment_user_id: uuid(),
      message_comment: 'Something to testing',
    });

    await deleteAdmin.execute({
      token_id: post.post_user_id,
      comment_id: comment.id,
    });

    expect(204);
  });

  it('Should not be able to delete a non-existing comment', async () => {
    const post = await fakePostsRepository.create({
      message_post: 'Something to testing',
      post_user_id: uuid(),
    });

    await fakeCommentsRepository.create({
      post_id: post.id,
      comment_user_id: uuid(),
      message_comment: 'Something to testing',
    });

    await expect(
      deleteAdmin.execute({
        token_id: post.post_user_id,
        comment_id: 'wrong-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to delete a non-existing user', async () => {
    const post = await fakePostsRepository.create({
      message_post: 'Something to testing',
      post_user_id: uuid(),
    });

    const comment = await fakeCommentsRepository.create({
      post_id: post.id,
      comment_user_id: uuid(),
      message_comment: 'Something to testing',
    });

    await expect(
      deleteAdmin.execute({
        token_id: 'wrong-id',
        comment_id: comment.id,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
