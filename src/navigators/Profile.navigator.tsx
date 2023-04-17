import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import MyDetailProfileScreen from '../modules/Community/MyDetailProfile.screen';
import ProfileScreen from '../modules/Profile/Profile.screen';
import ProfileEditingScreen from '../modules/Profile/ProfileEditing.screen';
import SupportScreen from '../modules/Profile/Support.screen';
import SaveProfileSetting from '../modules/ProfileSettings/SaveProfileSetting.screen';

export type ProfileNavigatorParamList = {
  ProfileScreen: undefined;
  ProfileEditingScreen: undefined;
  SupportScreen: undefined;
  MyDetailProfileScreen: undefined;
};

const Stack = createNativeStackNavigator<ProfileNavigatorParamList>();

const ProfileNavigator = React.memo(() => {
  return (
    <Stack.Navigator
      initialRouteName={'ProfileScreen'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen
        name="ProfileEditingScreen"
        component={ProfileEditingScreen}
      />
      <Stack.Screen name="SupportScreen" component={SupportScreen} />
      <Stack.Screen
        name="MyDetailProfileScreen"
        component={MyDetailProfileScreen}
      />
    </Stack.Navigator>
  );
});

ProfileNavigator.displayName = 'ProfileNavigator';

export default ProfileNavigator;
