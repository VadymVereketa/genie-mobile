import {MMKV, useMMKVBoolean, useMMKVNumber} from 'react-native-mmkv';

import keys from './keys';

export namespace Storage {
  export const Default = new MMKV();
  export const Redux = new MMKV({
    id: 'redux',
    encryptionKey: 'redux-key',
  });
}
