import type {NavigatorScreenParams} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import type {AuthNavigatorParamList} from './Auth.navigator';
import AuthNavigator from './Auth.navigator';
import type {ProfileSettingsNavigatorParamList} from './ProfileSettings.navigator';
import ProfileSettingsNavigator from './ProfileSettings.navigator';
import type {SelfieNavigatorParamList} from './Selfie.navigator';
import SelfieNavigator from './Selfie.navigator';
import TabNavigator from './Tab.navigator';
import type {TabNavigatorParamList} from './Tab.navigator';
import {useAppSelector} from '../redux/hooks';
import {ProfileSettingsSelector} from '../redux/slices/profileSettings';
import {QuestionsSelector} from '../redux/slices/questionsSlice';
import {UserSelector} from '../redux/slices/userSlice';

export type RootNavigatorParamList = {
  AuthNavigator: NavigatorScreenParams<AuthNavigatorParamList>;
  ProfileSettingsNavigator: NavigatorScreenParams<ProfileSettingsNavigatorParamList>;
  ProfileSettingsNavigator2: NavigatorScreenParams<ProfileSettingsNavigatorParamList>;
  TabNavigator: NavigatorScreenParams<TabNavigatorParamList>;
  SelfieNavigator: NavigatorScreenParams<SelfieNavigatorParamList>;
};

const Stack = createNativeStackNavigator<RootNavigatorParamList>();

const RootNavigator = React.memo(() => {
  const isAuth = useAppSelector(UserSelector.isAuth);
  const isFinished = useAppSelector(UserSelector.getCompleteOnboarding);

  return (
    <Stack.Navigator
      initialRouteName={'AuthNavigator'}
      screenOptions={{
        headerShown: false,
      }}>
      {!isAuth && (
        <Stack.Screen name="AuthNavigator" component={AuthNavigator} />
      )}

      {!isFinished && (
        <Stack.Screen
          name="ProfileSettingsNavigator"
          component={ProfileSettingsNavigator}
        />
      )}
      {isAuth && (
        <Stack.Group>
          <Stack.Screen name="TabNavigator" component={TabNavigator} />
          <Stack.Screen name="SelfieNavigator" component={SelfieNavigator} />
          <Stack.Screen
            name="ProfileSettingsNavigator2"
            component={ProfileSettingsNavigator}
          />
        </Stack.Group>
      )}
    </Stack.Navigator>
  );
});

RootNavigator.displayName = 'StartNavigator';

export default RootNavigator;
