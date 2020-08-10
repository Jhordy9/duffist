import { uuid } from 'uuidv4';

import FakePostsRepository from '@modules/tweets/repositories/fakes/FakePostsRepository';
import UpdatePostService from '@modules/tweets/services/UpdatePostService';
import AppError from '@shared/errors/AppError';

let fakePostsRepository: FakePostsRepository;
let updatePost: UpdatePostService;

describe('UpdatePost', () => {
  beforeEach(() => {
    fakePostsRepository = new FakePostsRepository();

    updatePost = new UpdatePostService(fakePostsRepository);
  });

  it('Should be able to update a post', async () => {
    const post = await fakePostsRepository.create({
      post_user_id: uuid(),
      message_post: 'Something to testing',
    });

    await updatePost.execute({
      post_id: post.id,
      message_post: 'Changed post',
      token_id: post.post_user_id,
    });

    expect(post.message_post).toBe('Changed post');
  });

  it('Should not be able to update a non-existing post', async () => {
    const post = await fakePostsRepository.create({
      post_user_id: uuid(),
      message_post: 'Something to testing',
    });

    await expect(
      updatePost.execute({
        post_id: 'wrong-id',
        message_post: 'Changed post',
        token_id: post.post_user_id,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to update a post with wrong user id', async () => {
    const post = await fakePostsRepository.create({
      post_user_id: uuid(),
      message_post: 'Something to testing',
    });

    await expect(
      updatePost.execute({
        post_id: post.id,
        message_post: 'Changed post',
        token_id: 'wrong-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
