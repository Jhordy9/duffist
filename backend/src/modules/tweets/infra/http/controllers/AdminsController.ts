import { Request, Response } from 'express';
import { container } from 'tsyringe';

import UpdateAdminService from '@modules/tweets/service/UpdateAdminService';
import DeleteAdminService from '@modules/tweets/service/DeleteAdminService';
import ShowAdminService from '@modules/tweets/service/ShowAdminService';

export default class AdminsController {
  public async update(request: Request, response: Response): Promise<Response> {
    const token_id = request.user.id;
    const { message_comment, comment_id } = request.body;

    const updateComment = container.resolve(UpdateAdminService);

    const comment = await updateComment.execute({
      message_comment,
      comment_id,
      token_id,
    });

    return response.json(comment);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const token_id = request.user.id;
    const { comment_user_id } = request.params;

    const deleteComment = container.resolve(DeleteAdminService);

    await deleteComment.execute({
      token_id,
      comment_user_id,
    });

    return response.status(204).send();
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const token_id = request.user.id;

    const showComments = container.resolve(ShowAdminService);

    const comments = await showComments.execute({
      token_id,
    });

    return response.json(comments);
  }
}
