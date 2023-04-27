import React from 'react';
import {Image, StyleSheet, View} from 'react-native';

import DefaultImage from '../../../assets/defaultImg';
import useTheme from '../../../Context/ThemeContext';
import {localize} from '../../../localization/utils';
import {useAppNavigation} from '../../../navigators/hooks';
import Button from '../../../uikit/Button';
import {Font12} from '../../../uikit/Typography/Font12';
import {responsiveWidth} from '../../../utils/responsive-dimensions';
import sizes from '../../../utils/sizes';
import Genie from '../assets/genie.svg';

const AddGalleryItem = () => {
  const {palette} = useTheme();
  const navigation = useAppNavigation();

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
          styles.img,
          {
            backgroundColor: palette.secondary,
          },
        ]}>
        <Genie />
      </View>
      <View style={styles.view}>
        <Font12.W600 style={styles.text}>
          {localize('gallery-community-screen.share-photo')}
        </Font12.W600>
        <Button
          onPress={() => {
            navigation.navigate('AddPhotoScreen');
          }}>
          {localize('button.add-photo')}
        </Button>
      </View>
    </View>
  );
};

export default AddGalleryItem;

const styles = StyleSheet.create({
  con: {
    borderWidth: 1,
    borderRadius: sizes[8],
    width: responsiveWidth(50) - sizes[24],
  },
  img: {
    width: '100%',
    height: sizes[160],
    borderRadius: sizes[8],
    alignItems: 'center',
    justifyContent: 'center',
  },
  view: {
    padding: sizes[12],
  },
  text: {
    marginBottom: sizes[12],
    flexGrow: 1,
  },
});
