import { hashSync, compareSync } from 'bcrypt';

const hashPassword = (password: string): string => {
  const hashed = hashSync(password, `${process.env.HASH_SALT}`);

  return hashed;
};

const comparePassword = (password: string, hashed: string): boolean => {
  const compare = compareSync(password, hashed);

  return compare;
};

export { hashPassword, comparePassword };
