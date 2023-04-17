import {BlurView} from '@react-native-community/blur';
import {useNavigation} from '@react-navigation/native';
import React, {useRef} from 'react';
import {useForm} from 'react-hook-form';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import NotFound from './components/NotFound';
import SearchProduct from './components/SearchProduct';
import DefaultImage from '../../assets/defaultImg';
import DetailProduct from '../../components/DetailProduct';
import {usePointDropdown} from '../../components/Dropdown';
import FigmaIcon from '../../components/FigmaIcon/FigmaIcon';
import Header from '../../components/Header';
import Rating from '../../components/Rating';
import ScreenContainer from '../../components/ScreenContainer';
import ViewBorders from '../../components/Views/ViewBorders';
import useTheme from '../../Context/ThemeContext';
import type {SearchScreenProps} from '../../navigators/types';
import Button from '../../uikit/Button';
import IconButton from '../../uikit/IconButton';
import TagButton from '../../uikit/TagButton';
import TextInput, {
  ControllerTextInput,
  TextInputInterface,
} from '../../uikit/TextInput';
import {Font12} from '../../uikit/Typography/Font12';
import {Font14} from '../../uikit/Typography/Font14';
import {Font16} from '../../uikit/Typography/Font16';
import {Font20} from '../../uikit/Typography/Font20';
import {responsiveHeight} from '../../utils/responsive-dimensions';
import sizes from '../../utils/sizes';

const DetailProductScreen = ({
  navigation,
}: SearchScreenProps<'DetailProductScreen'>) => {
  const {palette} = useTheme();

  return <DetailProduct />;
};

/*
Color: 51 Clair/Light
Skin type: All
Brand: Bourjois
Skin tone: All
Item weight: 0.01 Kilograms
Item dimensions LxWxH: 21 x 21 x 76 millimeters
*/
const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
});
export default DetailProductScreen;
