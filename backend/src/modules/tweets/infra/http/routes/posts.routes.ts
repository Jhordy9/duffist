import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import userAuthenticated from '@shared/middlewares/userAuthenticated';
import PostsController from '@modules/tweets/infra/http/controllers/PostController';

const postsRouter = Router();
const postsController = new PostsController();

postsRouter.use(userAuthenticated);

postsRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      message_post: Joi.string().required(),
    },
  }),
  postsController.create,
);
postsRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      message_post: Joi.string().required(),
      post_id: Joi.string().required(),
    },
  }),
  postsController.update,
);
postsRouter.delete('/:post_id', postsController.delete);
postsRouter.get('/show', postsController.show);
postsRouter.get('/index', postsController.index);

export default postsRouter;
