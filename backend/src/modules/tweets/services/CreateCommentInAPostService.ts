import { injectable, inject } from 'tsyringe';

import ICommentsRepository from '@modules/tweets/repositories/ICommentsRepository';
import Comment from '@modules/tweets/infra/typeorm/entities/Comment';

interface IRequest {
  message_comment: string;
  comment_user_id: string;
  post_id: string;
}

@injectable()
class CreatePostService {
  constructor(
    @inject('CommentsRepository')
    private commentsRepository: ICommentsRepository,
  ) {
    /** */
  }

  async execute({
    message_comment,
    comment_user_id,
    post_id,
  }: IRequest): Promise<Comment> {
    const comment = await this.commentsRepository.create({
      message_comment,
      comment_user_id,
      post_id,
    });

    return this.commentsRepository.save(comment);
  }
}

export default CreatePostService;
