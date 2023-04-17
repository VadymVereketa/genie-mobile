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

const options = DATA.allergies;

const SelectAllergies = () => {
  const value = useAppSelector(ProfileSettingsSelector.getAllergies);
  const dispatch = useAppDispatch();

  return (
    <View>
      <Title
        title={'Do you avoid any ingredients while shopping (allergies)?'}
        subtitle={'Select all that apply'}
      />
      <Body
        options={options}
        onChange={value => {
          dispatch(ProfileSettingsActions.setAllergies(value));
        }}
        value={value}
      />
    </View>
  );
};

export default SelectAllergies;
