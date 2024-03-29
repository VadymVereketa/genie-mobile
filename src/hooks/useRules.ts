import type {UseControllerProps} from 'react-hook-form';

import type {Leaves} from '../typings/Leaves';

export const useRules = () => {
  const rules = {
    fullName: {
      validate: (value: string) => {
        return value.trim() === '' ? 'Please enter your full name' : undefined;
      },
    },
    email: {
      validate: (value: string) => {
        return value.trim() === '' ? 'Please enter your email' : undefined;
      },
      pattern: {
        value: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
        message: 'Invalid email',
      },
    },
    password: {
      validate: (value: string) => {
        if (value.trim() === '') return 'Please enter your password';
        else if (value.trim().length < 7) {
          return 'Password must be at least 7 characters';
        }
        return undefined;
      },
    },
    confirmPassword: (value2: string) => (value1: string) => {
      return value2 === value1 ? undefined : 'Passwords do not match';
    },
  };
  return rules;
};
