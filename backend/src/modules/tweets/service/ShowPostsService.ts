import { injectable, inject } from 'tsyringe';

import IPostsRepository from '@modules/tweets/repositories/IPostsRepository';
import Post from '@modules/tweets/infra/typeorm/entities/Post';
import AppError from '@shared/errors/AppError';

interface IRequest {
  post_user_id: string;
}
@injectable()
class ShowPostsService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {
    /** */
  }

  async execute({ post_user_id }: IRequest): Promise<Post[] | undefined> {
    const posts = await this.postsRepository.findByUserId(post_user_id);

    if (!posts) {
      throw new AppError("You don't have any post");
    }

    return posts;
  }
}

export default ShowPostsService;
