import { uuid } from 'uuidv4';

import FakePostsRepository from '@modules/tweets/repositories/fakes/FakePostsRepository';
import ShowPostsService from '@modules/tweets/services/ShowPostsService';

let fakePostsRepository: FakePostsRepository;
let showPosts: ShowPostsService;

describe('showPosts', () => {
  beforeEach(() => {
    fakePostsRepository = new FakePostsRepository();

    showPosts = new ShowPostsService(fakePostsRepository);
  });

  it('Should be able to show a post', async () => {
    const post = await fakePostsRepository.create({
      message_post: 'Something to testing',
      post_user_id: uuid(),
    });

    const posts = await showPosts.execute({
      post_user_id: post.post_user_id,
    });

    expect(posts).toEqual([post]);
  });
});
