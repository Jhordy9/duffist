import Comment from '@modules/tweets/infra/typeorm/entities/Comment';
import ICreateCommentDTO from '@modules/tweets/dtos/ICreateCommentDTO';

export default interface ICommentsRepository {
  findCommentById(comment_id: string): Promise<Comment | undefined>;
  findAllCommentsByUserId(
    comment_user_id: string,
  ): Promise<Comment[] | undefined>;
  create(commentData: ICreateCommentDTO): Promise<Comment>;
  save(comment: Comment): Promise<Comment>;
  delete(comment: Comment): Promise<void>;
  findAdmin(id: string): Promise<Comment[] | undefined>;
}
