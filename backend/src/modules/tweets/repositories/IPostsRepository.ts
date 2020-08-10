import Post from '@modules/tweets/infra/typeorm/entities/Post';
import ICreatePostDTO from '@modules/tweets/dtos/ICreatePostDTO';
import IFindAllPostsDTO from '@modules/tweets/dtos/IFindAllPostsDTO';

export default interface IPostsRepository {
  findByPostId(id: string): Promise<Post | undefined>;
  findByUserId(post_user_id: string): Promise<Post[] | undefined>;
  findAllPosts(data: IFindAllPostsDTO): Promise<Post[]>;
  create(messageData: ICreatePostDTO): Promise<Post>;
  save(post: Post): Promise<Post>;
  delete(post: Post): Promise<void>;
  findUser(token_id: string): Promise<Post | undefined>;
}
