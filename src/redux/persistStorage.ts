import type {Storage as TypeStorage} from 'redux-persist';

import {Storage} from '../services/storages/Storage';

const storage = Storage.Redux;

export const persistStorage: TypeStorage = {
  setItem: (key, value) => {
    storage.set(key, value);
    return Promise.resolve(true);
  },
  getItem: key => {
    const value = storage.getString(key);
    return Promise.resolve(value);
  },
  removeItem: key => {
    storage.delete(key);
    return Promise.resolve();
  },
};
