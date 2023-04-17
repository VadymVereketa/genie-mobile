import React from 'react';
import {StyleSheet, View} from 'react-native';
import type {TouchableOpacityProps} from 'react-native/types';
import {TouchableOpacity} from 'react-native-gesture-handler';
import type {GenericTouchableProps} from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';

import IconButton from './IconButton';
import {Font12} from './Typography/Font12';
import useTheme from '../Context/ThemeContext';
import type {Theme} from '../typings/Theme';
import sizes from '../utils/sizes';

type Props = TouchableOpacityProps &
  GenericTouchableProps & {
    title?: string;
    color?: 'blue' | 'grey';
    isRemove?: boolean;
  };

const TagButton = ({
  style,
  disabled,
  title,
  color,
  isRemove = true,
  onPress,
  ...props
}: Props) => {
  const {palette} = useTheme();

  let border = palette.border;
  let text: keyof Theme['palette'] = 'textLight';

  if (color === 'blue') {
    border = palette.primary;
    text = 'primary';
  }

  const Component = isRemove ? View : TouchableOpacity;

  return (
    <Component
      onPress={onPress}
      style={[
        styles.style,
        {
          borderColor: border,
        },
        style,
      ]}>
      <Font12.W400
        style={{
          paddingRight: sizes[8],
        }}
        color={text}>
        {title}
      </Font12.W400>
      {isRemove ? (
        <IconButton
          hitSlop={sizes[10]}
          disabled={disabled}
          iconName="Close"
          size={sizes[12]}
          fill={border}
          onPress={onPress}
          {...props}
        />
      ) : null}
    </Component>
  );
};

const styles = StyleSheet.create({
  style: {
    borderWidth: 1,
    borderRadius: sizes[24],
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: sizes[12],
    paddingHorizontal: sizes[16],
    flexDirection: 'row',
  },
});
export default TagButton;
