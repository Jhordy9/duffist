import { IUserDTO, IContextDTO } from 'types';

const updateUser = async (
  { name, password, email, id }: IUserDTO,
  ctx: IContextDTO,
): Promise<number | undefined> => {
  const user = await ctx
    .database('users')
    .update({
      name,
      email,
      password,
    })
    .where('id', '=', id);

  return user;
};

export default updateUser;
