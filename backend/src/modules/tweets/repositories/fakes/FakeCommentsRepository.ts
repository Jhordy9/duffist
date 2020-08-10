import Comment from '@modules/tweets/infra/typeorm/entities/Comment';
import ICreateCommentDTO from '@modules/tweets/dtos/ICreateCommentDTO';
import ICommentsRepository from '@modules/tweets/repositories/ICommentsRepository';
import { uuid } from 'uuidv4';

class FakeCommentsRepository implements ICommentsRepository {
  private comments: Comment[] = [];

  public async create({
    comment_user_id,
    message_comment,
    post_id,
  }: ICreateCommentDTO): Promise<Comment> {
    const comment = new Comment();

    Object.assign(comment, {
      id: uuid(),
      comment_user_id,
      message_comment,
      post_id,
    });

    this.comments.push(comment);

    return comment;
  }

  public async delete(comment: Comment): Promise<void> {
    const findIndex = this.comments.findIndex(
      findComment => findComment.id === comment.id,
    );

    this.comments.splice(findIndex, 1);
  }

  public async save(comment: Comment): Promise<Comment> {
    const findIndex = this.comments.findIndex(
      findComment => findComment.id === comment.id,
    );

    this.comments[findIndex] = comment;

    return comment;
  }

  public async findAdmin(id: string): Promise<Comment[] | undefined> {
    const findComment = this.comments.filter(p_id => p_id.post_id === id);

    return findComment;
  }

  public async findAllCommentsByUserId(
    comment_user_id: string,
  ): Promise<Comment[] | undefined> {
    const allComments = this.comments.filter(data => {
      return data.comment_user_id === comment_user_id;
    });

    return allComments;
  }

  public async findCommentById(
    comment_id: string,
  ): Promise<Comment | undefined> {
    const findComment = this.comments.find(data => {
      return data.id === comment_id;
    });

    return findComment;
  }
}

export default FakeCommentsRepository;
