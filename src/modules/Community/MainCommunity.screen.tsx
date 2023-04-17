import React from 'react';
import {useForm} from 'react-hook-form';
import {Image, StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import CommunityHome from './assets/community-home.svg';
import Gallery from './assets/gallery.svg';
import Groups from './assets/groups.svg';
import HeaderRight from './components/HeaderRight';
import Dropdown, {usePointDropdown} from '../../components/Dropdown';
import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import type {CommunityScreenProps} from '../../navigators/types';
import {Font20} from '../../uikit/Typography/Font20';
import sizes from '../../utils/sizes';
import {ControllerTextInput} from '../../uikit/TextInput';
import Avatar from '../Auth/assets/signup-genie.png';
import {Font14} from '../../uikit/Typography/Font14';
import {Font12} from '../../uikit/Typography/Font12';
import IconButton from '../../uikit/IconButton';
import Button from '../../uikit/Button';

const MainCommunityScreen = ({
  navigation,
}: CommunityScreenProps<'MainCommunityScreen'>) => {
  const {palette} = useTheme();
  const [point, onLayout] = usePointDropdown();
  const [isShowMenu, setIsShowMenu] = React.useState(false);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      nickname: '',
    },
  });

  const options = [
    {
      id: 1,
      title: 'Community Home',
      desc: 'Ask questions, join challenges, and get recommendations from people like you',
      Img: CommunityHome,
      onPress: () => navigation.navigate('HomeCommunityScreen'),
    },
    {
      id: 2,
      title: 'Groups',
      desc: 'Ask questions, join challenges, and get recommendations from people like you',
      Img: Groups,
      onPress: () => navigation.navigate('GroupCommunityScreen'),
    },
    {
      id: 3,
      title: 'Gallery',
      desc: 'AAdd your photos and get inspired by fellow beauty lovers',
      Img: Gallery,
      onPress: () => navigation.navigate('GalleryCommunityScreen'),
    },
  ];

  return (
    <ScreenContainer style={styles.con}>
      <Header title="Community" rightView={<HeaderRight />} />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate('MyDetailProfileScreen');
        }}
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginTop: sizes[16],
          borderBottomWidth: 1,
          borderBottomColor: palette.line,
          paddingBottom: sizes[16],
        }}>
        <Image
          source={Avatar}
          style={{
            width: sizes[40],
            height: sizes[40],
            borderRadius: sizes[20],
            marginRight: sizes[12],
          }}
        />
        <View
          style={{
            flexGrow: 1,
          }}>
          <Font14.W600>username</Font14.W600>
          <Font12.W400 color="textLight">Your community profile</Font12.W400>
        </View>
        <IconButton
          onLayout={onLayout}
          onPress={() => {
            setIsShowMenu(!isShowMenu);
          }}
          iconName="Points"
          size={sizes[20]}
        />
      </TouchableOpacity>
      {options.map(option => {
        const Img = option.Img;

        return (
          <Button
            style={{
              flexDirection: 'row',
              flexGrow: 1,
              maxWidth: '100%',
              justifyContent: 'space-evenly',
              marginTop: sizes[16],
              borderRadius: sizes[32],
              padding: sizes[16],
              paddingVertical: sizes[32],
            }}
            onPress={option.onPress}
            key={option.id}
            variant="border">
            <Img width={80} height={80} />
            <View
              style={{
                flexGrow: 1,
                maxWidth: '70%',
              }}>
              <Font14.W600>{option.title}</Font14.W600>
              <Font12.W400 color="textLight">{option.desc}</Font12.W400>
            </View>
          </Button>
        );
      })}
      <Dropdown
        onChange={value => {}}
        onClose={() => setIsShowMenu(false)}
        options={[
          {
            title: 'Change nickname',
            id: '1',
          },
        ]}
        point={point}
        visible={isShowMenu}
        value={null}
        withoutSelected
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
});
export default MainCommunityScreen;
