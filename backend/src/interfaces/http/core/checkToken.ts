import { Request } from 'express';

interface IConnectionProps {
  context: {
    token: string;
  };
}

const checkToken = (
  req: Request,
  connection: IConnectionProps | undefined,
): string => {
  if (connection) return connection.context.token;

  const token = req.headers.authorization || '';

  return token;
};

export default checkToken;
