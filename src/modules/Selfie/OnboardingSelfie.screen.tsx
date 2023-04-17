import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {Camera} from 'react-native-vision-camera';

import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Title from './components/Title';
import FigmaIcon from '../../components/FigmaIcon/FigmaIcon';
import Points from '../../components/Points';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import type {SelfieScreenProps} from '../../navigators/types';
import Button from '../../uikit/Button';
import IconButton from '../../uikit/IconButton';
import {Font20} from '../../uikit/Typography/Font20';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utils/responsive-dimensions';
import sizes from '../../utils/sizes';

const OnboardingSelfie = ({
  navigation,
}: SelfieScreenProps<'OnboardingSelfie'>) => {
  const {palette} = useTheme();
  const insets = useSafeAreaInsets();
  const [index, setIndex] = React.useState(0);

  const handleNext = async () => {
    const cameraPermission = await Camera.requestCameraPermission();
    if (cameraPermission === 'authorized') {
      //navigation.navigate('CameraScreen');
      navigation.navigate('ProductResultScreen');
    }
  };
  return (
    <View
      style={[
        styles.con,
        {
          backgroundColor: palette.secondary,
          paddingBottom: insets.bottom,
        },
      ]}>
      <IconButton
        containerStyle={{
          position: 'absolute',
          left: sizes[16],
          top: insets.top + sizes[16],
          zIndex: 100,
        }}
        fill={index !== 2 ? palette.text : palette.background}
        iconName="ArrowBack"
        size={sizes[24]}
        onPress={() => {
          setIndex(i => {
            if (i === 0) {
              navigation.goBack();
              return i;
            }
            return i - 1;
          });
        }}
      />
      <Animated.View
        style={{
          flexGrow: 1,
        }}
        key={index}
        entering={FadeIn}
        exiting={FadeOut}>
        {index === 0 && <Step1 />}
        {index === 1 && <Step2 />}
        {index === 2 && <Step3 />}
      </Animated.View>
      <View
        style={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          paddingHorizontal: sizes[16],
        }}>
        <Points index={index} length={3} />
        <Button
          onPress={() => {
            setIndex(i => {
              if (i === 2) {
                handleNext();
                return i;
              }
              return i + 1;
            });
          }}
          containerStyle={{
            alignSelf: 'stretch',
            marginBottom: sizes[16],
          }}>
          Continue
        </Button>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  con: {
    flexGrow: 1,
  },
  icon: {},
});
export default OnboardingSelfie;
