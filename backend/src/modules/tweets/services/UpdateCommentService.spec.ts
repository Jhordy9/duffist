import { uuid } from 'uuidv4';

import FakeCommentsRepository from '@modules/tweets/repositories/fakes/FakeCommentsRepository';
import UpdateCommentService from '@modules/tweets/services/UpdateCommentService';
import AppError from '@shared/errors/AppError';

let fakeCommentsRepository: FakeCommentsRepository;
let updateComment: UpdateCommentService;

describe('UpdateComment', () => {
  beforeEach(() => {
    fakeCommentsRepository = new FakeCommentsRepository();

    updateComment = new UpdateCommentService(fakeCommentsRepository);
  });

  it('Should be able to update a comment', async () => {
    const comment = await fakeCommentsRepository.create({
      comment_user_id: uuid(),
      message_comment: 'Something to testing',
      post_id: uuid(),
    });

    await updateComment.execute({
      comment_id: comment.id,
      message_comment: 'Changed comment',
      token_id: comment.comment_user_id,
    });

    expect(comment.message_comment).toBe('Changed comment');
  });

  it('Should not be able to update a non-existing comment', async () => {
    const comment = await fakeCommentsRepository.create({
      comment_user_id: uuid(),
      message_comment: 'Something to testing',
      post_id: uuid(),
    });

    await expect(
      updateComment.execute({
        comment_id: 'wrong-id',
        message_comment: 'Changed comment',
        token_id: comment.comment_user_id,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to update a comment with wrong user id', async () => {
    const comment = await fakeCommentsRepository.create({
      comment_user_id: uuid(),
      message_comment: 'Something to testing',
      post_id: uuid(),
    });

    await expect(
      updateComment.execute({
        comment_id: comment.id,
        message_comment: 'Changed comment',
        token_id: 'wrong-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
