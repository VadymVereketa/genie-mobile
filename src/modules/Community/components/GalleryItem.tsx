import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import DefaultImage from '../../../assets/defaultImg';
import useTheme from '../../../Context/ThemeContext';
import {useAppNavigation} from '../../../navigators/hooks';
import {Font12} from '../../../uikit/Typography/Font12';
import {responsiveWidth} from '../../../utils/responsive-dimensions';
import sizes from '../../../utils/sizes';

const GalleryItem = () => {
  const {palette} = useTheme();
  const navigation = useAppNavigation();

  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ProductPhotoScreen');
      }}
      containerStyle={[
        styles.con,
        {
          borderColor: palette.border,
        },
      ]}>
      <Image style={styles.img} source={DefaultImage} />
      <View style={styles.view}>
        <Font12.W600>Night makeup</Font12.W600>
        <Font12.W400 color="textLight">In Beauty Group</Font12.W400>
        <View
          style={[
            styles.view2,
            {
              backgroundColor: palette.line,
            },
          ]}
        />
        <Font12.W600>username</Font12.W600>
      </View>
    </TouchableOpacity>
  );
};

export default GalleryItem;

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
  },
  view: {
    padding: sizes[12],
  },
  text: {
    marginBottom: sizes[12],
    flexGrow: 1,
  },
  view2: {
    height: 1,
    marginVertical: sizes[12],
  },
});
