import {DefaultTheme} from '@react-navigation/native';

const colors = {
  white: '#ffffff',
  blue: '#3048EA',
  lightBlue: '#989CFF',
  extraBlueLight: '#B9BCFF',
  black: '#03052B',
  lightGrey: '#C2C3CC',
  grey: '#717275',
  red: '#F45C6F',
  lightPink: '#FCF0F0',
  extraLightBLue: '#EFF5FF',
};

const palette = {
  background: colors.white,
  text: colors.black,
  textLight: colors.grey,
  primary: colors.blue,
  primaryLight: colors.lightBlue,
  primaryExtraLight: colors.extraBlueLight,
  border: colors.lightGrey,
  placeholder: colors.lightGrey,
  error: colors.red,
  secondary: colors.lightPink,
  line: colors.extraLightBLue,
};
export const darkTheme = {
  type: 'dark' as 'dark' | 'light',
  palette,
  navigation: {
    ...DefaultTheme,
    dark: true,
    colors: {
      ...DefaultTheme.colors,
    },
  },
};
