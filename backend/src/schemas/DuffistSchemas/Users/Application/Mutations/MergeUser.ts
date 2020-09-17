import { IUserDTO, IContextDTO } from 'types';
import createUser from '../../Infrastructure/createUser';
import updateUser from '../../Infrastructure/updateUser';
import deleteUser from '../../Infrastructure/deleteUser';

interface IRequest {
  userInput: IUserDTO;
  ctx: IContextDTO;
  token: string;
}

export default ({ userInput, ctx }: IRequest): object | null => {
  if (userInput.hasDelete === false) {
    return userInput.id
      ? updateUser(userInput, ctx)
      : createUser(userInput, ctx);
  }

  if (userInput.hasDelete === true) {
    return deleteUser(userInput.id, ctx);
  }

  return null;
};
