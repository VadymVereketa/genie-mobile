import React, {useEffect} from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import {Image, Keyboard, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import FigmaIcon from './FigmaIcon/FigmaIcon';
import DefaultImage from '../assets/defaultImg';
import useTheme from '../Context/ThemeContext';
import {localize} from '../localization/utils';
import IconButton from '../uikit/IconButton';
import TextInput from '../uikit/TextInput';
import {Font12} from '../uikit/Typography/Font12';
import {Font14} from '../uikit/Typography/Font14';
import {formatDate} from '../utils/formatDate';
import sizes from '../utils/sizes';

type Props = {
  style?: StyleProp<ViewStyle>;
};

const Post = ({style}: Props) => {
  const {palette} = useTheme();
  const [isShow, setIsShow] = React.useState(false);

  useEffect(() => {
    const handleKeyboardDidHide = () => {
      setIsShow(false);
    };

    const unsubsription = Keyboard.addListener(
      'keyboardDidHide',
      handleKeyboardDidHide,
    );

    return () => {
      unsubsription.remove();
    };
  }, []);

  return (
    <View style={style}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginVertical: sizes[8],
        }}>
        <Image
          source={DefaultImage}
          style={{
            width: sizes[40],
            height: sizes[40],
            borderRadius: sizes[20],
          }}
        />
        <Font14.W600
          style={{
            flexGrow: 1,
            marginLeft: sizes[8],
          }}>
          MaudeHall
        </Font14.W600>
        <Font12.W400 color="textLight">
          {formatDate(new Date(), 'DD.MM.YYYY hh:mm', true)}
        </Font12.W400>
      </View>
      <Font14.W600
        style={{
          flexGrow: 1,
        }}>
        What are you wearing today
      </Font14.W600>
      <Font12.W400
        style={{
          marginVertical: sizes[8],
        }}>
        Starting a new thead since the old one was taking too long to load.
        Please share your looks and products for what you are wearing...{' '}
        <Font12.W400 color="primary">Read more</Font12.W400>
      </Font12.W400>
      <Font14.W400>In Beauty Group</Font14.W400>
      <View
        style={{
          flexDirection: 'row',
          marginVertical: sizes[8],
        }}>
        <Font12.W400 color="textLight">
          2 {localize('common.likes')}
        </Font12.W400>
        <View
          style={{
            borderLeftWidth: 1,
            borderRightWidth: 1,
            borderRightColor: palette.border,
            borderLeftColor: palette.border,
            paddingHorizontal: sizes[8],
            marginHorizontal: sizes[8],
          }}>
          <TouchableOpacity
            onPress={() => {
              setIsShow(!isShow);
            }}
            style={{
              flexDirection: 'row',
            }}>
            <FigmaIcon name="Replay" size={sizes[14]} />
            <Font12.W400 color="textLight">
              {' '}
              {localize('common.replay')}
            </Font12.W400>
          </TouchableOpacity>
        </View>
        <Font12.W400
          style={{
            flexGrow: 1,
          }}
          color="textLight">
          124 {localize('common.replies')}
        </Font12.W400>
        <IconButton iconName="Like" size={sizes[20]} fill="transparent" />
      </View>
      {isShow && <TextInput autoFocus />}
    </View>
  );
};

console.log(formatDate(new Date(), 'YYYY'));

export default Post;
