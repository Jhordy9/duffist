import { injectable, inject } from 'tsyringe';

import ICommentsRepository from '@modules/tweets/repositories/ICommentsRepository';
import IPostsRepository from '@modules/tweets/repositories/IPostsRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  comment_user_id: string;
  token_id: string;
}
@injectable()
class UpdateAdminService {
  constructor(
    @inject('CommentsRepository')
    private commentsRepository: ICommentsRepository,

    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {
    /** */
  }

  async execute({ comment_user_id, token_id }: IRequest): Promise<void> {
    const comment = await this.commentsRepository.findCommentById(
      comment_user_id,
    );

    if (!comment) {
      throw new AppError('Comment not found');
    }

    const { post_id } = comment;

    const user = await this.postsRepository.findByPostId(post_id);

    if (!user) {
      throw new AppError('User not found');
    }

    if (user.post_user_id !== token_id) {
      throw new AppError("You don't have permission");
    }

    return this.commentsRepository.delete(comment);
  }
}

export default UpdateAdminService;
