import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GenericTouchableProps} from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
import {TouchableOpacityProps} from 'react-native/types';
import useTheme from '../Context/ThemeContext';
import FigmaIcon, {IFigmaIcon} from '../components/FigmaIcon/FigmaIcon';

type Props = TouchableOpacityProps &
  GenericTouchableProps & {
    iconName: IFigmaIcon;
    size?: number;
    fill?: string;
  };

const IconButton = ({iconName, size, fill, ...props}: Props) => {
  const {palette} = useTheme();

  return (
    <TouchableOpacity {...props}>
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
