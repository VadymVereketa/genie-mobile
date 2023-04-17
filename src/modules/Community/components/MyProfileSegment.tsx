import React from 'react';
import {ScrollView} from 'react-native-gesture-handler';
import {View, Image} from 'react-native/';
import DefaultImage from '../../../assets/defaultImg';
import Post from '../../../components/Post';
import ViewAll from '../../../components/Views/ViewAll';
import ViewBorders from '../../../components/Views/ViewBorders';
import IconButton from '../../../uikit/IconButton';
import {Font14} from '../../../uikit/Typography/Font14';
import sizes from '../../../utils/sizes';
import ProfileAvatar from './ProfileAvatar';
import TrendingGroup from './TrendingGroup';
import useTheme from '../../../Context/ThemeContext';
import {useAppNavigation} from '../../../navigators/hooks';
import Button from '../../../uikit/Button';
import ProfileInfo from './ProfileInfo';
import SquareButton from '../../../uikit/SquareButton';

const MyProfileSegment = () => {
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
