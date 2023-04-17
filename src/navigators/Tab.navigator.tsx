import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React, {useMemo} from 'react';

import CategoryNavigator from './Category.navigator';
import CommunityNavigator from './Community.navigator';
import ProfileNavigator from './Profile.navigator';
import QuestionsNavigator from './Questions.navigator';
import SearchNavigator from './Search.navigator';
import TabBar from '../components/TabBar';
import useTheme from '../Context/ThemeContext';
import MockScreen from '../modules/Mock.screen';

export type TabNavigatorParamList = {
  CategoryNavigator: undefined;
  QuestionsNavigator: undefined;
  SearchNavigator: undefined;
  CommunityNavigator: undefined;
  ProfileNavigator: undefined;
};

const Tab = createBottomTabNavigator<TabNavigatorParamList>();

const TabNavigator = React.memo(() => {
  const {palette} = useTheme();

  const tabBar = useMemo(() => {
    return props => <TabBar {...props} />;
  }, []);

  return (
    <Tab.Navigator
      initialRouteName={'CommunityNavigator'}
      tabBar={tabBar}
      screenOptions={{
        headerShown: false,
      }}>
      <Tab.Screen
        options={{
          title: 'Category',
        }}
        name="CategoryNavigator"
        component={CategoryNavigator}
      />
      <Tab.Screen
        name="QuestionsNavigator"
        component={QuestionsNavigator}
        options={{
          title: 'Questions',
        }}
      />
      <Tab.Screen
        name="SearchNavigator"
        component={SearchNavigator}
        options={{
          title: 'Search',
        }}
      />
      <Tab.Screen
        name="CommunityNavigator"
        component={CommunityNavigator}
        options={{
          title: 'Community',
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          title: 'Profile',
        }}
      />
    </Tab.Navigator>
  );
});

TabNavigator.displayName = 'StartNavigator';

export default TabNavigator;
