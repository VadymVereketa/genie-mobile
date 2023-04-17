import React from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import {View} from 'react-native';

import useTheme from '../Context/ThemeContext';

type Props = {
  style?: StyleProp<ViewStyle>;
};
const Line = ({style}: Props) => {
  const {palette} = useTheme();

  return (
    <View
      style={[
        {
          width: '100%',
          height: 1,
          backgroundColor: palette.line,
        },
        style,
      ]}
    />
  );
};

export default Line;
