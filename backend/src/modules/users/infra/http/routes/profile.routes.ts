import { Router } from 'express';
import { celebrate, Segments, Joi } from 'celebrate';

import ProfileController from '@modules/users/infra/http/controllers/ProfileController';
import userAuthenticated from '@shared/middlewares/userAuthenticated';

const profileRouter = Router();
const profileController = new ProfileController();

profileRouter.use(userAuthenticated);

profileRouter.get('/', profileController.show);
profileRouter.put(
  '/',
  celebrate({
    [Segments.BODY]: {
      name: Joi.string().required(),
      email: Joi.string().email().required(),
      old_password: Joi.string(),
      password: Joi.string(),
      password_confirmation: Joi.string().required().valid(Joi.ref('password')),
    },
  }),
  profileController.update,
);
profileRouter.delete('/:user_id', profileController.delete);

export default profileRouter;
