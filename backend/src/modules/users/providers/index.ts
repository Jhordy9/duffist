import { container } from 'tsyringe';

import IHashPassword from '@modules/users/providers/HashPassword/models/IHashPassword';
import HashPasswordWithBCrypt from '@modules/users/providers/HashPassword/implementations/HashPasswordWithBCrypt';

container.registerSingleton<IHashPassword>(
  'HashPassword',
  HashPasswordWithBCrypt,
);
