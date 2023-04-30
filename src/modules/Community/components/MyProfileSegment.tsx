import React from 'react';
import {Image, View} from 'react-native/';
import {ScrollView} from 'react-native-gesture-handler';

import ProfileAvatar from './ProfileAvatar';
import ProfileInfo from './ProfileInfo';
import TrendingGroup from './TrendingGroup';
import DefaultImage from '../../../assets/defaultImg';
import Post from '../../../components/Post';
import ViewAll from '../../../components/Views/ViewAll';
import ViewBorders from '../../../components/Views/ViewBorders';
import useTheme from '../../../Context/ThemeContext';
import {useAppNavigation} from '../../../navigators/hooks';
import {useAppSelector} from '../../../redux/hooks';
import {UserSelector} from '../../../redux/slices/userSlice';
import Button from '../../../uikit/Button';
import IconButton from '../../../uikit/IconButton';
import SquareButton from '../../../uikit/SquareButton';
import {Font14} from '../../../uikit/Typography/Font14';
import sizes from '../../../utils/sizes';

const MyProfileSegment = () => {
  const user = useAppSelector(UserSelector.getUser);
  const {palette} = useTheme();
  const navigation = useAppNavigation();

  return (
    <ScrollView>
      <ProfileAvatar />
      <ProfileInfo />
      <ViewAll
        style={{
          marginTop: sizes[16],
        }}
        onPress={() => {}}
        title="My groups"
      />
      <ScrollView horizontal>
        <SquareButton />
        <TrendingGroup />
        <TrendingGroup />
      </ScrollView>
      <ViewBorders
        style={{
          marginTop: sizes[16],
        }}>
        <ViewAll style={{}} onPress={() => {}} title="My photos" />
        <ScrollView horizontal>
          <SquareButton />
          {[1, 2, 3].map((item, index) => (
            <Image
              style={{
                marginHorizontal: sizes[6],
              }}
              source={DefaultImage}
              key={index}
            />
          ))}
        </ScrollView>
      </ViewBorders>
      <ViewAll
        style={{
          marginTop: sizes[16],
        }}
        onPress={() => {}}
        title="My posts"
      />
    </ScrollView>
  );
};

export default MyProfileSegment;
