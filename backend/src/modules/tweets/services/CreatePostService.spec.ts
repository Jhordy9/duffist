import { uuid } from 'uuidv4';
import FakePostsRepository from '@modules/tweets/repositories/fakes/FakePostsRepository';
import CreatePostService from '@modules/tweets/services/CreatePostService';

let fakePostsRepository: FakePostsRepository;
let createPost: CreatePostService;

describe('CreatePost', () => {
  beforeEach(() => {
    fakePostsRepository = new FakePostsRepository();

    createPost = new CreatePostService(fakePostsRepository);
  });

  it('Should be able to create a post', async () => {
    const post = await createPost.execute({
      message_post: 'Something to testing',
      post_user_id: uuid(),
    });

    expect(post).toHaveProperty('id');
  });
});
