import React, {useImperativeHandle} from 'react';
import type {
  FieldError,
  FieldErrors,
  FieldErrorsImpl,
  FieldValues,
  Merge,
  UseControllerProps,
} from 'react-hook-form';
import {Controller} from 'react-hook-form';
import type {StyleProp, TextInputProps, ViewStyle} from 'react-native';
import {StyleSheet, View} from 'react-native';
import type {NativeViewGestureHandlerProps} from 'react-native-gesture-handler';
import {
  TextInput as RNTextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import IconButton from './IconButton';
import {Font12} from './Typography/Font12';
import type {IFigmaIcon} from '../components/FigmaIcon/FigmaIcon';
import useTheme from '../Context/ThemeContext';
import sizes from '../utils/sizes';

type Props = TextInputProps &
  NativeViewGestureHandlerProps & {
    outerStyle?: StyleProp<ViewStyle>;
    error?: FieldError | Merge<FieldError, FieldErrorsImpl<any>>;
    iconRight?: IFigmaIcon;
    label?: string;
    onPress?: () => void;
    onPressIconRight?: () => void;
    isBorder?: boolean;
  };

export interface TextInputInterface {
  focus: () => void;
}

const TextInput = React.forwardRef(
  (
    {
      outerStyle,
      secureTextEntry,
      error,
      onFocus,
      onBlur,
      style,
      iconRight,
      label,
      enabled = true,
      onPress,
      isBorder = true,
      onPressIconRight,
      ...props
    }: Props,
    ref: React.ForwardedRef<TextInputInterface>,
  ) => {
    const {palette} = useTheme();
    const [isShowPassword, setIsShowPassword] = React.useState(false);
    const [isFocused, setIsFocused] = React.useState(false);
    const innerRef = React.useRef(null);

    useImperativeHandle(
      ref,
      () => ({
        focus: () => {
          innerRef.current.focus();
        },
      }),
      [],
    );

    return (
      <View style={outerStyle}>
        {label ? (
          <Font12.W400
            style={{
              marginBottom: sizes[8],
            }}
            color="textLight">
            {label}
          </Font12.W400>
        ) : null}
        <View
          style={[
            styles.view,
            {
              borderColor: isFocused ? palette.primary : palette.border,
              borderWidth: isBorder ? 1 : 0,
            },
          ]}>
          <RNTextInput
            style={[
              styles.textInput,
              {
                color: palette.text,
              },
              style,
            ]}
            ref={innerRef}
            {...props}
            onBlur={e => {
              setIsFocused(false);
              onBlur && onBlur(e);
            }}
            onFocus={e => {
              setIsFocused(true);
              onFocus && onFocus(e);
            }}
            secureTextEntry={isShowPassword ? false : secureTextEntry}
            placeholderTextColor={palette.placeholder}
          />
          {secureTextEntry || iconRight ? (
            <IconButton
              onPress={() => {
                if (iconRight) {
                  onPressIconRight && onPressIconRight();
                } else {
                  setIsShowPassword(!isShowPassword);
                }
              }}
              iconName={
                iconRight ? iconRight : isShowPassword ? 'Eye' : 'EyeClose'
              }
              fill={palette.border}
              size={sizes[16]}
              style={{
                marginRight: sizes[12],
              }}
            />
          ) : null}
          {enabled ? null : (
            <TouchableOpacity
              onPress={onPress}
              containerStyle={{
                ...StyleSheet.absoluteFillObject,
                zIndex: 1000,
              }}
              style={{
                flexGrow: 1,
              }}
            />
          )}
        </View>
        {error ? (
          <Font12.W400 style={styles.error} color="error">
            {error.message}
          </Font12.W400>
        ) : null}
      </View>
    );
  },
);

TextInput.displayName = 'TextInput';

type ControllerTextInputProps = Props &
  Omit<UseControllerProps, 'control'> & {
    errors?: FieldErrors<FieldValues>;
    control: any;
  };

const ControllerTextInput = ({
  control,
  name,
  rules,
  errors,
  onBlur,
  onFocus,
  ...props
}: ControllerTextInputProps) => {
  return (
    <Controller
      control={control}
      rules={rules}
      render={({field: {onChange, onBlur: onblur, value}}) => (
        <TextInput
          {...props}
          error={errors ? errors[name] : undefined}
          onBlur={e => {
            onblur(e);
            onBlur && onBlur(e);
          }}
          onFocus={onFocus}
          onChangeText={onChange}
          value={value}
        />
      )}
      name={name}
    />
  );
};

export {ControllerTextInput};
export default TextInput;

const styles = StyleSheet.create({
  view: {
    borderWidth: 1,
    borderRadius: sizes[8],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textInput: {
    flex: 1,
    flexGrow: 1,
    marginRight: sizes[8],
    padding: sizes[12],
    marginBottom: -1,
  },
  error: {
    marginLeft: sizes[8],
    marginTop: sizes[4],
    marginBottom: -sizes[4],
  },
});
