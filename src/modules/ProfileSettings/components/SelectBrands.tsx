import React from 'react';

import sizes from '../../../utils/sizes';
import {StyleSheet, View} from 'react-native';
import Title from '../../../components/Title';
import Body from '../../../components/Body';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {
  ProfileSettingsActions,
  ProfileSettingsSelector,
} from '../../../redux/slices/profileSettings';
import DATA from '../../../data/data';

const options = DATA.brands;

const SelectBrands = () => {
  const value = useAppSelector(ProfileSettingsSelector.getBrands);
  const dispatch = useAppDispatch();

  return (
    <View>
      <Title
        title="Which brands have you bought before?"
        subtitle="Select all that apply"
      />
      <Body
        options={options}
        onChange={value => {
          dispatch(ProfileSettingsActions.setBrands(value));
        }}
        value={value}
      />
    </View>
  );
};

export default SelectBrands;
