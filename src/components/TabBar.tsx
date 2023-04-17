import type {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import type {IFigmaIcon} from './FigmaIcon/FigmaIcon';
import FigmaIcon from './FigmaIcon/FigmaIcon';
import useTheme from '../Context/ThemeContext';
import type {TabNavigatorParamList} from '../navigators/Tab.navigator';
import {Font10} from '../uikit/Typography/Font10';
import {getFontFamily} from '../utils/getFontFamily';
import {responsiveWidth} from '../utils/responsive-dimensions';
import sizes from '../utils/sizes';

const getIcon: (
  name: keyof TabNavigatorParamList,
  focused: boolean,
) => IFigmaIcon = (name: keyof TabNavigatorParamList, focused: boolean) => {
  if (name === 'CategoryNavigator') {
    return focused ? 'FaceIdFill' : 'FaceId';
  }
  if (name === 'QuestionsNavigator') {
    return focused ? 'QuestionsFill' : 'Questions';
  }
  if (name === 'SearchNavigator') {
    return focused ? 'SearchFill' : 'Search';
  }
  if (name === 'CommunityNavigator') {
    return focused ? 'CommunityFill' : 'Community';
  }
  return focused ? 'ProfileFill' : 'Profile';
};

const TabBar = ({
  descriptors,
  insets,
  navigation,
  state,
}: BottomTabBarProps) => {
  const height = sizes[50] + (insets.bottom || sizes[20]);
  const {palette} = useTheme();
  return (
    <View
      style={{
        height: height,
        backgroundColor: palette.background,
      }}>
      <View
        style={[
          styles.con,
          {
            backgroundColor: palette.background,
            paddingBottom: insets.bottom || sizes[20],
          },
        ]}>
        {Object.values(descriptors).map((descriptor, index) => {
          const focused = index === state.index;
          return (
            <TouchableOpacity
              key={index}
              onPress={() => {
                navigation.navigate(descriptor.route.name);
              }}
              containerStyle={styles.containerStyle}
              style={styles.style}>
              <FigmaIcon
                name={getIcon(descriptor.route.name, focused)}
                fill={'transparent'}
                size={sizes[24]}
              />
              <Font10.W600
                color={focused ? 'primary' : 'placeholder'}
                style={{
                  fontFamily: focused ? getFontFamily(600) : getFontFamily(500),
                }}>
                {descriptor.options.title}
              </Font10.W600>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  con: {
    borderTopRightRadius: sizes[16],
    borderTopLeftRadius: sizes[16],
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: -2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,

    elevation: 12,
    flexDirection: 'row',
    justifyContent: 'center',
    paddingTop: sizes[16],
  },
  containerStyle: {
    minWidth: responsiveWidth(18),
  },
  style: {
    alignItems: 'center',
  },
});
