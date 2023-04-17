import React from 'react';
import {Image, View} from 'react-native';
import DefaultImage from '../../../assets/defaultImg';
import {Font12} from '../../../uikit/Typography/Font12';
import {responsiveWidth} from '../../../utils/responsive-dimensions';
import sizes from '../../../utils/sizes';

const MakeUpItem = () => {
  return (
    <View
      style={{
        width: responsiveWidth(50) - sizes[16],
        marginVertical: sizes[16],
      }}>
      <Image
        style={{
          alignSelf: 'center',
          marginBottom: sizes[16],
        }}
        source={DefaultImage}
      />
      <Font12.W600>WIQO ICP CREAM SPF...WIQO ICP CREAM SPF...</Font12.W600>
      <Font12.W400 color="textLight">Foundation</Font12.W400>
    </View>
  );
};

export default MakeUpItem;
