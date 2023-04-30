import type {ReactNode} from 'react';
import React, {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
} from 'react';
import {Appearance} from 'react-native';

import {darkTheme} from '../themes/dark';
import {lightTheme} from '../themes/light';
import type {Theme} from '../typings/Theme';

type ThemeMode = 'auto' | 'light' | 'dark';

type ThemeContext = {
  palette: Theme['palette'];
  type: Theme['type'];
  mode: ThemeMode;
  setMode: (_mode: ThemeMode) => void;
  navigation: any;
};

const ThemeContext = createContext<ThemeContext>(
  undefined as unknown as ThemeContext,
);

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({children}: Props) => {
  const [mode, setMode] = useState<ThemeMode>('auto');
  const theme =
    (mode === 'auto' && Appearance.getColorScheme() === 'light') ||
    mode === 'light'
      ? lightTheme
      : darkTheme;

  const setAndSaveMode = useCallback(async (newMode: ThemeMode) => {
    setMode(newMode);
  }, []);

  const contextValue = useMemo(
    () => ({
      palette: theme.palette,
      type: theme.type,
      mode,
      setMode: setAndSaveMode,
      navigation: theme.navigation,
    }),
    [theme, mode, setAndSaveMode],
  );

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

const useTheme = () => {
  const theme = useContext(ThemeContext);

  if (theme === undefined) {
    throw new Error(
      'useTheme must be called inside a ThemeProvider and with a value',
    );
  }

  return theme;
};

export default useTheme;
