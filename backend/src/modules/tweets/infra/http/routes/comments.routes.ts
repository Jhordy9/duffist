import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import userAuthenticated from '@shared/middlewares/userAuthenticated';
import CommentController from '@modules/tweets/infra/http/controllers/CommentController';

const commentsRouter = Router();
const commentsController = new CommentController();

commentsRouter.use(userAuthenticated);

commentsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      message_comment: Joi.string().required(),
      post_id: Joi.string().required(),
    },
  }),
  commentsController.create,
);
commentsRouter.get(
  '/',
  celebrate({
    [Segments.BODY]: {
      message_comment: Joi.string().required(),
      comment_id: Joi.string().required(),
    },
  }),
  commentsController.update,
);
commentsRouter.delete('/:comment_user_id', commentsController.delete);
commentsRouter.get('/show', commentsController.show);

export default commentsRouter;
