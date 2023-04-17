import React from 'react';
import {View} from 'react-native';
import {Font20} from '../uikit/Typography/Font20';
import {Font14} from '../uikit/Typography/Font14';
import {Theme} from '../typings/Theme';
import sizes from '../utils/sizes';
import {responsiveWidth} from '../utils/responsive-dimensions';

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
      <Font20.W600
        textAlign="center"
        style={{
          marginBottom: sizes[12],
          width: responsiveWidth(76),
        }}
        color={color}>
        {title}
      </Font20.W600>
      {subtitle && (
        <Font14.W400 textAlign="center" color={color}>
          {subtitle}
        </Font14.W400>
      )}
    </View>
  );
};

export default Title;
