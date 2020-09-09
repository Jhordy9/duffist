import { config } from 'dotenv';
import server from './interfaces/http/server';

config();

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
(() => {
  server();
})();
