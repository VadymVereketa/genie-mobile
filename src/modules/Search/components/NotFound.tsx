import React from 'react';
import Face from '../assets/face.svg';
import {View} from 'react-native';
import {Font28} from '../../../uikit/Typography/Font28';
import {Font14} from '../../../uikit/Typography/Font14';
import {responsiveHeight} from '../../../utils/responsive-dimensions';

const NotFound = () => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: responsiveHeight(10),
      }}>
      <Face />
      <Font28.W600>Oops</Font28.W600>
      <Font14.W400 color="textLight">
        Nothing found Please try again
      </Font14.W400>
    </View>
  );
};

export default NotFound;
