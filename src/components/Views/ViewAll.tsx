import React from 'react';
import {StyleProp, View, ViewStyle} from 'react-native';
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
        View all
      </Font14.W600>
    </View>
  );
};

export default ViewAll;
