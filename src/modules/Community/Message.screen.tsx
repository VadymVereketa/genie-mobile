import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {FlatList, TouchableOpacity} from 'react-native-gesture-handler';

import NotifEmpty from './assets/message-empty.svg';
import DefaultImage from '../../assets/defaultImg';
import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import ViewBorders from '../../components/Views/ViewBorders';
import useTheme from '../../Context/ThemeContext';
import type {CommunityScreenProps} from '../../navigators/types';
import {Font12} from '../../uikit/Typography/Font12';
import {Font14} from '../../uikit/Typography/Font14';
import {Font20} from '../../uikit/Typography/Font20';
import sizes from '../../utils/sizes';

const messages = [
  {
    id: 1,
    name: 'Maria',
    message: 'ok',
    time: '8 hrs ago',
    budget: 1,
  },
  {
    id: 2,
    name: 'Maria',
    message: 'ok',
    time: '8 hrs ago',
  },
];

const MessageScreen = ({navigation}: CommunityScreenProps<'MessageScreen'>) => {
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
      {messages.length > 0 ? (
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
                onPress={() => {
                  navigation.navigate('ChatScreen');
                }}
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
                <View
                  style={{
                    flexGrow: 1,
                    paddingVertical: sizes[8],
                  }}>
                  <View
                    style={{
                      justifyContent: 'space-between',
                      flexGrow: 1,
                      flexDirection: 'row',
                    }}>
                    <Font14.W600>{item.name}</Font14.W600>
                    <Font12.W400 color="textLight">{item.time}</Font12.W400>
                  </View>
                  <Font14.W400 color="textLight">{item.message}</Font14.W400>
                </View>
              </TouchableOpacity>
            );
          }}
          data={messages}
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
            No conversations
          </Font20.W600>
          <Font14.W400 color="textLight">
            Messages from all users appear here
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
export default MessageScreen;
