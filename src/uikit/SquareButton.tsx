import React from 'react';
import {TouchableOpacity} from 'react-native-gesture-handler';

import PlusButton from './PlusButton';
import useTheme from '../Context/ThemeContext';
import sizes from '../utils/sizes';

type Props = {
  onPress?: () => void;
};

const SquareButton = ({onPress}: Props) => {
  const {palette} = useTheme();

  return (
    <TouchableOpacity
      onPress={onPress}
      style={{
        borderRadius: sizes[8],
        paddingVertical: sizes[24],
        backgroundColor: palette.line,
        width: sizes[70],
        alignItems: 'center',
        justifyContent: 'center',
        flexGrow: 1,
      }}>
      <PlusButton disabled />
    </TouchableOpacity>
  );
};

export default SquareButton;
