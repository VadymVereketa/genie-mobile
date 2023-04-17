import React from 'react';

import {Image, StyleSheet, View} from 'react-native';
import useTheme from '../../Context/ThemeContext';
import ScreenContainer from '../../components/ScreenContainer';
import sizes from '../../utils/sizes';
import {Font20} from '../../uikit/Typography/Font20';
import {CommunityScreenProps} from '../../navigators/types';
import Header from '../../components/Header';
import {ControllerTextInput} from '../../uikit/TextInput';
import {useForm} from 'react-hook-form';
import {Font14} from '../../uikit/Typography/Font14';
import Button from '../../uikit/Button';
import IconButton from '../../uikit/IconButton';
import Board from './assets/board.svg';
import Empty from './assets/empty.svg';
import {responsiveHeight} from '../../utils/responsive-dimensions';
import FigmaIcon from '../../components/FigmaIcon/FigmaIcon';
import {useGetInfoAward} from './components/useGetInfoAward';

const AwardScreen = ({
  navigation,
  route,
}: CommunityScreenProps<'AwardScreen'>) => {
  const {palette} = useTheme();
  const {award} = route.params;
  const infoFunction = useGetInfoAward();

  const {bg, circle, innerBg, icon: Icon} = infoFunction(award.key);
  return (
    <ScreenContainer
      style={[
        styles.con,
        {
          backgroundColor: bg,
        },
      ]}>
      <IconButton
        containerStyle={{
          alignSelf: 'flex-end',
        }}
        iconName="Close"
        size={sizes[16]}
        fill={palette.text}
        onPress={() => {
          navigation.goBack();
        }}
      />
      <View
        style={{
          alignItems: 'center',
          marginTop: responsiveHeight(8),
        }}>
        <View
          style={{
            width: '75%',
            aspectRatio: 1,
            borderRadius: 200,
            backgroundColor: circle,
            padding: sizes[20],
            marginBottom: sizes[20],
          }}>
          <View
            style={{
              width: '100%',
              aspectRatio: 1,
              borderRadius: 200,
              backgroundColor: innerBg,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Icon width="70%" height={'70%'} />
          </View>
        </View>
        <Font14.W600>{award.title}</Font14.W600>
        <Font14.W400
          style={{
            marginBottom: sizes[28],
          }}
          color="textLight">
          Join the family community
        </Font14.W400>
        <Button
          variant="border"
          containerStyle={{
            alignSelf: 'stretch',
          }}
          style={{
            flexDirection: 'row',
            backgroundColor: bg,
            alignItems: 'center',
          }}>
          <FigmaIcon
            style={{
              marginRight: sizes[12],
            }}
            name="Instagram"
            size={sizes[20]}
          />
          <Font14.W400>Share in Stories</Font14.W400>
        </Button>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
});
export default AwardScreen;
