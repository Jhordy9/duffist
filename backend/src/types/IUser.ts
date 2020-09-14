import IProfileDTO from './IProfile';

export default interface IUserDTO {
  id: string;
  name: string;
  password: string;
  email: string;
  profiles: IProfileDTO[];
}
