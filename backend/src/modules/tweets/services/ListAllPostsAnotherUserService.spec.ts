import { uuid } from 'uuidv4';

import FakePostsRepository from '@modules/tweets/repositories/fakes/FakePostsRepository';
import ListAllPostsAnotherUserService from '@modules/tweets/services/ListAllPostsAnotherUserService';

let fakePostsRepository: FakePostsRepository;
let listAllPostAnotherUser: ListAllPostsAnotherUserService;

describe('ListAllPostAnotherUser', () => {
  beforeEach(() => {
    fakePostsRepository = new FakePostsRepository();

    listAllPostAnotherUser = new ListAllPostsAnotherUserService(
      fakePostsRepository,
    );
  });

  it('Should be ble to list all posts on others users', async () => {
    const post = await fakePostsRepository.create({
      message_post: 'Something to testing',
      post_user_id: uuid(),
    });

    const posts = await listAllPostAnotherUser.execute({
      post_user_id: uuid(),
    });

    expect(posts).toEqual([post]);
  });
});
