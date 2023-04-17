import React from 'react';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import useTheme from '../Context/ThemeContext';
import {TouchableOpacity} from 'react-native-gesture-handler';
import FigmaIcon from '../components/FigmaIcon/FigmaIcon';
import sizes from '../utils/sizes';
import {Font14} from './Typography/Font14';

type Props = {
  checked: boolean;
  onChange?: (value: boolean) => void;
  style?: StyleProp<ViewStyle>;
  containerStyle?: StyleProp<ViewStyle>;
  disabled?: boolean;
  title?: string;
};
const RadioButton = ({
  checked,
  onChange,
  containerStyle,
  style,
  disabled,
  title,
}: Props) => {
  const {palette} = useTheme();

  return (
    <TouchableOpacity
      disabled={disabled}
      onPress={() => onChange?.(!checked)}
      style={[
        {
          flexDirection: 'row',
          alignItems: 'center',
        },
        style,
      ]}
      containerStyle={containerStyle}>
      <View
        style={[
          styles.con,
          {
            borderColor: palette.border,
          },
        ]}>
        {checked ? (
          <View
            style={{
              backgroundColor: palette.primary,
              flexGrow: 1,
              height: '100%',
              width: '100%',
              borderRadius: sizes[10],
            }}
          />
        ) : null}
      </View>
      {title ? (
        <Font14.W400
          style={{
            marginLeft: sizes[8],
          }}>
          {title}
        </Font14.W400>
      ) : null}
    </TouchableOpacity>
  );
};

export default RadioButton;

const styles = StyleSheet.create({
  con: {
    borderWidth: 1,
    borderRadius: sizes[10],
    width: sizes[20],
    height: sizes[20],
    justifyContent: 'center',
    alignItems: 'center',
    padding: sizes[4],
  },
});
