import { uuid } from 'uuidv4';

import AppError from '@shared/errors/AppError';
import FakeCommentsRepository from '@modules/tweets/repositories/fakes/FakeCommentsRepository';
import DeleteCommentService from '@modules/tweets/services/DeleteCommentService';

let fakeCommentsRepository: FakeCommentsRepository;
let deleteComment: DeleteCommentService;

describe('DeleteComment', () => {
  beforeEach(() => {
    fakeCommentsRepository = new FakeCommentsRepository();

    deleteComment = new DeleteCommentService(fakeCommentsRepository);
  });

  it('Should be able to delete any your comments', async () => {
    const comment = await fakeCommentsRepository.create({
      comment_user_id: uuid(),
      message_comment: 'Something for testing',
      post_id: uuid(),
    });

    await deleteComment.execute({
      comment_id: comment.id,
      token_id: comment.comment_user_id,
    });

    expect(204);
  });

  it('Should not be able to delete non-existing comment', async () => {
    const comment = await fakeCommentsRepository.create({
      comment_user_id: uuid(),
      message_comment: 'Something for testing',
      post_id: uuid(),
    });

    await expect(
      deleteComment.execute({
        comment_id: 'wrong-id',
        token_id: comment.comment_user_id,
      }),
    ).rejects.toBeInstanceOf(AppError);
  });

  it('Should not be able to delete comment with wrong token_id', async () => {
    const comment = await fakeCommentsRepository.create({
      comment_user_id: uuid(),
      message_comment: 'Something for testing',
      post_id: uuid(),
    });

    await expect(
      deleteComment.execute({
        comment_id: comment.id,
        token_id: 'wrong-id',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
