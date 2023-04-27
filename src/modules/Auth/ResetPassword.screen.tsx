import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';

import HeaderAuth from './components/HeaderAuth';
import Line from './components/Line';
import SocialButton from './components/SocialButton';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import {localize} from '../../localization/utils';
import type {AuthScreenProps} from '../../navigators/types';
import Social from '../../typings/Social';
import Button from '../../uikit/Button';
import {ControllerTextInput} from '../../uikit/TextInput';
import {Font14} from '../../uikit/Typography/Font14';
import sizes from '../../utils/sizes';

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
        placeholder={localize('input.email.placeholder')}
        errors={errors}
        outerStyle={{
          marginBottom: sizes[16],
        }}
        rules={{
          required: localize('input.email.required'),
          pattern: {
            value: /^[\w.%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/,
            message: localize('input.email.invalid'),
          },
        }}
      />
      <Button
        onPress={handleSubmit(onSubmit)}
        style={{
          marginBottom: sizes[16],
        }}>
        {localize('button.continue')}
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
