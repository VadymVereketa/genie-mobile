import React from 'react';
import {Image, TouchableOpacityProps} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {GenericTouchableProps} from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';

import type {BoxIconsType, BoxImagesType} from './assets';
import {BoxIcons, BoxImages} from './assets';
import type {BaseBoxButtonProps} from './BaseBoxButton';
import BaseBoxButton from './BaseBoxButton';
import useTheme from '../../Context/ThemeContext';
import CheckBox from '../../uikit/CheckBox';
import {Font14} from '../../uikit/Typography/Font14';
import sizes from '../../utils/sizes';

type IconBoxButtonProps = BaseBoxButtonProps & {
  asset?: BoxIconsType | BoxImagesType;
  title?: string;
};

const IconBoxButton = ({asset, title, ...props}: IconBoxButtonProps) => {
  const {palette} = useTheme();

  const Icon = asset ? BoxIcons[asset] : null;
  const Img = asset ? BoxImages[asset] : null;

  return (
    <BaseBoxButton {...props}>
      {Icon ? <Icon width={'25%'} height={'25%'} /> : null}
      {Img ? (
        <Image
          style={{
            width: title ? '25%' : '90%',
            height: title ? '25%' : '90%',
          }}
          resizeMode="contain"
          source={Img}
        />
      ) : null}
      {title ? (
        <Font14.W400
          style={{
            marginTop: sizes[12],
          }}>
          {title}
        </Font14.W400>
      ) : null}
    </BaseBoxButton>
  );
};

export default IconBoxButton;
