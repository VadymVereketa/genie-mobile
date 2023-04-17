import React from 'react';

import {Image, StyleSheet, View} from 'react-native';
import useTheme from '../../Context/ThemeContext';
import ScreenContainer from '../../components/ScreenContainer';
import sizes from '../../utils/sizes';
import {Font20} from '../../uikit/Typography/Font20';
import {CommunityScreenProps} from '../../navigators/types';
import Header from '../../components/Header';
import {ControllerTextInput} from '../../uikit/TextInput';
import {useForm} from 'react-hook-form';
import Photo1 from './assets/Phoho1.png';
import Photo2 from './assets/Phoho2.png';
import Photo3 from './assets/Ellipse3.png';
import Photo4 from '../Auth/assets/signup-genie.png';
import {Font14} from '../../uikit/Typography/Font14';
import Button from '../../uikit/Button';
import SegmentControl from '../../components/SegmentControl';
import {Option} from '../../typings/Option';
import ProfileAvatar from './components/ProfileAvatar';
import ViewBorders from '../../components/Views/ViewBorders';
import IconButton from '../../uikit/IconButton';
import ViewAll from '../../components/Views/ViewAll';
import {ScrollView} from 'react-native-gesture-handler';
import TrendingGroup from './components/TrendingGroup';
import DefaultImage from '../../assets/defaultImg';
import Post from '../../components/Post';
import ProfileSegment from './components/ProfileSegment';
import MakeUpSegment from './components/MakeUpSegment';
import AchievementSegment from './components/AchievementSegment';

const options: Option[] = [
  {
    value: '1',
    label: 'Profile',
  },
  {
    value: '2',
    label: 'Makeup bar',
  },
  {
    value: '3',
    label: 'Achievement',
  },
];

const DetailProfileScreen = ({
  navigation,
}: CommunityScreenProps<'DetailProfileScreen'>) => {
  const {palette} = useTheme();
  const [selected, setSelected] = React.useState<Option>(options[0]);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      nickname: '',
    },
  });

  return (
    <ScreenContainer style={styles.con}>
      <Header isBack title="username" />
      <SegmentControl
        style={{
          marginVertical: sizes[16],
        }}
        selected={selected}
        onSelect={setSelected}
        options={options}
      />
      {selected.value === '1' && <ProfileSegment />}
      {selected.value === '2' && <MakeUpSegment />}
      {selected.value === '3' && (
        <AchievementSegment
          selectedItems={['1', '2']}
          options={[
            {
              id: '1',
              title: 'Join the board',
              key: 'board',
            },
            {
              id: '2',
              title: 'Join the board',
              key: 'combiner',
            },
            {
              id: '3',
              title: 'Beauty score',
            },
          ]}
        />
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
});
export default DetailProfileScreen;
