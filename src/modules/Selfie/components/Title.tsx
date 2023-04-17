import React from 'react';
import {View} from 'react-native';
import {Theme} from '../../../typings/Theme';
import {Font14} from '../../../uikit/Typography/Font14';
import {Font28} from '../../../uikit/Typography/Font28';
import {responsiveWidth} from '../../../utils/responsive-dimensions';
import sizes from '../../../utils/sizes';

type Props = {
  title: string;
  subtitle?: string;
  color?: keyof Theme['palette'];
};

const Title = ({title, color, subtitle}: Props) => {
  return (
    <View
      style={{
        marginTop: sizes[16],
        marginBottom: sizes[32],
        alignItems: 'center',
      }}>
      <Font28.W600
        textAlign="center"
        style={{
          marginBottom: sizes[12],
          width: responsiveWidth(76),
        }}
        color={color}>
        {title}
      </Font28.W600>
      {subtitle && (
        <Font14.W400 textAlign="center" color={color}>
          {subtitle}
        </Font14.W400>
      )}
    </View>
  );
};

export default Title;
