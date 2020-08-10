import { uuid } from 'uuidv4';

import FakeCommentsRepository from '@modules/tweets/repositories/fakes/FakeCommentsRepository';
import ShowCommentsService from '@modules/tweets/services/ShowCommentsService';

let fakeCommentsRepository: FakeCommentsRepository;
let showComments: ShowCommentsService;

describe('showComments', () => {
  beforeEach(() => {
    fakeCommentsRepository = new FakeCommentsRepository();

    showComments = new ShowCommentsService(fakeCommentsRepository);
  });

  it('Should be able to show a comment in a post', async () => {
    const comment = await fakeCommentsRepository.create({
      comment_user_id: uuid(),
      message_comment: 'Something to testing',
      post_id: uuid(),
    });

    const comments = await showComments.execute({
      comment_user_id: comment.comment_user_id,
    });

    expect(comments).toEqual([comment]);
  });
});
