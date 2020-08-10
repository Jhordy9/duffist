import { uuid } from 'uuidv4';

import FakePostsRepository from '@modules/tweets/repositories/fakes/FakePostsRepository';
import FakeCommentsRepository from '@modules/tweets/repositories/fakes/FakeCommentsRepository';
import ShowAdminService from '@modules/tweets/services/ShowAdminService';
import AppError from '@shared/errors/AppError';

let fakeCommentsRepository: FakeCommentsRepository;
let fakePostsRepository: FakePostsRepository;
let showAdmin: ShowAdminService;

describe('showAdmin', () => {
  beforeEach(() => {
    fakePostsRepository = new FakePostsRepository();
    fakeCommentsRepository = new FakeCommentsRepository();

    showAdmin = new ShowAdminService(
      fakeCommentsRepository,
      fakePostsRepository,
    );
  });

  it('Should be able to show comments in your post', async () => {
    const post = await fakePostsRepository.create({
      message_post: 'Something for testing',
      post_user_id: uuid(),
    });

    const comment = await fakeCommentsRepository.create({
      comment_user_id: uuid(),
      message_comment: 'Something for testing',
      post_id: post.id,
    });

    const comments = await showAdmin.execute({
      token_id: post.post_user_id,
    });

    expect(comments).toEqual([comment]);
  });

  it('Should not be able to show if you dont"t have any post', async () => {
    await fakePostsRepository.create({
      message_post: 'Something for testing',
      post_user_id: uuid(),
    });

    await expect(
      showAdmin.execute({
        token_id: 'wrong-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
