import React from 'react';

import ScreenContainer from '../../components/ScreenContainer';
import {AuthScreenProps} from '../../navigators/types';
import useTheme from '../../Context/ThemeContext';
import sizes from '../../utils/sizes';
import {StyleSheet, View} from 'react-native';
import {Font14} from '../../uikit/Typography/Font14';
import Button from '../../uikit/Button';
import {ControllerTextInput} from '../../uikit/TextInput';
import {useForm} from 'react-hook-form';
import Line from './components/Line';
import SocialButton from './components/SocialButton';
import Social from '../../typings/Social';
import HeaderAuth from './components/HeaderAuth';

const ResetPasswordScreen = ({
  navigation,
}: AuthScreenProps<'ResetPasswordScreen'>) => {
  const {palette} = useTheme();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
    },
  });

  const onSubmit = data => console.log(data);

  return (
    <ScreenContainer scrollable style={styles.con}>
      <HeaderAuth screen="reset" isBack />
      <ControllerTextInput
        control={control}
        name="email"
        placeholder="Email"
        errors={errors}
        outerStyle={{
          marginBottom: sizes[16],
        }}
        rules={{
          required: 'Email is required',
          pattern: {
            value: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            message: 'Invalid email',
          },
        }}
      />
      <Button
        onPress={handleSubmit(onSubmit)}
        style={{
          marginBottom: sizes[16],
        }}>
        Continue
      </Button>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
});
export default ResetPasswordScreen;
