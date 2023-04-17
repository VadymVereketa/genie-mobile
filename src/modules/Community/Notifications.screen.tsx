import React from 'react';

import {Image, StyleSheet, View} from 'react-native';
import sizes from '../../utils/sizes';
import useTheme from '../../Context/ThemeContext';
import {CommunityScreenProps} from '../../navigators/types';
import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import NotifEmpty from './assets/notif-empty.svg';
import {Font20} from '../../uikit/Typography/Font20';
import {Font14} from '../../uikit/Typography/Font14';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';
import DefaultImage from '../../assets/defaultImg';
import {Font12} from '../../uikit/Typography/Font12';
import ViewBorders from '../../components/Views/ViewBorders';

const notifications = [
  {
    id: 1,
    title: 'Jonatan76 is following you.',
    time: '8 hrs ago',
  },
  {
    id: 2,
    title: 'Jonatan76 is following you.',
    time: '8 hrs ago',
  },
];

const NotificationsScreen = ({
  navigation,
}: CommunityScreenProps<'NotificationsScreen'>) => {
  const {palette} = useTheme();

  return (
    <ScreenContainer
      style={[
        styles.con,
        {
          backgroundColor: palette.background,
        },
      ]}>
      <Header title="Notifications" isBack />
      {notifications.length > 0 ? (
        <FlatList
          ItemSeparatorComponent={() => (
            <View
              style={{
                height: 1,
                backgroundColor: palette.line,
              }}
            />
          )}
          renderItem={info => {
            const {item} = info;
            return (
              <TouchableOpacity
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: sizes[16],
                }}>
                <Image
                  source={DefaultImage}
                  style={{
                    width: sizes[60],
                    height: sizes[60],
                    borderRadius: sizes[30],
                    marginRight: sizes[16],
                  }}
                />
                <Font14.W400
                  style={{
                    flex: 1,
                  }}>
                  {item.title}
                </Font14.W400>
                <Font12.W400 color="textLight">{item.time}</Font12.W400>
              </TouchableOpacity>
            );
          }}
          data={notifications}
        />
      ) : (
        <View
          style={{
            alignItems: 'center',
            flexGrow: 1,
            justifyContent: 'center',
          }}>
          <NotifEmpty />
          <Font20.W600
            style={{
              marginVertical: sizes[16],
            }}>
            No notices right now
          </Font20.W600>
          <Font14.W400 color="textLight">
            We’ll notify you whensomething arrives
          </Font14.W400>
        </View>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    padding: sizes[16],
    paddingBottom: sizes[32],
  },
});
export default NotificationsScreen;
