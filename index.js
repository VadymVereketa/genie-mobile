/**
 * @format
 */
import 'react-native-gesture-handler';

import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {AppRegistry, StatusBar} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';

import App from './App';
import {name as appName} from './app.json';
import configGoogleAuth from './src/config/configGoogleAuth';
import {AxiosProvider} from './src/Context/AxiosContext';
import {ThemeProvider} from './src/Context/ThemeContext';
import {persistor, store} from './src/redux/store';

configGoogleAuth();

const Main = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AxiosProvider>
          <GestureHandlerRootView
            style={{
              flexGrow: 1,
            }}>
            <SafeAreaProvider>
              <ThemeProvider>
                <StatusBar translucent={true} hidden />
                <App />
              </ThemeProvider>
            </SafeAreaProvider>
          </GestureHandlerRootView>
        </AxiosProvider>
      </PersistGate>
    </Provider>
  );
};

AppRegistry.registerComponent(appName, () => Main);
