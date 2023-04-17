import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import DetailProductResultScreen from '../modules/Selfie/DetailProductResult.screen';
import OnboardingSelfie from '../modules/Selfie/OnboardingSelfie.screen';
import ProductResultScreen from '../modules/Selfie/ProductResult.screen';

export type SelfieNavigatorParamList = {
  OnboardingSelfie: undefined;
  ProductResultScreen: undefined;
  DetailProductResultScreen: undefined;
  CameraScreen: undefined;
};

const Stack = createNativeStackNavigator<SelfieNavigatorParamList>();

const SelfieNavigator = React.memo(() => {
  return (
    <Stack.Navigator
      initialRouteName={'ProductResultScreen'}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="OnboardingSelfie" component={OnboardingSelfie} />
      {/* <Stack.Screen name="CameraScreen" component={CameraScreen} /> */}
      <Stack.Screen
        name="DetailProductResultScreen"
        component={DetailProductResultScreen}
      />
      <Stack.Screen
        name="ProductResultScreen"
        component={ProductResultScreen}
      />
    </Stack.Navigator>
  );
});

SelfieNavigator.displayName = 'SelfieNavigator';

export default SelfieNavigator;
