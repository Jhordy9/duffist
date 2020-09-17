import * as Knex from 'knex';
import { IUserDTO } from 'types';
import { hashPassword } from '../interfaces/http/core/index';

const password = hashPassword(`${process.env.USER_PASSWORD}`);
const email = process.env.USER_EMAIL;

const users: IUserDTO[] = [
  {
    id: '1',
    name: 'oneUser',
    email: `${email}`,
    password,
    delete: 0,
  },
  {
    id: '2',
    name: 'twoUser',
    email: `${email}`,
    password,
    delete: 0,
  },
];

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert(users);
}
