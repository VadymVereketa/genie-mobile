import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import DefaultImage from '../../../assets/defaultImg';
import useTheme from '../../../Context/ThemeContext';
import {localize} from '../../../localization/utils';
import {useAppNavigation} from '../../../navigators/hooks';
import type {CommunityScreenProps} from '../../../navigators/types';
import Button from '../../../uikit/Button';
import {Font12} from '../../../uikit/Typography/Font12';
import {Font14} from '../../../uikit/Typography/Font14';
import {responsiveWidth} from '../../../utils/responsive-dimensions';
import sizes from '../../../utils/sizes';
import Genie from '../assets/genie.svg';

const AddGroupItem = () => {
  const navigation =
    useNavigation<CommunityScreenProps<'GroupCommunityScreen'>['navigation']>();
  const {palette} = useTheme();

  return (
    <View
      style={[
        styles.con,
        {
          borderColor: palette.border,
        },
      ]}>
      <View
        style={[
          styles.viewImage,
          {
            backgroundColor: palette.secondary,
          },
        ]}>
        <Genie width={'90%'} height={'90%'} />
      </View>
      <Font14.W600 textAlign="center">
        {localize('groups-community-screen.make-a-group')}
      </Font14.W600>
      <Font12.W400 textAlign="center" color="textLight" style={styles.text}>
        {localize('groups-community-screen.make-a-group')}
      </Font12.W400>
      <Button
        onPress={() => {
          navigation.navigate('AddGroupScreen');
        }}>
        {localize('button.create')}
      </Button>
    </View>
  );
};

export default AddGroupItem;

const styles = StyleSheet.create({
  con: {
    borderWidth: 1,
    borderRadius: sizes[8],
    width: responsiveWidth(50) - sizes[24],
    padding: sizes[8],
  },
  viewImage: {
    width: sizes[82],
    height: sizes[82],
    borderRadius: sizes[82],
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
    marginBottom: sizes[12],
  },
  text: {
    marginBottom: sizes[12],
    flexGrow: 1,
  },
});
