import React from 'react';
import type {TextProps, TextStyle} from 'react-native';
import {StyleSheet, Text as RNText} from 'react-native';
import Animated from 'react-native-reanimated';
import useTheme from '../../Context/ThemeContext';
import {Theme} from '../../typings/Theme';

interface MyTextProps extends TextProps {
  children?: any;
  animated?: boolean;
  color?: keyof Theme['palette'];
  textTransform?: TextStyle['textTransform'];
  textAlign?: TextStyle['textAlign'];
  textDecorationLine?: TextStyle['textDecorationLine'];
}
const MyText = React.memo(
  ({
    children,
    style,
    animated = false,
    color = 'text',
    textTransform,
    textAlign,
    textDecorationLine,
    ...props
  }: MyTextProps) => {
    const {palette} = useTheme();

    return (
      <RNText
        maxFontSizeMultiplier={1}
        style={StyleSheet.compose(
          {
            color: palette[color],
            textAlign,
            textDecorationLine,
            textTransform,
          },
          style,
        )}
        minimumFontScale={1}
        {...props}>
        {children}
      </RNText>
    );
  },
);

MyText.displayName = 'MyText';
export type {MyTextProps};
export default MyText;
