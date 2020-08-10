import { Request, Response } from 'express';
import { container } from 'tsyringe';

import DeleteAdminService from '@modules/tweets/services/DeleteAdminService';
import ShowAdminService from '@modules/tweets/services/ShowAdminService';

export default class AdminsController {
  public async delete(request: Request, response: Response): Promise<Response> {
    const token_id = request.user.id;
    const { comment_id } = request.params;

    const deleteComment = container.resolve(DeleteAdminService);

    await deleteComment.execute({
      token_id,
      comment_id,
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
