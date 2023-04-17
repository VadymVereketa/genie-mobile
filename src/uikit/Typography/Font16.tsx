import React from 'react';
import {StyleSheet} from 'react-native';

import MyText, {MyTextProps} from './Text';
import {getFontFamily} from '../../utils/getFontFamily';
import sizes from '../../utils/sizes';

export namespace Font16 {
  export const W400 = ({children, style, ...props}: MyTextProps) => {
    return (
      <MyText style={StyleSheet.compose(styles.W400, style)} {...props}>
        {children}
      </MyText>
    );
  };
  export const W600 = ({children, style, ...props}: MyTextProps) => {
    return (
      <MyText style={StyleSheet.compose(styles.W600, style)} {...props}>
        {children}
      </MyText>
    );
  };
  export const W900 = ({children, style, ...props}: MyTextProps) => {
    return (
      <MyText style={StyleSheet.compose(styles.W900, style)} {...props}>
        {children}
      </MyText>
    );
  };
}

const styles = StyleSheet.create({
  W400: {
    fontFamily: getFontFamily(400),
    fontSize: sizes[16],
  },
  W600: {
    fontFamily: getFontFamily(600),
    fontSize: sizes[16],
  },
  W900: {
    fontFamily: getFontFamily(900),
    fontSize: sizes[16],
  },
});
