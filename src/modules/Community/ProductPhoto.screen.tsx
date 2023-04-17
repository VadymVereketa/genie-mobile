import React from 'react';
import {useForm} from 'react-hook-form';
import {Image, KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

import AddGalleryItem from './components/AddGalleryItem';
import AddGroupItem from './components/AddGroupItem';
import GalleryItem from './components/GalleryItem';
import GroupItem from './components/GroupItem';
import HeaderRight from './components/HeaderRight';
import MakeUpItem from './components/MakeUpItem';
import DefaultImage from '../../assets/defaultImg';
import FigmaIcon from '../../components/FigmaIcon/FigmaIcon';
import Header from '../../components/Header';
import ImageSlider from '../../components/ImageSlider';
import Post from '../../components/Post';
import ScreenContainer from '../../components/ScreenContainer';
import ViewBorders from '../../components/Views/ViewBorders';
import ViewMembers from '../../components/Views/ViewMembers';
import useTheme from '../../Context/ThemeContext';
import type {CommunityScreenProps} from '../../navigators/types';
import Button from '../../uikit/Button';
import IconButton from '../../uikit/IconButton';
import TagButton from '../../uikit/TagButton';
import TextInput, {ControllerTextInput} from '../../uikit/TextInput';
import {Font12} from '../../uikit/Typography/Font12';
import {Font14} from '../../uikit/Typography/Font14';
import {Font16} from '../../uikit/Typography/Font16';
import {Font20} from '../../uikit/Typography/Font20';
import {responsiveHeight} from '../../utils/responsive-dimensions';
import sizes from '../../utils/sizes';

const options = ['Yves Saint Laurent', 'Cream', 'Oily Skin'];

const ProductPhotoScreen = ({
  navigation,
}: CommunityScreenProps<'ProductPhotoScreen'>) => {
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

  const isEmpty = true;

  return (
    <ScreenContainer style={styles.con}>
      <Header isBack title="username" />
      <FlatList
        ListHeaderComponent={() => {
          return (
            <React.Fragment>
              <ImageSlider
                style={{
                  marginTop: sizes[16],
                }}
                images={[DefaultImage, DefaultImage, DefaultImage]}
              />
              <Font14.W400 color="textLight">In Beauty Group</Font14.W400>
              <Font16.W600
                style={{
                  marginTop: sizes[8],
                  marginBottom: sizes[16],
                }}>
                Night makeup
              </Font16.W600>
              <Font14.W400 color="textLight">
                Starting a new thread since the old one was taking too long to
                load. Please share your looks and products for what you are
                wearing
              </Font14.W400>
              <View
                style={{
                  flexDirection: 'row',
                  marginHorizontal: -sizes[4],
                  marginVertical: sizes[16],
                }}>
                {options.map((item, index) => (
                  <TagButton
                    color="blue"
                    title={item}
                    key={index}
                    isRemove={false}
                    style={{
                      marginHorizontal: sizes[4],
                    }}
                  />
                ))}
              </View>
              <ViewBorders
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  marginBottom: sizes[16],
                }}>
                <Image
                  source={DefaultImage}
                  style={{
                    width: sizes[32],
                    height: sizes[32],
                    borderRadius: sizes[16],
                    marginRight: sizes[16],
                  }}
                />
                <Font14.W600>username</Font14.W600>
              </ViewBorders>
              <Font14.W600>Products in the photo</Font14.W600>
            </React.Fragment>
          );
        }}
        numColumns={2}
        data={[1, 2, 3]}
        renderItem={info => {
          return <MakeUpItem />;
        }}
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
export default ProductPhotoScreen;
