import IHashPassword from '@modules/users/providers/HashPassword/models/IHashPassword';

export default class FakeHashPassword implements IHashPassword {
  public async generateHash(payload: string): Promise<string> {
    return payload;
  }

  public async compareHash(payload: string, hashed: string): Promise<boolean> {
    return payload === hashed;
  }
}
