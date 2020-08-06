import { getRepository, Repository, Not } from 'typeorm';

import IPostsRepository from '@modules/tweets/repositories/IPostsRepository';
import ICreatePostDTO from '@modules/tweets/dtos/ICreatePostDTO';
import Post from '@modules/tweets/infra/typeorm/entities/Post';
import IFindAllPostsDTO from '@modules/tweets/dtos/IFindAllPostsDTO';

class PostsRepository implements IPostsRepository {
  private ormRepository: Repository<Post>;

  constructor() {
    this.ormRepository = getRepository(Post);
  }

  public async findByUserId(post_user_id: string): Promise<Post[] | undefined> {
    const posts = await this.ormRepository.find({ post_user_id });

    return posts;
  }

  public async findByPostId(id: string): Promise<Post | undefined> {
    const post = await this.ormRepository.findOne(id);

    return post;
  }

  public async findAllPosts({
    except_user_id,
  }: IFindAllPostsDTO): Promise<Post[]> {
    let posts: Post[];

    if (except_user_id) {
      posts = await this.ormRepository.find({
        where: {
          post_user_id: Not(except_user_id),
        },
      });
    } else {
      posts = await this.ormRepository.find();
    }

    return posts;
  }

  public async create(messageData: ICreatePostDTO): Promise<Post> {
    const post = await this.ormRepository.create(messageData);

    await this.ormRepository.save(post);

    return post;
  }

  public async save(post: Post): Promise<Post> {
    return this.ormRepository.save(post);
  }

  public async delete(post: Post): Promise<void> {
    await this.ormRepository.remove(post);
  }

  public async findUser(token_id: string): Promise<Post | undefined> {
    const user_id = await this.ormRepository.findOne({
      where: { post_user_id: token_id },
    });

    return user_id;
  }
}

export default PostsRepository;
