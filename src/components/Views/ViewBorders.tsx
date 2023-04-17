import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import sizes from '../../utils/sizes';
import useTheme from '../../Context/ThemeContext';

type Props = {
  children?: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  top?: boolean;
  bottom?: boolean;
};
const ViewBorders = ({children, style, top, bottom}: Props) => {
  const {palette} = useTheme();

  let borderTopWidth = 1;
  let borderBottomWidth = 1;

  if (top === undefined && bottom !== undefined) {
    borderTopWidth = 0;
    borderBottomWidth = bottom ? 1 : 0;
  } else if (top !== undefined && bottom === undefined) {
    borderTopWidth = top ? 1 : 0;
    borderBottomWidth = 0;
  } else if (top !== undefined && bottom !== undefined) {
    borderTopWidth = top ? 1 : 0;
    borderBottomWidth = bottom ? 1 : 0;
  }

  return (
    <View
      style={[
        styles.container,
        {
          borderColor: palette.line,
          borderTopWidth,
          borderBottomWidth,
        },
        style,
      ]}>
      {children}
    </View>
  );
};

export default ViewBorders;

const styles = StyleSheet.create({
  container: {
    paddingVertical: sizes[16],
  },
});
