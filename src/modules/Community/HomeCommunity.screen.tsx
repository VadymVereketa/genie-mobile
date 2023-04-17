import React from 'react';
import {useForm} from 'react-hook-form';
import {Image, StyleSheet, View} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import CommunityHome from './assets/community-home.svg';
import Gallery from './assets/gallery.svg';
import Groups from './assets/groups.svg';
import HeaderRight from './components/HeaderRight';
import TrendingGroup from './components/TrendingGroup';
import FigmaIcon from '../../components/FigmaIcon/FigmaIcon';
import Header from '../../components/Header';
import Post from '../../components/Post';
import Posts from '../../components/Posts';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import type {CommunityScreenProps} from '../../navigators/types';
import Button from '../../uikit/Button';
import IconButton from '../../uikit/IconButton';
import PlusButton from '../../uikit/PlusButton';
import SquareButton from '../../uikit/SquareButton';
import {ControllerTextInput} from '../../uikit/TextInput';
import {Font12} from '../../uikit/Typography/Font12';
import {Font14} from '../../uikit/Typography/Font14';
import {Font16} from '../../uikit/Typography/Font16';
import {Font20} from '../../uikit/Typography/Font20';
import {responsiveWidth} from '../../utils/responsive-dimensions';
import sizes from '../../utils/sizes';
import Avatar from '../Auth/assets/signup-genie.png';

const HomeCommunityScreen = ({
  navigation,
}: CommunityScreenProps<'HomeCommunityScreen'>) => {
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
      <Header isBack title="Community" rightView={<HeaderRight />} />
      <ScrollView>
        <Font14.W400
          style={{
            marginVertical: sizes[16],
          }}
          textAlign="center"
          color="textLight">
          Ask questions, join challenges, and get recommendations from people
          like you
        </Font14.W400>
        <ControllerTextInput
          control={control}
          name="search"
          placeholder="Search or ask a question"
          errors={errors}
          outerStyle={{}}
          iconRight="Search"
        />
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: sizes[16],
            borderBottomWidth: 1,
            borderBottomColor: palette.line,
          }}>
          <View
            style={{
              flexDirection: 'row',
              borderRightWidth: 1,
              borderRightColor: palette.border,
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1,
            }}>
            <FigmaIcon name="Group" size={sizes[18]} />
            <Font12.W400>
              <Font12.W600> 540,690 </Font12.W600>members
            </Font12.W400>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1,
            }}>
            <FigmaIcon name="Message" size={sizes[18]} fill="transparent" />
            <Font12.W400>
              <Font12.W600> 540,690 </Font12.W600>posts
            </Font12.W400>
          </View>
        </View>
        <View
          style={{
            paddingVertical: sizes[16],
            borderBottomWidth: 1,
            borderBottomColor: palette.line,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: sizes[16],
            }}>
            <Font14.W600>Trending groups</Font14.W600>
            <Font14.W600
              onPress={() => {
                navigation.navigate('GroupCommunityScreen');
              }}
              color="primary">
              View all
            </Font14.W600>
          </View>
          <ScrollView
            contentContainerStyle={{
              height: sizes[76],
            }}
            horizontal>
            <SquareButton
              onPress={() => {
                navigation.navigate('AddGroupScreen');
              }}
            />
            <TrendingGroup />
          </ScrollView>
        </View>
        <View
          style={{
            paddingVertical: sizes[16],
            borderBottomWidth: 1,
            borderBottomColor: palette.line,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: sizes[16],
            }}>
            <Font14.W600>Latest photos</Font14.W600>
            <Font14.W600
              color="primary"
              onPress={() => {
                navigation.navigate('GalleryCommunityScreen');
              }}>
              View all
            </Font14.W600>
          </View>
          <ScrollView horizontal>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('AddPhotoScreen');
              }}
              style={{
                borderRadius: sizes[8],
                paddingVertical: sizes[24],
                backgroundColor: palette.line,
                width: sizes[70],
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <PlusButton disabled />
            </TouchableOpacity>
          </ScrollView>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: palette.line,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
            paddingVertical: sizes[16],
          }}>
          <Font14.W600>Add new post</Font14.W600>
          <IconButton
            style={{
              backgroundColor: palette.primaryLight,
              padding: sizes[16],
              borderRadius: sizes[40],
            }}
            iconName="EditSquare"
            size={sizes[20]}
            fill={palette.primary}
            onPress={() => {
              navigation.navigate('AddPostScreen');
            }}
          />
        </View>
        <Posts />
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
});
export default HomeCommunityScreen;
