import { IUserDTO, IContextDTO } from 'types';
// import { ApolloError } from 'apollo-server-express';

interface IUserDataDTO {
  userData: {
    name: string;
    password: string;
    email: string;
  };
}

const createUser = async (
  { userData }: IUserDataDTO,
  ctx: IContextDTO,
): Promise<IUserDTO> => {
  const { email, name, password } = userData;

  // const checkEmail = await ctx.database.from('users').where(email).first();
  // if (checkEmail === email) {
  //   throw new ApolloError('Email is already registered');
  // }

  const makeID = ctx.libs.uuidv4();

  const data: IUserDTO = {
    id: makeID,
    name,
    email,
    hasDelete: false,
    password: await ctx.core.hashPassword(password),
  };

  await ctx.database('users').insert(data);

  return ctx.database.from('users').where({ id: makeID }).first();
};

export default createUser;
