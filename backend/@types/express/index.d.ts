/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/interface-name-prefix */

interface IUserDTO {
  id: string;
  email: string;
  name: string;
  hasDelete?: boolean;
}


export { };

declare global {
  namespace Express {
    interface Request {
      user?: IUserDTO;
    }
  }
}
