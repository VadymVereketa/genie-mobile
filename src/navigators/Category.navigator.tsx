import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import SelectCategoryScreen from '../modules/Category/SelectCategory.screen';
import MakeUpScreen from '../modules/Category/MakeUp.screen';
import BrowsScreen from '../modules/Category/Brows.screen';
import QuestionsEyesScreen from '../modules/Category/QuestionsEyes.screen';
import {ItemCategory, QuestionType, SubCategory} from '../typings/Category';

export type CategoryNavigatorParamList = {
  SelectCategoryScreen: undefined;
  MakeUpScreen: {
    subCategories: SubCategory[];
    headerTitle: string;
  };
  BrowsScreen: {
    itemCategories: ItemCategory[];
    headerTitle: string;
  };
  QuestionsEyesScreen: {
    items: QuestionType[];
  };
};

const Stack = createNativeStackNavigator<CategoryNavigatorParamList>();

const CategoryNavigator = React.memo(() => {
  return (
    <Stack.Navigator
      initialRouteName={'SelectCategoryScreen'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="SelectCategoryScreen"
        component={SelectCategoryScreen}
      />
      <Stack.Screen name="MakeUpScreen" component={MakeUpScreen} />
      <Stack.Screen name="BrowsScreen" component={BrowsScreen} />
      <Stack.Screen
        name="QuestionsEyesScreen"
        component={QuestionsEyesScreen}
      />
    </Stack.Navigator>
  );
});

CategoryNavigator.displayName = 'CategoryNavigator';

export default CategoryNavigator;
