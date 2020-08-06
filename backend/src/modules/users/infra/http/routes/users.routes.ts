import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import UserController from '@modules/users/infra/http/controllers/UserController';

const usersRouter = Router();
const usersController = new UserController();

usersRouter.post(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      password: Joi.string().required(),
    },
  }),
  usersController.create,
);

export default usersRouter;
