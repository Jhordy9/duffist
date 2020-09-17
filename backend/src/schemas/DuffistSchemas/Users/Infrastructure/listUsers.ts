import { IContextDTO, IUserDTO } from 'types';

const listUsers = async (ctx: IContextDTO): Promise<IUserDTO[]> => {
  const getUsers = await ctx.database.from('users');

  return getUsers;
};

export default listUsers;
