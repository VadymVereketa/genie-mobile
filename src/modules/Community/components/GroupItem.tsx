import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import DefaultImage from '../../../assets/defaultImg';
import FigmaIcon from '../../../components/FigmaIcon/FigmaIcon';
import useTheme from '../../../Context/ThemeContext';
import {localize} from '../../../localization/utils';
import type {CommunityScreenProps} from '../../../navigators/types';
import Button from '../../../uikit/Button';
import {Font12} from '../../../uikit/Typography/Font12';
import {Font14} from '../../../uikit/Typography/Font14';
import {responsiveWidth} from '../../../utils/responsive-dimensions';
import sizes from '../../../utils/sizes';
import Genie from '../assets/genie.svg';

const GroupItem = () => {
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
        <Image style={styles.img} source={DefaultImage} />
      </View>
      <Font14.W600 textAlign="center">LGBTQIA+</Font14.W600>
      <View style={styles.view}>
        <FigmaIcon style={styles.icon} name="Group" size={sizes[24]} />
        <Font12.W600>5231</Font12.W600>
      </View>
      <Font12.W400
        numberOfLines={2}
        color="textLight"
        textAlign="center"
        style={styles.text}>
        {localize('groups-community-screen.desc')}
      </Font12.W400>
      <Button
        onPress={() => {
          navigation.navigate('GroupScreen');
        }}
        variant="border">
        {localize('button.join')}
      </Button>
    </View>
  );
};

export default GroupItem;

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
    overflow: 'hidden',
    alignSelf: 'center',
    marginBottom: sizes[12],
  },
  img: {
    width: '100%',
    height: '100%',
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: sizes[4],
  },
  icon: {
    marginRight: sizes[4],
  },
  text: {
    marginBottom: sizes[12],
    flexGrow: 1,
  },
});
