import { injectable, inject } from 'tsyringe';

import IPostsRepository from '@modules/tweets/repositories/IPostsRepository';
import AppError from '@shared/errors/AppError';

interface IRequest {
  post_id: string;
  post_user_id: string;
}
@injectable()
class DeletePostService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {
    /** */
  }

  async execute({ post_user_id, post_id }: IRequest): Promise<void> {
    const post = await this.postsRepository.findByPostId(post_id);

    if (!post) {
      throw new AppError('Post not found');
    }

    if (post.post_user_id !== post_user_id) {
      throw new AppError("This post is not youts, you can't delete");
    }

    return this.postsRepository.delete(post);
  }
}

export default DeletePostService;
