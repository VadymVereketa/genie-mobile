import React from 'react';
import {useForm} from 'react-hook-form';
import {Alert, StyleSheet} from 'react-native';

import HeaderAuth from './components/HeaderAuth';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import {useRules} from '../../hooks/useRules';
import {useAppNavigation} from '../../navigators/hooks';
import type {AuthScreenProps} from '../../navigators/types';
import Service from '../../services/service/service';
import Button from '../../uikit/Button';
import {ControllerTextInput} from '../../uikit/TextInput';
import sizes from '../../utils/sizes';

const RecoveryPasswordScreen = ({
  navigation,
  route,
}: AuthScreenProps<'RecoveryPasswordScreen'>) => {
  const {palette} = useTheme();
  const {token} = route.params;
  const rules = useRules();

  const {
    control,
    handleSubmit,
    formState: {errors},
    setError,
    getValues,
  } = useForm({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    mode: 'onChange',
  });

  const onSubmit = async (data: {
    password: string;
    confirmPassword: string;
  }) => {
    try {
      await Service.resetpassword({
        ...data,
        token,
      });
      Alert.alert('Password changed successfully');
      navigation.navigate('AuthNavigator', {
        screen: 'LoginScreen',
      });
    } catch (e) {
      setError('confirmPassword', {
        message: e.message,
      });
    }
  };

  return (
    <ScreenContainer scrollable style={styles.con}>
      <HeaderAuth screen="new-password" isBack />
      <ControllerTextInput
        control={control}
        name="password"
        placeholder="Passwword"
        errors={errors}
        secureTextEntry
        outerStyle={{
          marginBottom: sizes[16],
        }}
        rules={rules.password}
      />
      <ControllerTextInput
        control={control}
        name="confirmPassword"
        placeholder="Confirm password"
        errors={errors}
        secureTextEntry
        outerStyle={{
          marginBottom: sizes[16],
        }}
        rules={{
          validate: rules.confirmPassword(getValues('password')),
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
export default RecoveryPasswordScreen;
