import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreateCommentInAPostService from '@modules/tweets/services/CreateCommentInAPostService';
import UpdateCommentService from '@modules/tweets/services/UpdateCommentService';
import DeleteCommentService from '@modules/tweets/services/DeleteCommentService';
import ShowCommentsService from '@modules/tweets/services/ShowCommentsService';

export default class CommentController {
  public async create(request: Request, response: Response): Promise<Response> {
    const comment_user_id = request.user.id;
    const { message_comment, post_id } = request.body;
    const createComment = container.resolve(CreateCommentInAPostService);

    const comment = await createComment.execute({
      message_comment,
      comment_user_id,
      post_id,
    });

    return response.json(comment);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const token_id = request.user.id;
    const { message_comment, comment_id } = request.body;

    const updateComment = container.resolve(UpdateCommentService);

    const comment = await updateComment.execute({
      message_comment,
      comment_id,
      token_id,
    });

    return response.json(comment);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const token_id = request.user.id;
    const { comment_id } = request.params;

    const deleteComment = container.resolve(DeleteCommentService);

    await deleteComment.execute({
      comment_id,
      token_id,
    });

    return response.status(204).send();
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const comment_user_id = request.user.id;

    const showComments = container.resolve(ShowCommentsService);

    const comments = await showComments.execute({
      comment_user_id,
    });

    return response.json(comments);
  }
}
