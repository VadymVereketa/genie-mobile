import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import MoreQuestionsScreen from '../modules/ProfileSettings/MoreQuestions.screen';
import OnBoardingScreen from '../modules/ProfileSettings/OnBoarding.screen';
import ProfileSettingScreen from '../modules/ProfileSettings/ProfileSetting.screen';
import ProfileSettingMoreQuestionsScreen from '../modules/ProfileSettings/ProfileSettingMoreQuestions.screen';
import SaveProfileSetting from '../modules/ProfileSettings/SaveProfileSetting.screen';
import SelectBrandsScreen from '../modules/ProfileSettings/SelectBrands.screen';
import SelectDateOfBirthScreen from '../modules/ProfileSettings/SelectDateOfBirth.screen';
import UndertoneTypeScreen from '../modules/ProfileSettings/UndertoneType.screen';
import type {QuestionType} from '../typings/Category';

export type ProfileSettingsNavigatorParamList = {
  OnBoardingScreen: undefined;
  ProfileSettingScreen: undefined;
  ProfileSettingMoreQuestionsScreen: undefined;
  MoreQuestionsScreen: undefined;
  UndertoneTypeScreen: undefined;
  SelectBrandsScreen: undefined;
  SelectDateOfBirthScreen: {
    withoutTextInput?: boolean;
  };
  SaveProfileSetting: {
    items: QuestionType[];
    ids: number[];
  };
};

const Stack = createNativeStackNavigator<ProfileSettingsNavigatorParamList>();

const ProfileSettingsNavigator = React.memo(() => {
  return (
    <Stack.Navigator
      initialRouteName={'OnBoardingScreen'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnBoardingScreen" component={OnBoardingScreen} />
      <Stack.Screen
        name="SelectDateOfBirthScreen"
        component={SelectDateOfBirthScreen}
      />
      <Stack.Screen
        name="ProfileSettingScreen"
        component={ProfileSettingScreen}
      />
      <Stack.Screen
        name="MoreQuestionsScreen"
        component={MoreQuestionsScreen}
      />
      <Stack.Screen
        name="UndertoneTypeScreen"
        component={UndertoneTypeScreen}
      />
      <Stack.Screen name="SelectBrandsScreen" component={SelectBrandsScreen} />
      <Stack.Screen name="SaveProfileSetting" component={SaveProfileSetting} />
      <Stack.Screen
        name="ProfileSettingMoreQuestionsScreen"
        component={ProfileSettingMoreQuestionsScreen}
      />
    </Stack.Navigator>
  );
});

ProfileSettingsNavigator.displayName = 'ProfileSettingsNavigator';

export default ProfileSettingsNavigator;
