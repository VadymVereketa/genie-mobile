import type {PersistConfig} from 'redux-persist';
import persistReducer from 'redux-persist/es/persistReducer';

import {persistStorage} from './persistStorage';
import profileSettings from './slices/profileSettings';
import type {QuestionsState} from './slices/questionsSlice';
import questions from './slices/questionsSlice';
import type {UserState} from './slices/userSlice';
import userSlice from './slices/userSlice';

const userPersistConfig: PersistConfig<UserState> = {
  key: 'userr',
  storage: persistStorage,
  blacklist: ['error', 'loginError'],
};

const questionsPersistConfig: PersistConfig<QuestionsState> = {
  key: 'questions',
  storage: persistStorage,
  //blacklist: [''],
};

const rootReducer = {
  user: persistReducer(userPersistConfig, userSlice),
  questions: persistReducer(questionsPersistConfig, questions),
};
export default rootReducer;
