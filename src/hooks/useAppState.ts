import {useEffect, useRef} from 'react';
import type {AppStateStatus} from 'react-native';
import {AppState} from 'react-native';

type UseAppStateParams = {
  onForeground?: () => void;
  onBackground?: () => void;
  onChangeState?: (
    _currentAppState: AppStateStatus,
    _nextAppState: AppStateStatus,
  ) => void;
};

const useAppState = ({
  onForeground,
  onBackground,
  onChangeState,
}: UseAppStateParams) => {
  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const handleStateChange = (nextAppState: AppStateStatus) => {
      if (onChangeState) {
        onChangeState(appState.current, nextAppState);
      }

      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        // Entering foreground
        if (onForeground) {
          onForeground();
        }
      } else if (
        appState.current === 'active' &&
        nextAppState.match(/inactive|background/)
      ) {
        // Entering background
        if (onBackground) {
          onBackground();
        }
      }

      appState.current = nextAppState;
    };

    const subscription = AppState.addEventListener('change', handleStateChange);

    return () => {
      subscription.remove();
    };
  }, [onForeground, onBackground, onChangeState]);
};

export type {UseAppStateParams};
export default useAppState;
