import React, {useRef} from 'react';
import {useForm} from 'react-hook-form';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import NotFound from './components/NotFound';
import SearchProduct from './components/SearchProduct';
import DefaultImage from '../../assets/defaultImg';
import {usePointDropdown} from '../../components/Dropdown';
import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import type {SearchScreenProps} from '../../navigators/types';
import IconButton from '../../uikit/IconButton';
import TagButton from '../../uikit/TagButton';
import TextInput, {
  ControllerTextInput,
  TextInputInterface,
} from '../../uikit/TextInput';
import {Font14} from '../../uikit/Typography/Font14';
import {Font20} from '../../uikit/Typography/Font20';
import {responsiveHeight} from '../../utils/responsive-dimensions';
import sizes from '../../utils/sizes';

const ResultScreen = ({navigation}: SearchScreenProps<'ResultScreen'>) => {
  const {palette} = useTheme();

  return (
    <ScreenContainer style={styles.con}>
      <Header isBack title="Search" />
      <ScrollView bounces={false}>
        <SearchProduct
          onBuy={() => {
            navigation.navigate('DetailProductScreen');
          }}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
});
export default ResultScreen;
