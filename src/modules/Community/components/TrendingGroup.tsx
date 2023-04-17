import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, View} from 'react-native';

import DefaultImage from '../../../assets/defaultImg';
import FigmaIcon from '../../../components/FigmaIcon/FigmaIcon';
import useTheme from '../../../Context/ThemeContext';
import Button from '../../../uikit/Button';
import {Font12} from '../../../uikit/Typography/Font12';
import {Font14} from '../../../uikit/Typography/Font14';
import sizes from '../../../utils/sizes';

const TrendingGroup = () => {
  const {palette} = useTheme();
  const navigation = useNavigation();

  return (
    <Button
      style={{
        marginHorizontal: sizes[4],
        borderColor: palette.border,
        paddingHorizontal: sizes[12],
        alignItems: 'center',
        flexDirection: 'row',
        height: '100%',
      }}
      variant="border">
      <Image
        source={DefaultImage}
        style={{
          width: sizes[40],
          height: sizes[40],
          borderRadius: sizes[20],
          marginRight: sizes[8],
        }}
      />
      <View>
        <Font14.W600>Pregnant & Nursing</Font14.W600>
        <View
          style={{
            flexDirection: 'row',
          }}>
          <FigmaIcon
            style={{
              marginRight: sizes[8],
            }}
            name="Group"
            size={sizes[18]}
          />
          <Font12.W400>123</Font12.W400>
        </View>
      </View>
    </Button>
  );
};

export default TrendingGroup;
