import Knex from 'knex';
import { ApolloError } from 'apollo-server-express';
import { IUserDTO, IProfileDTO } from 'types';

interface ICore {
  validator(value: any, rules: any[]): boolean;
  allows(type: string): IUserDTO | IProfileDTO | undefined;
  authorization(
    ctx: IContextDTO,
    schemaName: string,
    type: string,
  ): boolean | ApolloError;
}

export default interface IContextDTO {
  database: Knex;
  core: ICore;
}
