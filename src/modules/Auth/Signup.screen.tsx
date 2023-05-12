import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';

import HeaderAuth from './components/HeaderAuth';
import Line from './components/Line';
import SocialButton from './components/SocialButton';
import FigmaIcon from '../../components/FigmaIcon/FigmaIcon';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import {useRules} from '../../hooks/useRules';
import {localize} from '../../localization/utils';
import type {AuthScreenProps} from '../../navigators/types';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {fetchCreateUser, UserSelector} from '../../redux/slices/userSlice';
import type {CreateUser} from '../../typings/CreateUser';
import Social from '../../typings/Social';
import Button from '../../uikit/Button';
import CheckBox from '../../uikit/CheckBox';
import {ControllerTextInput} from '../../uikit/TextInput';
import {Font14} from '../../uikit/Typography/Font14';
import {normalizeData} from '../../utils/normalizeData';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utils/responsive-dimensions';
import sizes from '../../utils/sizes';

const SignUpScreen = ({navigation}: AuthScreenProps<'SignUpScreen'>) => {
  const {palette} = useTheme();
  const rules = useRules();
  const dispatch = useAppDispatch();
  const error = useAppSelector(UserSelector.getError);
  const [isTermsChecked, setIsTermsChecked] = React.useState(false);
  const [isNewsChecked, setIsNewsChecked] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      fullname: __DEV__ ? 'Vadym Vereketa' : '',
      email: __DEV__ ? 'vereketa@gmail.com' : '',
      password: __DEV__ ? '123456' : '',
    },
  });

  const onSubmit = (data: CreateUser) => {
    dispatch(
      fetchCreateUser({
        ...data,
        email: normalizeData.email(data.email),
      }),
    );
    console.log('data', data);
  };

  const navigateToLogin = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <ScreenContainer scrollable style={styles.con}>
      <HeaderAuth screen="signup" />
      <ControllerTextInput
        control={control}
        name="fullname"
        placeholder="Full name"
        errors={errors}
        outerStyle={{
          marginBottom: sizes[16],
        }}
        rules={rules.fullName}
      />
      <ControllerTextInput
        control={control}
        name="email"
        placeholder="Email"
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
      <View
        style={{
          flexDirection: 'row',
          marginBottom: sizes[16],
        }}>
        <CheckBox
          style={{
            marginRight: sizes[8],
          }}
          checked={isTermsChecked}
          onChange={setIsTermsChecked}
        />
        <Font14.W400
          style={{
            flex: 1,
          }}>
          {localize('sign-up-screen.terms.text1')}
          <Font14.W400 color="primary" textDecorationLine="underline">
            {localize('sign-up-screen.terms.text2')}
          </Font14.W400>
          {localize('sign-up-screen.terms.text3')}
          <Font14.W400 color="primary" textDecorationLine="underline">
            {localize('sign-up-screen.terms.text4')}
          </Font14.W400>
        </Font14.W400>
      </View>
      <View
        style={{
          flexDirection: 'row',
          marginBottom: sizes[16],
        }}>
        <CheckBox
          style={{
            marginRight: sizes[8],
          }}
          checked={isNewsChecked}
          onChange={setIsNewsChecked}
        />
        <Font14.W400>{localize('sign-up-screen.want-receive')}</Font14.W400>
      </View>
      <Button disabled={!isTermsChecked} onPress={handleSubmit(onSubmit)}>
        {localize('sign-up-screen.sign-up')}
      </Button>
      {!!error && <Font14.W400 color="error">{error}</Font14.W400>}
      <Line />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <SocialButton
          containerStyle={{
            width: '48%',
          }}
          social={Social.Google}
        />
        <SocialButton
          containerStyle={{
            width: '48%',
          }}
          social={Social.Apple}
        />
      </View>
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'flex-end',
        }}>
        <Font14.W400 textAlign="center">
          {localize('sign-up-screen.already-have-account')}{' '}
          <Font14.W600 onPress={navigateToLogin}>
            {' '}
            {localize('welcome-screen.login')}
          </Font14.W600>
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
export default SignUpScreen;
