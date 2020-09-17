import Knex from 'knex';
import { IUserDTO } from 'types';

interface ICore {
  validator(value: any, rules: any[]): boolean;
  hashPassword(password: string): string;
  comparePassword(password: string, hashed: string): boolean;
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
