import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import userAuthenticated from '@shared/middlewares/userAuthenticated';
import AdminsController from '@modules/tweets/infra/http/controllers/AdminsController';

const adminsRouter = Router();
const adminsController = new AdminsController();

adminsRouter.use(userAuthenticated);

adminsRouter.get(
  '/',
  celebrate({
    [Segments.BODY]: {
      message_comment: Joi.string().required(),
      comment_id: Joi.string().required(),
    },
  }),
  adminsController.update,
);
adminsRouter.delete('/:comment_user_id', adminsController.delete);
adminsRouter.get('/show', adminsController.show);

export default adminsRouter;
