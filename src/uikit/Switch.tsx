import React from 'react';
import {StyleSheet, TouchableOpacity, View} from 'react-native';
import useTheme from '../Context/ThemeContext';
import FigmaIcon, {IFigmaIcon} from '../components/FigmaIcon/FigmaIcon';

type Props = {
  checked: boolean;
  onChange: (value: boolean) => void;
  iconOff?: IFigmaIcon;
  iconOn?: IFigmaIcon;
  activeColor?: string;
};
const Switch = ({checked, onChange, activeColor, iconOff, iconOn}: Props) => {
  const {palette} = useTheme();

  return (
    <TouchableOpacity
      onPress={() => onChange(!checked)}
      style={[
        styles.container,
        {
          backgroundColor: checked
            ? activeColor ?? palette.line
            : palette.placeholder,
        },
      ]}>
      <View
        style={[
          styles.circle,
          {
            backgroundColor: checked ? palette.primary : palette.background,
            transform: [{translateX: checked ? sizeCircle : 0}],
          },
        ]}>
        {/*   {checked && iconOn && (
          <FigmaIcon name={iconOn} size={12} fill={colors.lightIconColor} />
        )}
        {!checked && iconOff && (
          <FigmaIcon name={iconOff} size={12} fill={colors.backgroundColor} />
        )} */}
      </View>
    </TouchableOpacity>
  );
};

export default Switch;

const sizeCircle = 16;
const padding = 3;

const styles = StyleSheet.create({
  container: {
    width: sizeCircle * 2 + padding * 2,
    height: sizeCircle + padding * 2,
    borderRadius: 50,
  },
  circle: {
    width: sizeCircle,
    height: sizeCircle,
    borderRadius: sizeCircle,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    left: padding,
    top: padding,
  },
});
