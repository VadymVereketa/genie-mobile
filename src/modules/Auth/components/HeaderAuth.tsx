import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import useTheme from '../../../Context/ThemeContext';
import {localize} from '../../../localization/utils';
import {useAppNavigation} from '../../../navigators/hooks';
import IconButton from '../../../uikit/IconButton';
import {Font14} from '../../../uikit/Typography/Font14';
import {Font28} from '../../../uikit/Typography/Font28';
import sizes from '../../../utils/sizes';
import LoginGenie from '../assets/login-genie.png';
import ResetGenie from '../assets/reset-genie.png';
import SignUpGenie from '../assets/signup-genie.png';
import Smile from '../assets/smile.png';

type Props = {
  screen: 'login' | 'signup' | 'reset' | 'email' | 'new-password';
  isBack?: boolean;
  email?: string;
};

const HeaderAuth = ({screen, isBack = false, email = ''}: Props) => {
  const {palette} = useTheme();
  const navigation = useAppNavigation();

  let img = LoginGenie;
  let title = 'Welcome back!';
  let text: string;

  switch (screen) {
    case 'login':
      img = LoginGenie;
      title = localize('login-screen.title');
      break;
    case 'signup':
      img = SignUpGenie;
      title = localize('sign-up-screen.title');
      break;
    case 'reset':
      img = ResetGenie;
      title = localize('forgot-password-screen.title');
      text = localize('forgot-password-screen.desc');
      break;
    case 'email':
      img = Smile;
      title = 'Check your email';
      text = `We sent a link to reset your password at ${email}`;
      break;
    case 'new-password':
      img = ResetGenie;
      title = 'Enter new password';
      text = 'Please create a new password';
      break;
  }
  return (
    <View style={styles.con}>
      {isBack ? (
        <View
          style={[
            styles.viewBack,
            {
              borderBottomColor: palette.line,
            },
          ]}>
          <IconButton
            onPress={() => navigation.goBack()}
            iconName="ArrowBack"
            size={sizes[16]}
            fill={palette.text}
          />
        </View>
      ) : null}

      <Image style={styles.image} source={img} />
      <Font28.W600>{title}</Font28.W600>
      {text && (
        <Font14.W400 textAlign="center" color="textLight">
          {text}
        </Font14.W400>
      )}
    </View>
  );
};

export default HeaderAuth;

const styles = StyleSheet.create({
  con: {
    alignItems: 'center',
    marginBottom: sizes[32],
    marginTop: sizes[12],
  },
  viewBack: {
    borderBottomWidth: 1,
    width: '100%',
    paddingBottom: sizes[12],
  },
  image: {
    marginTop: sizes[12],
    marginBottom: sizes[24],
  },
});
