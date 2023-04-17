import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import MainQuestionsScreen from '../modules/Questions/MainQuestionsScreen.screen';
import MandateQuestionsScreen from '../modules/Questions/MandateQuestions';
import {QuestionType} from '../typings/Category';

export type QuestionsNavigatorParamList = {
  MainQuestionsScreen: undefined;
  MandateQuestionsScreen: {
    items: QuestionType[];
  };
};

const Stack = createNativeStackNavigator<QuestionsNavigatorParamList>();

const QuestionsNavigator = React.memo(() => {
  return (
    <Stack.Navigator
      initialRouteName={'MainQuestionsScreen'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="MainQuestionsScreen"
        component={MainQuestionsScreen}
      />
      <Stack.Screen
        name="MandateQuestionsScreen"
        component={MandateQuestionsScreen}
      />
    </Stack.Navigator>
  );
});

QuestionsNavigator.displayName = 'QuestionsNavigator';

export default QuestionsNavigator;
