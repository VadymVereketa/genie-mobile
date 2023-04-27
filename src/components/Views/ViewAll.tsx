import React from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import {View} from 'react-native';

import {localize} from '../../localization/utils';
import {Font14} from '../../uikit/Typography/Font14';
import sizes from '../../utils/sizes';

type Props = {
  title: string;
  onPress: () => void;
  style?: StyleProp<ViewStyle>;
};
const ViewAll = ({title, onPress, style}: Props) => {
  return (
    <View
      style={[
        {
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginBottom: sizes[16],
        },
        style,
      ]}>
      <Font14.W600>{title}</Font14.W600>
      <Font14.W600 onPress={onPress} color="primary">
        {localize('common.view-all')}
      </Font14.W600>
    </View>
  );
};

export default ViewAll;
