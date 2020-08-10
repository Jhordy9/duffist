import { uuid } from 'uuidv4';
import FakeCommentsRepository from '@modules/tweets/repositories/fakes/FakeCommentsRepository';
import CreateCommentsInAPostService from '@modules/tweets/services/CreateCommentInAPostService';

let fakeCommentsRepository: FakeCommentsRepository;
let createCommentsInAPost: CreateCommentsInAPostService;

describe('CreateCommentInAPost', () => {
  beforeEach(() => {
    fakeCommentsRepository = new FakeCommentsRepository();

    createCommentsInAPost = new CreateCommentsInAPostService(
      fakeCommentsRepository,
    );
  });

  it('Should be able to create comments in a post', async () => {
    const comment = await createCommentsInAPost.execute({
      comment_user_id: uuid(),
      post_id: uuid(),
      message_comment: 'Something for testing',
    });

    expect(comment).toHaveProperty('id');
  });
});
