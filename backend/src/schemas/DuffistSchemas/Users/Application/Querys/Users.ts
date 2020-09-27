import { IContextDTO, IUserDTO } from 'types';
import listUsers from '../../Infrastructure/listUsers';

export default (
  _parent: any,
  args: any,
  ctx: IContextDTO,
): Promise<IUserDTO[]> => {
  return listUsers(ctx);
};
