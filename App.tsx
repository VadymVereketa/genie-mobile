/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import type {FirebaseAuthTypes} from '@react-native-firebase/auth';
import auth from '@react-native-firebase/auth';
import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';

import useTheme from './src/Context/ThemeContext';
import RootNavigator from './src/navigators/Root.navigator';
import {useAppDispatch, useAppSelector} from './src/redux/hooks';
import {fetchUser, UserSelector} from './src/redux/slices/userSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const {navigation} = useTheme();

  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const onAuthStateChanged = async (user: FirebaseAuthTypes.User | null) => {
    console.dir('onAuthStateChanged', user);
  };

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return () => {
      subscriber();
    };
  }, []);

  return (
    <NavigationContainer theme={navigation}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
