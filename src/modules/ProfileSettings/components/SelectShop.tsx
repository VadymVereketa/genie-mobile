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

const options = DATA.shops;

const SelectShop = () => {
  const value = useAppSelector(ProfileSettingsSelector.getShop);
  const dispatch = useAppDispatch();

  return (
    <View>
      <Title
        title={'How do you want to shop?'}
        subtitle={'Select one of the below'}
      />
      <Body
        options={options}
        onChange={value => {
          dispatch(ProfileSettingsActions.setShop(value));
        }}
        value={value}
      />
    </View>
  );
};

export default SelectShop;
