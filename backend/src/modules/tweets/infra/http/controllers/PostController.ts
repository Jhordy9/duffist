import { Request, Response } from 'express';
import { container } from 'tsyringe';

import CreatePostService from '@modules/tweets/service/CreatePostService';
import UpdatePostService from '@modules/tweets/service/UpdatePostService';
import DeletePostService from '@modules/tweets/service/DeletePostService';
import ShowPostsService from '@modules/tweets/service/ShowPostsService';
import ListAllPostsAnotherUserService from '@modules/tweets/service/ListAllPostsAnotherUserService';

export default class PostController {
  public async create(request: Request, response: Response): Promise<Response> {
    const post_user_id = request.user.id;
    const { message_post } = request.body;

    const createPost = container.resolve(CreatePostService);

    const post = await createPost.execute({
      message_post,
      post_user_id,
    });

    return response.json(post);
  }

  public async update(request: Request, response: Response): Promise<Response> {
    const token_id = request.user.id;
    const { message_post, post_id } = request.body;

    const updatePost = container.resolve(UpdatePostService);

    const post = await updatePost.execute({
      message_post,
      post_id,
      token_id,
    });

    return response.json(post);
  }

  public async delete(request: Request, response: Response): Promise<Response> {
    const post_user_id = request.user.id;
    const { post_id } = request.params;

    const deletePost = container.resolve(DeletePostService);

    await deletePost.execute({
      post_id,
      post_user_id,
    });

    return response.status(204).send();
  }

  public async show(request: Request, response: Response): Promise<Response> {
    const post_user_id = request.user.id;

    const showPosts = container.resolve(ShowPostsService);

    const posts = await showPosts.execute({
      post_user_id,
    });

    return response.json(posts);
  }

  public async index(request: Request, response: Response): Promise<Response> {
    const post_user_id = request.user.id;

    const listPosts = container.resolve(ListAllPostsAnotherUserService);

    const posts = await listPosts.execute({
      post_user_id,
    });

    return response.json(posts);
  }
}
