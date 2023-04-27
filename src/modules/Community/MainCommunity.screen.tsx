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
import {localize} from '../../localization/utils';
import type {CommunityScreenProps} from '../../navigators/types';
import Button from '../../uikit/Button';
import IconButton from '../../uikit/IconButton';
import {ControllerTextInput} from '../../uikit/TextInput';
import {Font12} from '../../uikit/Typography/Font12';
import {Font14} from '../../uikit/Typography/Font14';
import {Font20} from '../../uikit/Typography/Font20';
import sizes from '../../utils/sizes';
import Avatar from '../Auth/assets/signup-genie.png';

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
      title: localize('main-community-screen.home-title'),
      desc: localize('main-community-screen.home-desc'),
      Img: CommunityHome,
      onPress: () => navigation.navigate('HomeCommunityScreen'),
    },
    {
      id: 2,
      title: localize('main-community-screen.groups-title'),
      desc: localize('main-community-screen.groups-desc'),
      Img: Groups,
      onPress: () => navigation.navigate('GroupCommunityScreen'),
    },
    {
      id: 3,
      title: localize('main-community-screen.gallery-title'),
      desc: localize('main-community-screen.gallery-desc'),
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
          <Font12.W400 color="textLight">
            {localize('main-community-screen.profile')}
          </Font12.W400>
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
            title: localize('main-community-screen.change-nickname'),
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
