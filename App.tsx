/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type {FirebaseAuthTypes} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import type {FirebaseDynamicLinksTypes} from '@react-native-firebase/dynamic-links';
import dynamicLinks from '@react-native-firebase/dynamic-links';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';
import SplashScreen from 'react-native-splash-screen';

import useTheme from './src/Context/ThemeContext';
import {useAppNavigation} from './src/navigators/hooks';
import RootNavigator from './src/navigators/Root.navigator';
import {useAppDispatch, useAppSelector} from './src/redux/hooks';
import {fetchUser, UserSelector} from './src/redux/slices/userSlice';
import {navigationRef} from './src/utils/ref';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const {navigation: theme} = useTheme();

  useEffect(() => {
    dispatch(fetchUser());
    SplashScreen.hide();
  }, []);

  const onAuthStateChanged = async (user: FirebaseAuthTypes.User | null) => {
    console.dir('onAuthStateChanged', user);
  };

  const handleDynamicLink = (
    link: FirebaseDynamicLinksTypes.DynamicLink | null,
  ) => {
    console.log(link);
    if (!link) {
      return;
    }
    if (link.url.startsWith('https://mobilegenie.page.link/newpassword/')) {
      navigationRef.navigate('AuthNavigator', {
        screen: 'RecoveryPasswordScreen',
        params: {
          token: link.url.replace(
            'https://mobilegenie.page.link/newpassword/',
            '',
          ),
        },
      });
    }
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    const unsubscribe = dynamicLinks().onLink(handleDynamicLink);

    dynamicLinks().getInitialLink().then(handleDynamicLink);

    const handle = async () => {
      try {
        const res = await dynamicLinks().buildShortLink({
          domainUriPrefix: 'https://mobilegenie.page.link',
          link: 'https://mobilegenie.page.link/newpassword/$2a$10$9p617Ouss6shoAsGGrMMnuAjI.dGxlpshVgy7aBY5KXbJ%2F9XMNWTm', // add the token to the end
          android: {
            packageName: 'com.mobile.genie',
          },
          ios: {
            bundleId: 'com.mobile.genie',
          },
        });
        console.log('res', res);
      } catch (e) {
        console.log(e);
      }
    };
    handle();
    return () => {
      subscriber();
      unsubscribe();
    };
  }, []);

  return (
    <NavigationContainer ref={navigationRef} theme={theme}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
