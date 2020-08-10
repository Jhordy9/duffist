import { injectable, inject } from 'tsyringe';

import IPostsRepository from '@modules/tweets/repositories/IPostsRepository';
import Post from '@modules/tweets/infra/typeorm/entities/Post';

interface IRequest {
  post_user_id: string;
}
@injectable()
class ListAllPostsAnotherUserService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {
    /** */
  }

  public async execute({ post_user_id }: IRequest): Promise<Post[]> {
    const posts = await this.postsRepository.findAllPosts({
      except_user_id: post_user_id,
    });

    return posts;
  }
}

export default ListAllPostsAnotherUserService;
