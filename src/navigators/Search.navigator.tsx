import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import ProductCommunityScreen from '../modules/Community/ProductCommunity.screen';
import DetailProductScreen from '../modules/Search/DetailProduct.screen';
import ResultScreen from '../modules/Search/Result.screen';
import SearchScreen from '../modules/Search/Search.screen';
import OnboardingSelfie from '../modules/Selfie/OnboardingSelfie.screen';

export type SearchNavigatorParamList = {
  SearchScreen: undefined;
  ResultScreen: undefined;
  DetailProductScreen: undefined;
  ProductSearchScreen: undefined;
};

const Stack = createNativeStackNavigator<SearchNavigatorParamList>();

const SearchNavigator = React.memo(() => {
  return (
    <Stack.Navigator
      initialRouteName={'SearchScreen'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SearchScreen" component={SearchScreen} />
      <Stack.Screen
        name="DetailProductScreen"
        component={DetailProductScreen}
      />
      <Stack.Screen name="ResultScreen" component={ResultScreen} />
      <Stack.Screen
        name="ProductSearchScreen"
        component={ProductCommunityScreen}
      />
    </Stack.Navigator>
  );
});

SearchNavigator.displayName = 'SelfieNavigator';

export default SearchNavigator;
