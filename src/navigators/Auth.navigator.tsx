import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import WelcomeScreen from '../modules/Auth/Welcome.screen';
import LoginScreen from '../modules/Auth/Login.screen';
import SignUpScreen from '../modules/Auth/Signup.screen';
import ResetPasswordScreen from '../modules/Auth/ResetPassword.screen';
import RecoveryPasswordScreen from '../modules/Auth/RecoveryPassword.screen';

export type AuthNavigatorParamList = {
  WelcomeScreen: undefined;
  LoginScreen: undefined;
  SignUpScreen: undefined;
  ResetPasswordScreen: undefined;
  RecoveryPasswordScreen: undefined;
};

const Stack = createNativeStackNavigator<AuthNavigatorParamList>();

const AuthNavigator = React.memo(() => {
  return (
    <Stack.Navigator
      initialRouteName={'WelcomeScreen'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
      <Stack.Screen
        name="ResetPasswordScreen"
        component={ResetPasswordScreen}
      />
      <Stack.Screen
        name="RecoveryPasswordScreen"
        component={RecoveryPasswordScreen}
      />
    </Stack.Navigator>
  );
});

AuthNavigator.displayName = 'StartNavigator';

export default AuthNavigator;
