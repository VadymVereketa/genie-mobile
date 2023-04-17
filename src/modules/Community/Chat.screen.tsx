import React, {useCallback, useEffect, useState} from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {
  FlatList,
  TextInput,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {GiftedChat} from 'react-native-gifted-chat';
import {log} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import NotifEmpty from './assets/message-empty.svg';
import DefaultImage from '../../assets/defaultImg';
import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import ViewBorders from '../../components/Views/ViewBorders';
import useTheme from '../../Context/ThemeContext';
import type {CommunityScreenProps} from '../../navigators/types';
import Button from '../../uikit/Button';
import IconButton from '../../uikit/IconButton';
import {Font10} from '../../uikit/Typography/Font10';
import {Font12} from '../../uikit/Typography/Font12';
import {Font14} from '../../uikit/Typography/Font14';
import {Font20} from '../../uikit/Typography/Font20';
import {isIOS} from '../../utils/isPlatform';
import sizes from '../../utils/sizes';

function formatDate(date: Date): string {
  if (!date) return '';
  const today = new Date();
  const dateWithoutYear = date.toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'short',
  });
  const dateWithYear = date.toLocaleDateString(undefined, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });

  if (
    date.getDate() === today.getDate() &&
    date.getMonth() === today.getMonth() &&
    date.getFullYear() === today.getFullYear()
  ) {
    return 'Today';
  } else if (date.getFullYear() === today.getFullYear()) {
    return dateWithoutYear;
  } else {
    return dateWithYear;
  }
}

const getTime = (date: Date, isAMPM = false) => {
  if (isAMPM) {
    return date.toLocaleString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      hour12: true,
    });
  }
  const hours = date.getHours().toString().padStart(2, '0');
  const minutes = date.getMinutes().toString().padStart(2, '0');

  return `${hours}:${minutes}`;
};

let id = 4;

const ChatScreen = ({navigation}: CommunityScreenProps<'ChatScreen'>) => {
  const {palette} = useTheme();
  const insets = useSafeAreaInsets();
  const [messages, setMessages] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    setMessages([
      {
        _id: 3,
        text: 'Hey, I’m good what about you?',
        createdAt: new Date(2022, 1, 1),
        user: {
          _id: 1,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 2,
        text: 'Where were you all this time? have any problem?',
        createdAt: new Date(2022, 1, 1),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
      {
        _id: 1,
        text: 'Hey, how are you?',
        createdAt: new Date(2022, 1, 1),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ]);
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages =>
      GiftedChat.append(previousMessages, messages),
    );
  }, []);

  return (
    <ScreenContainer
      style={[
        styles.con,
        {
          backgroundColor: palette.background,
          paddingBottom: sizes[16],
        },
      ]}>
      <Header title="Usrename" isBack />
      <GiftedChat
        messages={messages}
        bottomOffset={isIOS ? sizes[80] : 0}
        renderDay={props => {
          const current = formatDate(props.currentMessage.createdAt);
          const previous = formatDate(props.previousMessage.createdAt);

          if (current === previous) {
            return null;
          }
          return (
            <Font14.W400
              style={{
                marginBottom: sizes[16],
                marginTop: sizes[16],
              }}
              textAlign="center"
              color="placeholder">
              {current}
            </Font14.W400>
          );
        }}
        onSend={messages => {
          if (text === '') return;
          onSend([
            {
              _id: id,
              text,
              createdAt: new Date(),
              user: {
                _id: 1,
                name: 'React Native',
                avatar: 'https://placeimg.com/140/140/any',
              },
            },
          ]);
          id += 1;
          setText('');
        }}
        user={{
          _id: 1,
        }}
        renderMessage={props => {
          console.log('renderMessage', props);
          const bg = props.position === 'left' ? palette.primary : '#F7F7F7';
          const color =
            props.position === 'left' ? palette.background : palette.text;

          return (
            <React.Fragment>
              <View
                style={{
                  backgroundColor: bg,
                  paddingVertical: sizes[8],
                  paddingHorizontal: sizes[12],
                  alignSelf:
                    props.position === 'left' ? 'flex-start' : 'flex-end',
                  borderRadius: sizes[8],
                  borderTopLeftRadius: props.position === 'left' ? 0 : sizes[8],
                  borderTopRightRadius:
                    props.position === 'right' ? 0 : sizes[8],
                  marginBottom: sizes[8],
                }}>
                <Font14.W400
                  style={{
                    color: color,
                  }}>
                  {props.currentMessage.text}
                </Font14.W400>
                <Font10.W400
                  textAlign={props.position === 'left' ? 'left' : 'right'}
                  style={{
                    color: '#C2C3CC',
                  }}>
                  {getTime(props.currentMessage.createdAt, true)}
                </Font10.W400>
              </View>
              {props.renderDay?.(props)}
            </React.Fragment>
          );
        }}
        renderInputToolbar={props => {
          return (
            <View
              style={{
                flexDirection: 'row',
                borderWidth: 1,
                borderColor: palette.border,
                borderRadius: sizes[8],
                paddingHorizontal: sizes[8],
                paddingVertical: isIOS ? sizes[8] : 0,
                alignItems: 'center',
              }}>
              <IconButton
                iconName="Paperclip"
                size={sizes[20]}
                fill="transparent"
              />
              <TextInput
                value={text}
                onChangeText={setText}
                style={{
                  flexGrow: 1,
                  marginLeft: sizes[12],
                  color: palette.text,
                }}
                placeholder="Write here..."
              />
              <IconButton
                onPress={() => {
                  props.onSend();
                }}
                containerStyle={{
                  backgroundColor: palette.primaryLight,
                  width: sizes[32],
                  height: sizes[32],
                  borderRadius: sizes[16],
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
                iconName="Send"
                size={sizes[20]}
              />
            </View>
          );
        }}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    padding: sizes[16],
    paddingBottom: sizes[40],
  },
});
export default ChatScreen;
