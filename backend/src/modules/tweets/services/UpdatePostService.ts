import { injectable, inject } from 'tsyringe';

import IPostsRepository from '@modules/tweets/repositories/IPostsRepository';
import Post from '@modules/tweets/infra/typeorm/entities/Post';
import AppError from '@shared/errors/AppError';

interface IRequest {
  post_id: string;
  message_post: string;
  token_id: string;
}
@injectable()
class UpdatePostService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {
    /** */
  }

  async execute({ message_post, post_id, token_id }: IRequest): Promise<Post> {
    const post = await this.postsRepository.findByPostId(post_id);

    if (!post) {
      throw new AppError('Post not found');
    }

    if (post.post_user_id !== token_id) {
      throw new AppError('Incorret user');
    }

    post.message_post = message_post;

    return this.postsRepository.save(post);
  }
}

export default UpdatePostService;
