import { ApolloError } from 'apollo-server-express';
import Moment from 'moment';

interface IMinMaxProps {
  value: string | number;
  max?: number;
  min?: number;
}

const required = (value: any): boolean => {
  return !value;
};

const maxVerif = ({ value, max }: IMinMaxProps): boolean => {
  if (required(value)) {
    return false;
  }

  if (typeof value === 'string') {
    return value.length > Number(max);
  }

  if (typeof value === 'number') {
    return value > Number(max);
  }

  return false;
};

const minVerif = ({ value, min }: IMinMaxProps): boolean => {
  if (required(value)) {
    return false;
  }

  if (typeof value === 'string') {
    return value.length > Number(min);
  }

  if (typeof value === 'number') {
    return value > Number(min);
  }

  return false;
};

const lengthVerif = ({ value, min, max }: IMinMaxProps): boolean => {
  return !required(value) && (minVerif(value, min) || maxVerif(value, max));
};
