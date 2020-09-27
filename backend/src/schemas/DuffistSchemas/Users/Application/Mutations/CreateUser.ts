import { IUserDTO, IContextDTO } from 'types';
import createUser from '../../Infrastructure/createUser';

interface IDataInput {
  userInput: IUserDTO;
}

export default (
  obj: object,
  { userInput }: IDataInput,
  ctx: IContextDTO,
): object => {
  return createUser(userInput, ctx);
};
