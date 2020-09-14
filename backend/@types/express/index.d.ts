/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/interface-name-prefix */

interface IProfileDTO {
  id: string;
  userID: string;
  type: string;
}


interface IUserDTO {
  id: string;
  name: string;
  email: string;
  profiles: IProfileDTO[];
}


export { };

declare global {
  namespace Express {
    interface Request {
      user?: IUserDTO;
    }
  }
}
