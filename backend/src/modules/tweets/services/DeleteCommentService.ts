import { injectable, inject } from 'tsyringe';

import ICommentsRepository from '@modules/tweets/repositories/ICommentsRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  comment_id: string;
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

  async execute({ comment_id, token_id }: IRequest): Promise<void> {
    const comment = await this.commentsRepository.findCommentById(comment_id);

    if (!comment) {
      throw new AppError('Comment not found');
    }

    if (comment.comment_user_id !== token_id) {
      throw new AppError('you are not authorized to delete this comment');
    }

    return this.commentsRepository.delete(comment);
  }
}

export default UpdatePostService;
