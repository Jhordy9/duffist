import { IContextDTO } from 'types';
import { ApolloError } from 'apollo-server-express';

const deleteUser = async (
  id: string,
  ctx: IContextDTO,
): Promise<number | undefined> => {
  if (ctx.user?.id === id) {
    const userUpdateForDelete = await ctx
      .database('users')
      .update({
        hasDelete: true,
      })
      .where('id', '=', { id });

    return userUpdateForDelete;
  }
  throw new ApolloError("You don't have permission for delete");
};

export default deleteUser;
