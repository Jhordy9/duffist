import Post from '@modules/tweets/infra/typeorm/entities/Post';
import ICreatePostDTO from '@modules/tweets/dtos/ICreatePostDTO';
import IFindAllPostsDTO from '@modules/tweets/dtos/IFindAllPostsDTO';
import IPostsRepository from '@modules/tweets/repositories/IPostsRepository';
import { uuid } from 'uuidv4';

class FakePostsRepository implements IPostsRepository {
  private posts: Post[] = [];

  public async create(messageData: ICreatePostDTO): Promise<Post> {
    const post = new Post();

    Object.assign(post, { id: uuid() }, messageData);

    this.posts.push(post);

    return post;
  }

  public async save(post: Post): Promise<Post> {
    const findIndex = this.posts.findIndex(findPost => findPost.id === post.id);

    this.posts[findIndex] = post;

    return post;
  }

  public async delete(post: Post): Promise<void> {
    const findIndex = this.posts.findIndex(findPost => findPost.id === post.id);

    this.posts.splice(findIndex, 1);
  }

  public async findUser(token_id: string): Promise<Post | undefined> {
    const user = await this.posts.find(data => data.post_user_id === token_id);

    return user;
  }

  public async findByUserId(post_user_id: string): Promise<Post[] | undefined> {
    const post = await this.posts.filter(
      data => data.post_user_id === post_user_id,
    );

    return post;
  }

  public async findByPostId(id: string): Promise<Post | undefined> {
    const post = await this.posts.find(data => data.id === id);

    return post;
  }

  public async findAllPosts({
    except_user_id,
  }: IFindAllPostsDTO): Promise<Post[]> {
    let { posts } = this;

    if (except_user_id) {
      posts = this.posts.filter(post => post.post_user_id !== except_user_id);
    }

    return posts;
  }
}

export default FakePostsRepository;
