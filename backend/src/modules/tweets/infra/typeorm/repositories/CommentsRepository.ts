import { getRepository, Repository } from 'typeorm';

import ICommentsRepository from '@modules/tweets/repositories/ICommentsRepository';
import ICreateCommentDTO from '@modules/tweets/dtos/ICreateCommentDTO';
import Comment from '@modules/tweets/infra/typeorm/entities/Comment';

class CommentsRepository implements ICommentsRepository {
  private ormRepository: Repository<Comment>;

  constructor() {
    this.ormRepository = getRepository(Comment);
  }

  public async findAllCommentsByUserId(
    comment_user_id: string,
  ): Promise<Comment[] | undefined> {
    const allCommentWithUserId = await this.ormRepository.find({
      comment_user_id,
    });

    return allCommentWithUserId;
  }

  public async findCommentById(
    comment_id: string,
  ): Promise<Comment | undefined> {
    const commentId = await this.ormRepository.findOne({
      where: { id: comment_id },
    });

    return commentId;
  }

  public async create(commentData: ICreateCommentDTO): Promise<Comment> {
    const comment = await this.ormRepository.create(commentData);

    await this.ormRepository.save(comment);

    return comment;
  }

  public async save(comment: Comment): Promise<Comment> {
    return this.ormRepository.save(comment);
  }

  public async delete(comment: Comment): Promise<void> {
    await this.ormRepository.remove(comment);
  }

  public async findAdmin(id: string): Promise<Comment[] | undefined> {
    return this.ormRepository.find({
      where: { post_id: id },
    });
  }
}

export default CommentsRepository;
