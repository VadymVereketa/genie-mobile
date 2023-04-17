import React from 'react';
import {StyleSheet, View} from 'react-native';

import FigmaIcon from '../../components/FigmaIcon/FigmaIcon';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import type {AuthScreenProps} from '../../navigators/types';
import Button from '../../uikit/Button';
import {Font14} from '../../uikit/Typography/Font14';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utils/responsive-dimensions';
import sizes from '../../utils/sizes';

const WelcomeScreen = ({navigation}: AuthScreenProps<'WelcomeScreen'>) => {
  const {palette} = useTheme();

  const navigateToLogin = () => {
    navigation.replace('LoginScreen');
  };

  const navigateToSignUp = () => {
    navigation.replace('SignUpScreen');
  };
  return (
    <ScreenContainer
      style={[
        {
          backgroundColor: palette.secondary,
        },
        styles.con,
      ]}>
      <FigmaIcon
        name="Logo"
        width={sizes[140]}
        height={sizes[40]}
        fill={'transparent'}
        style={styles.logo}
      />
      <FigmaIcon
        name="Genie"
        width={responsiveWidth(90)}
        height={responsiveHeight(46)}
        fill={'transparent'}
      />
      <View style={styles.bottomView}>
        <Font14.W400 style={styles.text} color="primary">
          Take a selfie & get custom cosmetics Recommendations powered by AI
        </Font14.W400>
        <Button
          onPress={navigateToLogin}
          containerStyle={{
            marginBottom: sizes[24],
          }}>
          Log in
        </Button>
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
    alignItems: 'center',
    paddingHorizontal: sizes[16],
  },
  logo: {
    marginVertical: sizes[40],
  },
  bottomView: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  text: {
    textAlign: 'center',
    marginVertical: sizes[24],
  },
});
export default WelcomeScreen;
