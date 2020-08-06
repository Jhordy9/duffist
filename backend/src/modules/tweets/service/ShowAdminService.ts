import { injectable, inject } from 'tsyringe';

import ICommentsRepository from '@modules/tweets/repositories/ICommentsRepository';
import IPostsRepository from '@modules/tweets/repositories/IPostsRepository';
import Comment from '@modules/tweets/infra/typeorm/entities/Comment';
import AppError from '@shared/errors/AppError';

interface IRequest {
  token_id: string;
}
@injectable()
class ShowCommentsService {
  constructor(
    @inject('CommentsRepository')
    private commentsRepository: ICommentsRepository,

    @inject('PostsRepository')
    private postsRepository: IPostsRepository,
  ) {
    /** */
  }

  async execute({ token_id }: IRequest): Promise<Comment[] | undefined> {
    const findPostId = await this.postsRepository.findUser(token_id);

    if (!findPostId) {
      throw new AppError('User non-existing');
    }

    const { id } = findPostId;

    const comments = await this.commentsRepository.findAdmin(id);

    if (!comments) {
      throw new AppError("You don't have comment in any post");
    }

    return comments;
  }
}

export default ShowCommentsService;
