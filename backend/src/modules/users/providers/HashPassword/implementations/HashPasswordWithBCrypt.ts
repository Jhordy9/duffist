import { hash, compare } from 'bcryptjs';

import IHashPassword from '@modules/users/providers/HashPassword/models/IHashPassword';

export default class HashPasswordWithBCrypt implements IHashPassword {
  public async generateHash(payload: string): Promise<string> {
    return hash(payload, 8);
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return compare(payload, hashed);
  }
}
