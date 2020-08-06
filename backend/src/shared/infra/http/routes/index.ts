import { Router } from 'express';

import usersRouter from '@modules/users/infra/http/routes/users.routes';
import profileRouter from '@modules/users/infra/http/routes/profile.routes';
import sessionsRouter from '@modules/users/infra/http/routes/sessions.routes';
import postsRouter from '@modules/tweets/infra/http/routes/posts.routes';
import commentsRouter from '@modules/tweets/infra/http/routes/comments.routes';
import adminsRouter from '@modules/tweets/infra/http/routes/admins.routes';

const routes = Router();

routes.use('/users', usersRouter);
routes.use('/profile', profileRouter);
routes.use('/sessions', sessionsRouter);
routes.use('/posts', postsRouter);
routes.use('/posts/comment', commentsRouter);
routes.use('/admin', adminsRouter);

export default routes;
