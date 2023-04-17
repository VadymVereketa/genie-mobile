import React from 'react';
import {useForm} from 'react-hook-form';
import {Image, KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

import AddGalleryItem from './components/AddGalleryItem';
import AddGroupItem from './components/AddGroupItem';
import GalleryItem from './components/GalleryItem';
import GroupItem from './components/GroupItem';
import HeaderRight from './components/HeaderRight';
import DefaultImage from '../../assets/defaultImg';
import FigmaIcon from '../../components/FigmaIcon/FigmaIcon';
import Header from '../../components/Header';
import Post from '../../components/Post';
import ScreenContainer from '../../components/ScreenContainer';
import ViewBorders from '../../components/Views/ViewBorders';
import ViewMembers from '../../components/Views/ViewMembers';
import useTheme from '../../Context/ThemeContext';
import type {CommunityScreenProps} from '../../navigators/types';
import Button from '../../uikit/Button';
import IconButton from '../../uikit/IconButton';
import TextInput, {ControllerTextInput} from '../../uikit/TextInput';
import {Font12} from '../../uikit/Typography/Font12';
import {Font14} from '../../uikit/Typography/Font14';
import {Font20} from '../../uikit/Typography/Font20';
import {responsiveHeight} from '../../utils/responsive-dimensions';
import sizes from '../../utils/sizes';

const options = ['Makeup', 'Skincare', '45+', 'LGBTQ'];

const ProductCommunityScreen = ({
  navigation,
}: CommunityScreenProps<'ProductCommunityScreen'>) => {
  const {palette} = useTheme();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      search: '',
    },
  });

  const isEmpty = false;

  return (
    <ScreenContainer style={styles.con}>
      <Header isBack title="Gallery" />
      <Font20.W600
        style={{
          marginVertical: sizes[16],
        }}
        textAlign="center">
        {isEmpty ? 'No photos were found for' : 'See it in real life'} Pupa BB
        Cream + Anti-Eta
      </Font20.W600>
      {isEmpty && (
        <Font14.W400
          style={{
            marginBottom: sizes[16],
          }}
          color="textLight"
          textAlign="center">
          Add a photo if you used the product. If this is your first experience,
          add a photo after purchase and get a gift.
        </Font14.W400>
      )}
      <FlatList
        nestedScrollEnabled
        data={isEmpty ? [1] : [1, 2, 3, 4, 5]}
        renderItem={info => {
          if (info.index === 0) {
            return <AddGalleryItem />;
          }
          return <GalleryItem />;
        }}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    marginVertical: sizes[8],
  },
});
export default ProductCommunityScreen;
