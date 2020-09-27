import Knex from 'knex';
import { IUserDTO } from 'types';

interface ICore {
  validator(value: any, rules: any[]): boolean;
  hashPassword(password: string): Promise<string>;
  comparePassword(password: string, hashed: string): Promise<boolean>;
}

interface ILibs {
  uuidv4(): string;
}

export default interface IContextDTO {
  user: IUserDTO | undefined;
  database: Knex;
  core: ICore;
  libs: ILibs;
}
