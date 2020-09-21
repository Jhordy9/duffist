import { IUserDTO, IContextDTO } from 'types';
import { ApolloError } from 'apollo-server-express';

const createUser = async (
  { email, password, name }: IUserDTO,
  ctx: IContextDTO,
): Promise<IUserDTO> => {
  if (email) {
    const checkEmail = await ctx.database.from('users').where(email).first();
    if (checkEmail) {
      throw new ApolloError('Email is already registered');
    }
  }

  const makeID = ctx.libs.uuidv4();

  const data: IUserDTO = {
    id: makeID,
    name,
    email,
    hasDelete: false,
    password: ctx.core.hashPassword(password),
  };

  await ctx.database('users').insert(data);

  return ctx.database.from('users').where({ id: makeID }).first();
};

export default createUser;
