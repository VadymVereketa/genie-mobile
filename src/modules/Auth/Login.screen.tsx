import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';

import HeaderAuth from './components/HeaderAuth';
import Line from './components/Line';
import SocialButton from './components/SocialButton';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import {useRules} from '../../hooks/useRules';
import type {AuthScreenProps} from '../../navigators/types';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {
  fetchLoginUser,
  UserActions,
  UserSelector,
} from '../../redux/slices/userSlice';
import type {LoginUser} from '../../typings/CreateUser';
import Social from '../../typings/Social';
import Button from '../../uikit/Button';
import {ControllerTextInput} from '../../uikit/TextInput';
import {Font14} from '../../uikit/Typography/Font14';
import sizes from '../../utils/sizes';

const LoginScreen = ({navigation}: AuthScreenProps<'LoginScreen'>) => {
  const {palette} = useTheme();
  const rules = useRules();
  const dispatch = useAppDispatch();
  const error = useAppSelector(UserSelector.getLoginError);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: 'vereketa@gmail.com',
      password: '123456',
    },
  });

  const onSubmit = (data: LoginUser) => {
    dispatch(fetchLoginUser(data));
  };

  const navigateToSignUp = () => {
    navigation.navigate('SignUpScreen');
  };

  const navigateToForgotPassword = () => {
    navigation.navigate('ResetPasswordScreen');
  };

  return (
    <ScreenContainer scrollable style={styles.con}>
      <HeaderAuth screen="login" />
      <ControllerTextInput
        control={control}
        name="email"
        placeholder="Email"
        keyboardType="email-address"
        errors={errors}
        outerStyle={{
          marginBottom: sizes[16],
        }}
        rules={rules.email}
      />
      <ControllerTextInput
        control={control}
        name="password"
        placeholder="Password"
        secureTextEntry
        errors={errors}
        outerStyle={{
          marginBottom: sizes[16],
        }}
        rules={rules.password}
      />
      <Button
        onPress={handleSubmit(onSubmit)}
        style={{
          marginBottom: sizes[16],
        }}>
        Log in
      </Button>
      {!!error && (
        <Font14.W400
          style={{
            marginTop: -sizes[12],
          }}
          color="error">
          {error}
        </Font14.W400>
      )}
      <Font14.W400 onPress={navigateToForgotPassword}>
        Forgot password?
      </Font14.W400>
      <Line />
      <SocialButton social={Social.Google} />
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'flex-end',
        }}>
        <Font14.W400 textAlign="center">
          Don’t have an account?{' '}
          <Font14.W600 onPress={navigateToSignUp}> Sign up</Font14.W600>
        </Font14.W400>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
});
export default LoginScreen;
