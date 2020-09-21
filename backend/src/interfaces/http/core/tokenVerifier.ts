import { ApolloError } from 'apollo-server-express';
import { Request } from 'express';
import * as jwt from 'jsonwebtoken';
import { IUserDTO } from 'types';
import database from '../../../infra/index';
import auth from '../../../config/auth';

interface ITokenPayLoad {
  iat: number;
  exp: number;
  sub: string;
}

const tokenVerifier = async (
  req: Request,
  token: string,
): Promise<IUserDTO | undefined> => {
  if (token) {
    try {
      const decoded = jwt.verify(token, auth.jwt.secret);
      const { sub } = decoded as ITokenPayLoad;

      const { email, id, name }: IUserDTO = await database
        .table('users')
        .where('id', '=', sub)
        .first();

      req.user = {
        id,
        email,
        name,
      };

      return;
    } catch (e) {
      throw new ApolloError('This is not a valid token!', 'invalid_token');
    }
  }
};

export default tokenVerifier;
