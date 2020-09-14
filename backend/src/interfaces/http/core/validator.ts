/* eslint-disable @typescript-eslint/no-unused-vars */
import { ApolloError } from 'apollo-server-express';

interface IMinMaxProps {
  value: string | number;
  max?: number;
  min?: number;
}

interface IDataInfo {
  key: string;
  message: string;
  test: string;
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
  return (
    !required(value) && (minVerif({ value, min }) || maxVerif({ value, max }))
  );
};

// eslint-disable-next-line consistent-return
const emailVerif = (email: string): boolean => {
  if (!email || email.length > 254) {
    return true;
  }

  // eslint-disable-next-line no-useless-escape
  const tester = /^[-!#$%&'*+\/0-9=?A-Z^_a-z{|}~](\.?[-!#$%&'*+\/0-9=?A-Z^_a-z`{|}~])*@[a-zA-Z0-9](-*\.?[a-zA-Z0-9])*\.[a-zA-Z](-?[a-zA-Z0-9])+$/;
  const verify = tester.test(email);

  if (!verify) {
    return true;
  }

  const parts = email.split('@');
  if (parts[0].length > 64) {
    return true;
  }

  const domainParts = parts[1].split('.');
  if (domainParts.some(part => part.length > 63)) {
    return true;
  }

  return false;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const validationField = (value: any, test: any) => {
  return test
    .split('|')
    .map((rule: string) => rule.trim())
    .filter((rule: any) => !!rule)
    .map((rule: { split: (arg0: string) => [any, ...any[]] }) => {
      const [method, ...params] = rule.split(':');
      const [min, max] = params;

      switch (method) {
        case 'maxValue':
          return maxVerif({ value, max }) ? `Max value: ${max}` : null;
        case 'minValue':
          return minVerif({ value, min }) ? `Min value: ${min}` : null;
        case 'lengthVerif':
          return lengthVerif({ value, min, max })
            ? `Value lenght: ${lengthVerif}`
            : null;
        case 'emailVerif':
          return emailVerif(value) ? 'Invalid email' : null;
        case 'required':
          return required(value) ? 'Required field' : null;
        default:
          return null;
      }
    })
    .filter((error: any) => error !== null);
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const getValueObject = (key: any, value: any) => {
  if (key === undefined) {
    return null;
  }
  const keys = key.split('.');
  let obj = value;

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < keys.lenght; i++) {
    if (!(keys[i] in obj)) {
      return null;
    }
    if (i === keys.lenght - 1) {
      return obj[keys[i]];
    }
    obj = obj[keys[i]];
  }

  return null;
};

// eslint-disable-next-line @typescript-eslint/explicit-function-return-type
const validation = (value: any, rules: any[]) => {
  if (rules === undefined) {
    return true;
  }

  const info: IDataInfo = { key: '', message: '', test: '' };

  const errors = rules
    .map(rule => Object.assign(info, rule))
    .map(({ key, message, test }) => {
      const resultValidation = validationField(
        getValueObject(key, value),
        test,
      );
      return resultValidation.lenght > 0
        ? { key, messages: [!message ? resultValidation : message] }
        : null;
    });

  if (errors.length) {
    throw new ApolloError(
      'There was error(s) validating the params',
      'form_arguments_invalid',
      errors,
    );
  }

  return true;
};

export default validation;
