import React from 'react';
import {StyleSheet, View} from 'react-native';
import {FlatList} from 'react-native-gesture-handler';
import Animated, {
  FadeIn,
  FadeOut,
  useAnimatedStyle,
  withTiming,
} from 'react-native-reanimated';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import Title from './components/Title';
import DetailProduct from '../../components/DetailProduct';
import FigmaIcon from '../../components/FigmaIcon/FigmaIcon';
import Header from '../../components/Header';
import Line from '../../components/Line';
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
import SearchProduct from '../Search/components/SearchProduct';

const DetailProductResultScreen = ({
  navigation,
}: SelfieScreenProps<'DetailProductResultScreen'>) => {
  const {palette} = useTheme();
  const insets = useSafeAreaInsets();
  const [index, setIndex] = React.useState(0);

  return <DetailProduct />;
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
  icon: {},
});
export default DetailProductResultScreen;
