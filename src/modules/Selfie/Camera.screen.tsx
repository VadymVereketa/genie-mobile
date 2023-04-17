/* import {useIsFocused} from '@react-navigation/native';
import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  runOnJS,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import {
  Camera,
  useCameraDevices,
  useFrameProcessor,
} from 'react-native-vision-camera';
import type {Face} from 'vision-camera-face-detector';
import {scanFaces} from 'vision-camera-face-detector';

import useTheme from '../../Context/ThemeContext';
import type {SelfieScreenProps} from '../../navigators/types';
import {Font20} from '../../uikit/Typography/Font20';

const CameraScreen = ({navigation}: SelfieScreenProps<'CameraScreen'>) => {
  const {palette} = useTheme();
  const devices = useCameraDevices();
  const device = devices.front;
  const isFocused = useIsFocused();
  const [faces, setFaces] = React.useState<Face[]>();
  const x = useSharedValue(0);
  const y = useSharedValue(0);

  React.useEffect(() => {
    // console.log(faces);
  }, [faces]);

  const frameProcessor = useFrameProcessor(frame => {
    'worklet';

    const scannedFaces = scanFaces(frame);
    const point = scannedFaces[0].bounds;
    x.value = point.x / 2;
    y.value = point.y / 2;

    console.log(scannedFaces);

    runOnJS(setFaces)(scannedFaces);
  }, []);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{translateX: x.value}, {translateY: y.value}],
    };
  }, []);

  if (device == null)
    return (
      <View>
        <Font20.W400>Loading</Font20.W400>
      </View>
    );

  return (
    <View
      style={{
        flexGrow: 1,
      }}>
      <Camera
        style={StyleSheet.absoluteFill}
        device={device}
        isActive={isFocused}
        photo={true}
        frameProcessor={frameProcessor}
        frameProcessorFps={10}
      />
      <Animated.View
        style={[
          {
            borderWidth: 3,
            borderColor: 'red',
            left: 0,
            top: 0,
            width: 100,
            height: 100,
            position: 'absolute',
            zIndex: 100,
          },
          style,
        ]}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  con: {
    flexGrow: 1,
  },
  icon: {},
});
export default CameraScreen;
 */
