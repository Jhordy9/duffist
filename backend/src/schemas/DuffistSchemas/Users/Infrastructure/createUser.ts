import { IUserDTO, IContextDTO } from 'types';
import { ApolloError } from 'apollo-server-express';

const createUser = async (
  { email, password, name }: IUserDTO,
  ctx: IContextDTO,
): Promise<IUserDTO> => {
  const checkEmail = await ctx.database.from('users').where({ email }).first();

  if (checkEmail) {
    throw new ApolloError('Email is already registered');
  }

  const data: IUserDTO = {
    id: ctx.libs.uuidv4(),
    name,
    email,
    hasDelete: false,
    password: ctx.core.hashPassword(password),
  };

  const user: IUserDTO = await ctx.database('users').insert(data);

  return user;
};

export default createUser;
