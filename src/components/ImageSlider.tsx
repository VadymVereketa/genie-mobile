import React from 'react';
import type {StyleProp, ViewStyle} from 'react-native';
import {Image, StyleSheet, View} from 'react-native';
import {Gesture, GestureDetector} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withDecay,
  withTiming,
} from 'react-native-reanimated';
import {clamp} from 'react-native-redash';

import Points from './Points';
import {responsiveWidth} from '../utils/responsive-dimensions';
import sizes from '../utils/sizes';

const WIDTH_ITEM = responsiveWidth(100) - sizes[32];

type Props = {
  images: any[];
  style?: StyleProp<ViewStyle>;
};
const ImageSlider = ({images, style}: Props) => {
  const valueX = useSharedValue(0);
  const contextX = useSharedValue(0);
  const prevSnapValue = useSharedValue(0);
  const startedPoint = useSharedValue({x: 0, y: 0});
  const getSnapValue = () => {
    'worklet';
    return Math.round(valueX.value / WIDTH_ITEM) * WIDTH_ITEM;
  };
  const length = images.length - 1;

  const value = useDerivedValue(() => {
    return Math.abs(Math.round(valueX.value / WIDTH_ITEM));
  }, []);

  const animationScrollToItem = () => {
    'worklet';
    console.log('value', value.value);
    const snapValue = getSnapValue();
    prevSnapValue.value = snapValue;
    valueX.value = withTiming(snapValue, {duration: 300});
  };

  const gesture = Gesture.Pan()
    .minDistance(30)
    .maxPointers(1)
    .manualActivation(true)
    .onTouchesDown((event, manager) => {
      if (event.numberOfTouches >= 2) {
        return;
      }

      const snapValue = getSnapValue();
      prevSnapValue.value = snapValue;
      valueX.value = snapValue;
      contextX.value = valueX.value;
      startedPoint.value = {
        x: event.allTouches[0].absoluteX,
        y: event.allTouches[0].absoluteY,
      };
    })
    .onTouchesMove((event, manager) => {
      const x = event.allTouches[0].absoluteX - startedPoint.value.x;
      const y = event.allTouches[0].absoluteY - startedPoint.value.y;

      if (Math.abs(y) > 20 && event.state !== 4) {
        manager.fail();
        return;
      }

      if (Math.abs(x) > 3) {
        manager.activate();
      }
      const newValue = x + contextX.value;

      valueX.value = clamp(newValue, -length * WIDTH_ITEM, 0);

      const newSnapValue = getSnapValue();
      if (newSnapValue !== prevSnapValue.value) {
        prevSnapValue.value = newSnapValue;
      }
    })

    .onEnd((event, success) => {
      console.log(event.velocityX);

      if (Math.abs(event.velocityX) >= 200) {
        valueX.value = withDecay(
          {
            velocity: event.velocityX,
            clamp: [-length * WIDTH_ITEM, 0],
            deceleration: 0.4,
            velocityFactor: 1,
          },
          animationScrollToItem,
        );
      } else {
        animationScrollToItem();
      }
    });

  const styleView = useAnimatedStyle(() => {
    return {
      transform: [{translateX: valueX.value}],
    };
  }, []);

  return (
    <View style={[styles.viewSlider, style]}>
      <GestureDetector gesture={gesture}>
        <Animated.View style={[styles.itemSlider, styleView]}>
          {images.map((image, i) => {
            return (
              <Image
                key={i}
                style={styles.image}
                source={image}
                resizeMode="cover"
              />
            );
          })}
        </Animated.View>
      </GestureDetector>
      <Points index={0} index2={value} length={3} />
    </View>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  viewSlider: {
    overflow: 'hidden',
  },
  itemSlider: {
    flexDirection: 'row',
  },
  image: {
    width: '100%',
    height: 300,
    borderRadius: sizes[8],
  },
});
