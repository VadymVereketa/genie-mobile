import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Font14} from '../../uikit/Typography/Font14';
import FigmaIcon from '../../components/FigmaIcon/FigmaIcon';
import sizes from '../../utils/sizes';
import useTheme from '../../Context/ThemeContext';

type Props = {
  title: string;
  onPress: () => void;
};

const PressableItem = ({onPress, title}: Props) => {
  const {palette} = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: sizes[16],
      }}>
      <Font14.W400>{title}</Font14.W400>
      <FigmaIcon name="ArrowRight" fill={palette.textLight} size={sizes[24]} />
    </TouchableOpacity>
  );
};

export default PressableItem;
