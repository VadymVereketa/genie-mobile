import {UserSelector} from './slices/userSlice';

export namespace Flipper {
  export const middlewares: any[] = [];
  const reselectDebugger = __DEV__
    ? require('reselect-debugger-flipper')
    : null;

  if (__DEV__) {
    const createDebugger = require('redux-flipper').default;
    middlewares.push(createDebugger());
    middlewares.push(reselectDebugger.reduxMiddleware);
  }

  export const configureReselect = (getState: () => any) => {
    if (__DEV__) {
      reselectDebugger.configure({
        selectors: {
          ...reselectDebugger.namespaceSelectors(UserSelector, 'user'),
        },
        stateGetter: getState,
      });
    }
  };
}
