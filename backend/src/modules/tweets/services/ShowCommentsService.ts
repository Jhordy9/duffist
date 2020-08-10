import { injectable, inject } from 'tsyringe';

import ICommentsRepository from '@modules/tweets/repositories/ICommentsRepository';
import Comment from '@modules/tweets/infra/typeorm/entities/Comment';

interface IRequest {
  comment_user_id: string;
}
@injectable()
class ShowCommentsService {
  constructor(
    @inject('CommentsRepository')
    private commentsRepository: ICommentsRepository,
  ) {
    /** */
  }

  async execute({ comment_user_id }: IRequest): Promise<Comment[] | undefined> {
    const comments = await this.commentsRepository.findAllCommentsByUserId(
      comment_user_id,
    );

    return comments;
  }
}

export default ShowCommentsService;
