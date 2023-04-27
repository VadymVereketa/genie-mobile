import React from 'react';
import {useForm} from 'react-hook-form';
import {Image, StyleSheet, View} from 'react-native';

import Photo3 from './assets/Ellipse3.png';
import Photo1 from './assets/Phoho1.png';
import Photo2 from './assets/Phoho2.png';
import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import {i18n, localize} from '../../localization/utils';
import type {CommunityScreenProps} from '../../navigators/types';
import Button from '../../uikit/Button';
import {ControllerTextInput} from '../../uikit/TextInput';
import {Font14} from '../../uikit/Typography/Font14';
import {Font20} from '../../uikit/Typography/Font20';
import sizes from '../../utils/sizes';
import Photo4 from '../Auth/assets/signup-genie.png';

const photos = [Photo1, Photo2, Photo3, Photo4];

const JoinCommunityScreen = ({
  navigation,
}: CommunityScreenProps<'JoinCommunityScreen'>) => {
  const {palette} = useTheme();
  const [state, setState] = React.useState({});
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      nickname: '',
    },
  });

  return (
    <ScreenContainer style={styles.con}>
      <Header title={localize('titles.community')} />
      <ControllerTextInput
        control={control}
        name="nickname"
        placeholder={localize('input.nickname.placeholder')}
        errors={errors}
        outerStyle={{
          marginBottom: sizes[16],
          marginTop: sizes[16],
        }}
      />
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          marginTop: sizes[32],
          marginBottom: sizes[16],
        }}>
        {photos.map((photo, index) => (
          <Image
            key={index}
            source={photo}
            style={{
              width: sizes[60],
              height: sizes[60],
              borderRadius: sizes[30],
              borderWidth: index === 3 ? 1 : 0,
              borderColor: palette.primary,
              marginLeft: index !== 0 ? -sizes[16] : 0,
            }}
          />
        ))}
      </View>
      <Font14.W400 textAlign="center">
        {localize('join-community-screen.desc')}
      </Font14.W400>
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'flex-end',
        }}>
        <Font14.W400 color="textLight">
          {localize('join-community-screen.terms.text1')}
          <Font14.W400 color="primary" textDecorationLine="underline">
            {localize('join-community-screen.terms.text2')}
          </Font14.W400>
          {localize('join-community-screen.terms.text3')}
        </Font14.W400>
        <Button
          onPress={() => {
            navigation.replace('MainCommunityScreen');
          }}
          containerStyle={{
            marginTop: sizes[16],
          }}>
          {localize('button.join-and-continue')}
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
export default JoinCommunityScreen;
