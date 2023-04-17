import React from 'react';
import {View} from 'react-native';
import Animated, {
  SharedValue,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import sizes from '../utils/sizes';
import useTheme from '../Context/ThemeContext';

type Props = {
  index: number;
  index2?: SharedValue<number>;
  length: number;
};
const Points = ({index, length, index2}: Props) => {
  const {palette} = useTheme();

  const style = useAnimatedStyle(() => {
    const mainIndex = index2?.value || index;

    return {
      transform: [
        {
          translateX: withTiming(mainIndex * sizes[8] + mainIndex * sizes[8]),
        },
      ],
    };
  }, [index]);

  return (
    <View
      style={{
        alignItems: 'center',
      }}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'center',
          marginVertical: sizes[16],
        }}>
        {Array.from({length}).map((_, item) => {
          return (
            <View
              key={item}
              style={{
                backgroundColor: palette.primaryExtraLight,
                width: sizes[8],
                height: sizes[8],
                borderRadius: sizes[4],
                marginHorizontal: sizes[4],
              }}
            />
          );
        })}
        <Animated.View
          style={[
            {
              height: sizes[8],
              width: sizes[8] * 2,
              borderRadius: sizes[4],
              backgroundColor: palette.primary,
              position: 'absolute',
              left: 0,
            },
            style,
          ]}
        />
      </View>
    </View>
  );
};

export default Points;
