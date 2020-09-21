import { hashSync, compareSync } from 'bcrypt';

const hashPassword = async (password: string): Promise<string> => {
  const hashed = await hashSync(password, Number(process.env.HASH_SALT));

  return hashed;
};

const comparePassword = async (
  password: string,
  hashed: string,
): Promise<boolean> => {
  const compare = await compareSync(password, hashed);

  return compare;
};

export { hashPassword, comparePassword };
