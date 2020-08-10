import { uuid } from 'uuidv4';

import AppError from '@shared/errors/AppError';
import FakePostsRepository from '@modules/tweets/repositories/fakes/FakePostsRepository';
import DeletePostService from '@modules/tweets/services/DeletePostService';

let fakePostsRepository: FakePostsRepository;
let deletePost: DeletePostService;

describe('DeletePost', () => {
  beforeEach(() => {
    fakePostsRepository = new FakePostsRepository();

    deletePost = new DeletePostService(fakePostsRepository);
  });

  it('Should be able to delete a post', async () => {
    const post = await fakePostsRepository.create({
      message_post: 'Something to testing',
      post_user_id: uuid(),
    });

    await deletePost.execute({
      post_id: post.id,
      post_user_id: post.post_user_id,
    });

    expect(204);
  });

  it('Should not be able to delete non-existing post', async () => {
    const post = await fakePostsRepository.create({
      message_post: 'Something to testing',
      post_user_id: uuid(),
    });

    await expect(
      deletePost.execute({
        post_id: 'wrong-id',
        post_user_id: post.post_user_id,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to delete post with wrong post_user_id', async () => {
    const post = await fakePostsRepository.create({
      message_post: 'Something to testing',
      post_user_id: uuid(),
    });

    await expect(
      deletePost.execute({
        post_id: post.id,
        post_user_id: 'wrong-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
