import React from 'react';
import Title from '../../../components/Title';
import {View} from 'react-native';
import TextInput from '../../../uikit/TextInput';
import IconBoxButton from '../../../components/BoxButton/IconBoxButton';
import sizes from '../../../utils/sizes';
import Body, {OptionProfileSetting} from '../../../components/Body';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {
  ProfileSettingsActions,
  ProfileSettingsSelector,
} from '../../../redux/slices/profileSettings';
import DATA from '../../../data/data';

const options = DATA.skinIssues;

const SelectSkinIssues = () => {
  const value = useAppSelector(ProfileSettingsSelector.getSkinIssues);
  const dispatch = useAppDispatch();

  return (
    <View>
      <Title
        title={'Do you have any skin issues?'}
        subtitle={'Select all that apply'}
      />
      <Body
        options={options}
        onChange={value => {
          dispatch(ProfileSettingsActions.setSkinIssues(value));
        }}
        value={value}
      />
    </View>
  );
};

export default SelectSkinIssues;
