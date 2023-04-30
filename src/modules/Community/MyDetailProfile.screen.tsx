import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet} from 'react-native';

import AchievementSegment from './components/AchievementSegment';
import MakeUpSegment from './components/MakeUpSegment';
import MyProfileSegment from './components/MyProfileSegment';
import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import SegmentControl from '../../components/SegmentControl';
import useTheme from '../../Context/ThemeContext';
import type {CommunityScreenProps} from '../../navigators/types';
import {useAppSelector} from '../../redux/hooks';
import {UserSelector} from '../../redux/slices/userSlice';
import type {Option} from '../../typings/Option';
import sizes from '../../utils/sizes';

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

const MyDetailProfileScreen = ({
  navigation,
}: CommunityScreenProps<'MyDetailProfileScreen'>) => {
  const {palette} = useTheme();
  const user = useAppSelector(UserSelector.getUser);
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
      <Header isBack title={user?.fullName} />
      <SegmentControl
        style={{
          marginVertical: sizes[16],
        }}
        selected={selected}
        onSelect={setSelected}
        options={options}
      />
      {selected.value === '1' && <MyProfileSegment />}
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
              title: 'Create your first group',
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
export default MyDetailProfileScreen;
