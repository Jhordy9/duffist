import { Router } from 'express';

import userAuthenticated from '@shared/middlewares/userAuthenticated';
import AdminsController from '@modules/tweets/infra/http/controllers/AdminsController';

const adminsRouter = Router();
const adminsController = new AdminsController();

adminsRouter.use(userAuthenticated);
adminsRouter.delete('/:comment_id', adminsController.delete);
adminsRouter.get('/show', adminsController.show);

export default adminsRouter;
