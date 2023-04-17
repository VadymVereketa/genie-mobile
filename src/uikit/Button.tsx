import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GenericTouchableProps} from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
import {StyleProp, TextStyle, TouchableOpacityProps} from 'react-native/types';
import {Font14} from './Typography/Font14';
import useTheme from '../Context/ThemeContext';
import sizes from '../utils/sizes';

type Props = TouchableOpacityProps &
  GenericTouchableProps & {
    children?: React.ReactNode | string;
    styleText?: StyleProp<TextStyle>;
    variant?: ButtonType;
  };

type ButtonType = 'default' | 'border';

const Button = ({
  variant = 'default',
  children,
  style,
  containerStyle,
  styleText,
  disabled,
  ...props
}: Props) => {
  const {palette} = useTheme();

  let color = palette.background;
  let bg = palette.primaryLight;
  let borderColor = palette.primaryLight;

  if (variant === 'border') {
    color = palette.primary;
    bg = palette.background;
    borderColor = palette.primary;
  }

  return (
    <TouchableOpacity
      disabled={disabled}
      style={[
        {
          backgroundColor: bg + (disabled ? '40' : ''),
          borderColor: borderColor + (disabled ? '10' : ''),
        },
        styles.style,
        style,
      ]}
      containerStyle={containerStyle}
      {...props}>
      {typeof children === 'string' ? (
        <Font14.W600
          style={[
            {
              color,
            },
            styleText,
          ]}>
          {children}
        </Font14.W600>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  style: {
    borderWidth: 1,
    borderRadius: sizes[8],
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: sizes[12],
  },
});
export default Button;
