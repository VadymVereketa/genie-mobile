import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import Avatar from './assets/avatar.svg';
import PressableItem from './PressableItem';
import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import type {ProfileScreenProps} from '../../navigators/types';
import {useAppDispatch} from '../../redux/hooks';
import {fetchLogout} from '../../redux/slices/userSlice';
import Switch from '../../uikit/Switch';
import {Font12} from '../../uikit/Typography/Font12';
import {Font14} from '../../uikit/Typography/Font14';
import {Font20} from '../../uikit/Typography/Font20';
import sizes from '../../utils/sizes';

const ProfileScreen = ({navigation}: ProfileScreenProps<'ProfileScreen'>) => {
  const dispatch = useAppDispatch();

  const {palette} = useTheme();
  const [checked, setChecked] = React.useState(false);

  return (
    <ScreenContainer scrollable style={styles.con}>
      <Header title="Profile" />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MyDetailProfileScreen');
        }}
        style={{
          paddingVertical: sizes[16],
          borderBottomWidth: 1,
          borderBottomColor: palette.line,
          flexDirection: 'row',
          alignItems: 'center',
          marginBottom: sizes[16],
        }}>
        <View
          style={{
            backgroundColor: palette.secondary,
            width: sizes[60],
            height: sizes[60],
            borderRadius: sizes[30],
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            marginRight: sizes[16],
          }}>
          <Avatar />
        </View>
        <View>
          <Font20.W600>Maura Smit</Font20.W600>
          <Font12.W400 color="textLight">maurasmit@gmail.com</Font12.W400>
        </View>
      </TouchableOpacity>
      <PressableItem
        onPress={() => {
          navigation.navigate('ProfileEditingScreen');
        }}
        title="Personal data"
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingVertical: sizes[16],
        }}>
        <Font14.W400>Notification</Font14.W400>
        <Switch checked={checked} onChange={setChecked} />
      </View>
      <PressableItem
        onPress={() => {
          navigation.navigate('ProfileEditingScreen');
        }}
        title="Change password"
      />
      <View
        style={{
          width: '100%',
          height: 1,
          backgroundColor: palette.line,
          marginVertical: sizes[16],
        }}
      />
      <PressableItem
        onPress={() => {
          navigation.navigate('SupportScreen');
        }}
        title="Support"
      />
      <PressableItem
        onPress={() => {
          navigation.navigate('ProfileEditingScreen');
        }}
        title="T & Cs"
      />
      <PressableItem
        onPress={() => {
          dispatch(fetchLogout());
        }}
        title="Log out"
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
});
export default ProfileScreen;
