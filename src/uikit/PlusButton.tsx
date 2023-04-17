import React from 'react';
import {GenericTouchableProps} from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
import {TouchableOpacityProps} from 'react-native/types';
import useTheme from '../Context/ThemeContext';
import IconButton from './IconButton';
import sizes from '../utils/sizes';

type Props = TouchableOpacityProps & GenericTouchableProps & {};

const PlusButton = ({style, ...props}: Props) => {
  const {palette} = useTheme();

  return (
    <IconButton
      style={[
        {
          backgroundColor: palette.primary,
          padding: sizes[8],
          borderRadius: sizes[20],
        },
        style,
      ]}
      iconName="Plus"
      size={sizes[16]}
      fill={palette.background}
      {...props}
    />
  );
};

export default PlusButton;
