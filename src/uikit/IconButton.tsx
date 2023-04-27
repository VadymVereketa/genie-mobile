import React from 'react';
import type {TouchableOpacityProps} from 'react-native/types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import type {GenericTouchableProps} from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';

import type {IFigmaIcon} from '../components/FigmaIcon/FigmaIcon';
import FigmaIcon from '../components/FigmaIcon/FigmaIcon';
import useTheme from '../Context/ThemeContext';
import sizes from '../utils/sizes';

type Props = TouchableOpacityProps &
  GenericTouchableProps & {
    iconName: IFigmaIcon;
    size?: number;
    fill?: string;
  };

const IconButton = ({iconName, size, fill, ...props}: Props) => {
  const {palette} = useTheme();

  return (
    <TouchableOpacity hitSlop={sizes[8]} accessibilityLabel="Button" {...props}>
      <FigmaIcon
        strokeWidth={1.5}
        name={iconName}
        size={size}
        fill={fill ?? palette.border}
      />
    </TouchableOpacity>
  );
};

export default IconButton;
