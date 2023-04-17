import React, {useMemo} from 'react';
import type {StyleProp, ViewProps, ViewStyle} from 'react-native';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import useTheme from '../Context/ThemeContext';
import sizes from '../utils/sizes';

type ScreenContainerProps = ViewProps & {
  scrollable?: boolean;
  contentContainerStyle?: StyleProp<ViewStyle>;
};
const ScreenContainer = ({
  children,
  style,
  scrollable,
  contentContainerStyle,
  ...props
}: ScreenContainerProps) => {
  const insets = useSafeAreaInsets();
  const {palette} = useTheme();

  const insetsStyles = useMemo(() => {
    const flatStyle = style ? StyleSheet.flatten(style) : {};
    const currentPaddingTop = (flatStyle.paddingTop ??
      flatStyle.paddingVertical ??
      flatStyle.padding ??
      sizes[16]) as number;
    const currentPaddingBottom = (flatStyle.paddingBottom ??
      flatStyle.paddingVertical ??
      flatStyle.padding ??
      sizes[30]) as number;
    const currentPaddingLeft = (flatStyle.paddingLeft ??
      flatStyle.paddingHorizontal ??
      flatStyle.padding ??
      0) as number;
    const currentPaddingRight = (flatStyle.paddingRight ??
      flatStyle.paddingHorizontal ??
      flatStyle.padding ??
      0) as number;

    const insetsStyles: ViewStyle = {
      paddingTop: Math.max(insets.top, currentPaddingTop),
      paddingBottom: Math.max(insets.bottom, currentPaddingBottom),
      paddingLeft: Math.max(insets.left, currentPaddingLeft),
      paddingRight: Math.max(insets.right, currentPaddingRight),
      backgroundColor: palette.background,
    };

    return [styles.con, insetsStyles, style];
  }, [style, insets]);

  const Component = scrollable ? ScrollView : View;

  return (
    <Component
      bounces={false}
      keyboardShouldPersistTaps="handled"
      contentContainerStyle={[styles.con, contentContainerStyle]}
      style={insetsStyles}
      {...props}>
      {children}
    </Component>
  );
};

const styles = StyleSheet.create({
  con: {flexGrow: 1},
});

export default ScreenContainer;
