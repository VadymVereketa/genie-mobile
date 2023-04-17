/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import {NavigationContainer} from '@react-navigation/native';
import React, {useEffect} from 'react';

import useTheme from './src/Context/ThemeContext';
import RootNavigator from './src/navigators/Root.navigator';
import {useAppDispatch} from './src/redux/hooks';
import {fetchUser} from './src/redux/slices/userSlice';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const {navigation} = useTheme();

  useEffect(() => {
    console.log('App.tsx');

    dispatch(fetchUser());
  }, []);

  return (
    <NavigationContainer theme={navigation}>
      <RootNavigator />
    </NavigationContainer>
  );
}

export default App;
