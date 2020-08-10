import { injectable, inject } from 'tsyringe';

import IPostsRepository from '@modules/tweets/repositories/IPostsRepository';
import Post from '@modules/tweets/infra/typeorm/entities/Post';

interface IRequest {
  message_post: string;
  post_user_id: string;
}

@injectable()
class CreatePostService {
  constructor(
    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {
    /** */
  }

  async execute({ message_post, post_user_id }: IRequest): Promise<Post> {
    const post = await this.postsRepository.create({
      message_post,
      post_user_id,
    });

    return this.postsRepository.save(post);
  }
}

export default CreatePostService;
