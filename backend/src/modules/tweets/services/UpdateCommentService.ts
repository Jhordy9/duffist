import { injectable, inject } from 'tsyringe';

import ICommentsRepository from '@modules/tweets/repositories/ICommentsRepository';
import Comment from '@modules/tweets/infra/typeorm/entities/Comment';
import AppError from '@shared/errors/AppError';

interface IRequest {
  comment_id: string;
  message_comment: string;
  token_id: string;
}
@injectable()
class UpdatePostService {
  constructor(
    @inject('CommentsRepository')
    private commentsRepository: ICommentsRepository,
  ) {
    /** */
  }

  async execute({
    message_comment,
    comment_id,
    token_id,
  }: IRequest): Promise<Comment> {
    const comment = await this.commentsRepository.findCommentById(comment_id);

    if (!comment) {
      throw new AppError('Comment not found');
    }

    if (comment.comment_user_id !== token_id) {
      throw new AppError("you don't have authorization");
    }

    comment.message_comment = message_comment;

    return this.commentsRepository.save(comment);
  }
}

export default UpdatePostService;
