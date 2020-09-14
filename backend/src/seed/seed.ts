import * as Knex from 'knex';
import Crypto from 'crypto';
import { IUserDTO } from 'types';

const adminPassword = Crypto.createHmac('sha256', `${process.env.HASH_SECRET}`)
  .update(`${process.env.ADMIN_PASSWORD}`)
  .digest('hex');
const adminEmail = process.env.ADMIN_EMAIL;
const workerPassword = Crypto.createHmac('sha256', `${process.env.HASH_SECRET}`)
  .update(`${process.env.WORKER_PASSWORD}`)
  .digest('hex');
const workerEmail = process.env.WORKER_EMAIL;

const users: IUserDTO[] = [
  {
    id: '1',
    name: 'profileAdmin',
    email: `${adminEmail}`,
    password: adminPassword,
    profiles: [
      {
        id: '2',
        type: 'Admin',
        userID: '1',
      },
    ],
  },
  {
    id: '3',
    name: 'profileWorker',
    email: `${workerEmail}`,
    password: workerPassword,
    profiles: [
      {
        id: '4',
        type: 'Worker',
        userID: '3',
      },
    ],
  },
];

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex('users').del();

  // Inserts seed entries
  await knex('users').insert(users);
}
