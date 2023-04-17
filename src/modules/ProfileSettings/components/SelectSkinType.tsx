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

const options = DATA.skinTypes;

const SelectSkinType = () => {
  const value = useAppSelector(ProfileSettingsSelector.getSkinType);
  const dispatch = useAppDispatch();

  return (
    <View>
      <Title
        title={'What is your skin type?'}
        subtitle={'Select one of the below'}
      />
      <Body
        options={options}
        onChange={value => {
          dispatch(ProfileSettingsActions.setSkinType(value));
        }}
        value={value}
      />
    </View>
  );
};

export default SelectSkinType;
