import React from 'react';
import {Option} from '../typings/Option';
import useTheme from '../Context/ThemeContext';
import {StyleProp, View, ViewStyle} from 'react-native';
import sizes from '../utils/sizes';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Font12} from '../uikit/Typography/Font12';
import {responsiveWidth} from '../utils/responsive-dimensions';
import Animated, {useAnimatedStyle, withTiming} from 'react-native-reanimated';

type Props = {
  options: Option[];
  selected: Option;
  onSelect: (option: Option) => void;
  style?: StyleProp<ViewStyle>;
};
const SegmentControl = ({onSelect, options, selected, style}: Props) => {
  const {palette} = useTheme();

  const index = options.findIndex(option => option.value === selected.value);

  const styleAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: withTiming(index * size),
        },
      ],
    };
  }, [index]);

  return (
    <View
      style={[
        {
          flexDirection: 'row',
          borderRadius: sizes[8],
          backgroundColor: '#F6F8FC',
        },
        style,
      ]}>
      {options.map((option, index) => {
        return (
          <TouchableOpacity
            onPress={() => onSelect(option)}
            key={option.value}
            containerStyle={{
              width: '33.33%',
            }}
            style={{
              paddingVertical: sizes[16],
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <Font12.W400>{option.label}</Font12.W400>
          </TouchableOpacity>
        );
      })}
      <Animated.View
        style={[
          {
            paddingVertical: sizes[16],
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: palette.primaryLight,
            borderRadius: sizes[8],
            width: '33.33%',
            position: 'absolute',
          },
          styleAnimated,
        ]}>
        <Font12.W600 color="background">{selected.label}</Font12.W600>
      </Animated.View>
    </View>
  );
};

const size = (responsiveWidth(100) - sizes[32]) / 3;
export default SegmentControl;
