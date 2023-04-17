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

const ProfileSegment = () => {
  const {palette} = useTheme();
  const navigation = useAppNavigation();

  return (
    <ScrollView>
      <ProfileAvatar />
      <ProfileInfo />
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
          iconName="Mail"
          size={sizes[20]}
          fill={'transparent'}
        />
        <Button
          containerStyle={{
            flexGrow: 1,
          }}
          style={{
            flexGrow: 1,
          }}
          variant="border">
          Follow
        </Button>
      </ViewBorders>
      <ViewAll onPress={() => null} title="Groups" />
      <ScrollView horizontal>
        <TrendingGroup />
      </ScrollView>
      <ViewBorders
        style={{
          marginVertical: sizes[16],
        }}>
        <ViewAll onPress={() => null} title="Photos" />
        <ScrollView horizontal>
          {[DefaultImage, DefaultImage, DefaultImage].map((item, index) => (
            <Image
              key={index}
              source={DefaultImage}
              style={{
                width: sizes[100],
                height: sizes[100],
                borderRadius: sizes[8],
                marginHorizontal: sizes[4],
              }}
            />
          ))}
        </ScrollView>
      </ViewBorders>
      <ViewAll onPress={() => null} title="Posts" />
      <Post />
      <Post />
      <Post />
    </ScrollView>
  );
};

export default ProfileSegment;
