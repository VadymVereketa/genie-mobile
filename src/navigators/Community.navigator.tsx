import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';

import AddGroupScreen from '../modules/Community/AddGroup.screen';
import AddPhotoScreen from '../modules/Community/AddPhoto.screen';
import AddPostScreen from '../modules/Community/AddPost.screen';
import AwardScreen from '../modules/Community/Award.screen';
import ChatScreen from '../modules/Community/Chat.screen';
import DetailProfileScreen from '../modules/Community/DetailProfile.screen';
import FilterScreen from '../modules/Community/Filter.screen';
import GalleryCommunityScreen from '../modules/Community/GalleryCommunity.screen';
import GroupScreen from '../modules/Community/Group.screen';
import GroupCommunityScreen from '../modules/Community/GroupCommunity.screen';
import HomeCommunityScreen from '../modules/Community/HomeCommunity.screen';
import JoinCommunityScreen from '../modules/Community/JoinCommunity.screen';
import MainCommunityScreen from '../modules/Community/MainCommunity.screen';
import MembersScreen from '../modules/Community/Members.screen';
import MessageScreen from '../modules/Community/Message.screen';
import MyDetailProfileScreen from '../modules/Community/MyDetailProfile.screen';
import NotificationsScreen from '../modules/Community/Notifications.screen';
import PostsScreen from '../modules/Community/Posts.screen';
import ProductCommunityScreen from '../modules/Community/ProductCommunity.screen';
import ProductPhotoScreen from '../modules/Community/ProductPhoto.screen';
import OnboardingSelfie from '../modules/Selfie/OnboardingSelfie.screen';
import type {AchievementItem} from '../typings/AchievementItem';

export type CommunityNavigatorParamList = {
  JoinCommunityScreen: undefined;
  MainCommunityScreen: undefined;
  HomeCommunityScreen: undefined;
  PostsScreen: undefined;
  AddPostScreen: undefined;
  GalleryCommunityScreen: undefined;
  FilterScreen: undefined;
  GroupCommunityScreen: undefined;
  GroupScreen: undefined;
  AddGroupScreen: undefined;
  MembersScreen: undefined;
  DetailProfileScreen: undefined;
  MyDetailProfileScreen: undefined;
  ChatScreen: undefined;
  NotificationsScreen: undefined;
  AddPhotoScreen: undefined;
  ProductCommunityScreen: undefined;
  MessageScreen: undefined;
  ProductPhotoScreen: undefined;
  AwardScreen: {
    award: AchievementItem;
  };
};

const Stack = createNativeStackNavigator<CommunityNavigatorParamList>();

const CommunityNavigator = React.memo(() => {
  return (
    <Stack.Navigator
      initialRouteName={'JoinCommunityScreen'}
      screenOptions={{
        headerShown: false,
        contentStyle: {
          backgroundColor: 'white',
        },
      }}>
      <Stack.Screen
        name="JoinCommunityScreen"
        component={JoinCommunityScreen}
      />
      <Stack.Screen
        name="MainCommunityScreen"
        component={MainCommunityScreen}
      />
      <Stack.Screen
        name="HomeCommunityScreen"
        component={HomeCommunityScreen}
      />
      <Stack.Screen name="PostsScreen" component={PostsScreen} />
      <Stack.Screen name="AddPostScreen" component={AddPostScreen} />
      <Stack.Screen name="MessageScreen" component={MessageScreen} />
      <Stack.Screen name="ChatScreen" component={ChatScreen} />
      <Stack.Screen
        name="FilterScreen"
        component={FilterScreen}
        options={{
          presentation: 'modal',
        }}
      />
      <Stack.Screen
        name="GalleryCommunityScreen"
        component={GalleryCommunityScreen}
      />
      <Stack.Screen
        name="GroupCommunityScreen"
        component={GroupCommunityScreen}
      />
      <Stack.Screen name="GroupScreen" component={GroupScreen} />
      <Stack.Screen
        name="ProductCommunityScreen"
        component={ProductCommunityScreen}
      />
      <Stack.Screen name="AddGroupScreen" component={AddGroupScreen} />
      <Stack.Screen name="MembersScreen" component={MembersScreen} />
      <Stack.Screen name="AwardScreen" component={AwardScreen} />
      <Stack.Screen name="AddPhotoScreen" component={AddPhotoScreen} />
      <Stack.Screen name="ProductPhotoScreen" component={ProductPhotoScreen} />
      <Stack.Screen
        name="NotificationsScreen"
        component={NotificationsScreen}
      />
      <Stack.Screen
        name="MyDetailProfileScreen"
        component={MyDetailProfileScreen}
      />
      <Stack.Screen
        name="DetailProfileScreen"
        component={DetailProfileScreen}
      />
    </Stack.Navigator>
  );
});

CommunityNavigator.displayName = 'CommunityNavigator';

export default CommunityNavigator;
