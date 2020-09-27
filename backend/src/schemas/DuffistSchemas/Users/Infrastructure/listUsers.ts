import { IContextDTO, IUserDTO } from 'types';

const listUsers = async (ctx: IContextDTO): Promise<IUserDTO[]> => {
  const users = await ctx.database.from('users').select('*');
  return users;
};

export default listUsers;
