import { IContextDTO } from 'types';
import listUsers from '../../Infrastructure/listUsers';

export default (ctx: IContextDTO): object => {
  return listUsers(ctx);
};
