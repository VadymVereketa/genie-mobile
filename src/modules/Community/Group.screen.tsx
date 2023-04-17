import React from 'react';
import {useForm} from 'react-hook-form';
import {Image, KeyboardAvoidingView, StyleSheet, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

import AddGroupItem from './components/AddGroupItem';
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

const GroupScreen = ({navigation}: CommunityScreenProps<'GroupScreen'>) => {
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

  return (
    <ScreenContainer style={styles.con}>
      <Header isBack title="Group" rightView={<HeaderRight />} />
      <KeyboardAvoidingView
        behavior="padding"
        style={{
          flexGrow: 1,
        }}>
        <ScrollView
          contentContainerStyle={{
            paddingBottom: sizes[40],
          }}>
          <ControllerTextInput
            control={control}
            name="search"
            placeholder="Search or ask a question"
            errors={errors}
            outerStyle={{
              marginTop: sizes[16],
            }}
            iconRight="Search"
          />
          <Image
            style={{
              width: sizes[82],
              height: sizes[82],
              borderRadius: sizes[82],
              marginVertical: sizes[16],
              alignSelf: 'center',
            }}
            source={DefaultImage}
          />
          <Font14.W600 textAlign="center">Pregnant & Nursing</Font14.W600>
          <Font14.W400 textAlign="center" color="textLight">
            Join groups to discover content tailored to your interests and meet
            like-minded me...
            <Font14.W400 color="primary">Read more</Font14.W400>
          </Font14.W400>
          <ViewMembers />
          <ViewBorders
            bottom
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: sizes[16],
            }}>
            <IconButton
              onPress={() => {
                navigation.navigate('AddPostScreen');
              }}
              style={{
                backgroundColor: palette.primaryLight,
                padding: sizes[16],
                borderRadius: sizes[40],
                marginRight: sizes[16],
              }}
              iconName="EditSquare"
              size={sizes[20]}
              fill={palette.primary}
            />
            <Button
              containerStyle={{
                flexGrow: 1,
              }}
              style={{
                flexGrow: 1,
              }}
              variant="border">
              Join
            </Button>
          </ViewBorders>
          <Font14.W600>All posts</Font14.W600>
          <Post />
          <Post />
        </ScrollView>
      </KeyboardAvoidingView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
});
export default GroupScreen;
