import React from 'react';
import Title from '../../../components/Title';
import {View} from 'react-native';
import TextInput from '../../../uikit/TextInput';
import IconBoxButton from '../../../components/BoxButton/IconBoxButton';
import sizes from '../../../utils/sizes';
import Body from '../../../components/Body';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {
  ProfileSettingsActions,
  ProfileSettingsSelector,
} from '../../../redux/slices/profileSettings';
import DATA from '../../../data/data';

const options = DATA.budgets;

const SelectBudget = () => {
  const value = useAppSelector(ProfileSettingsSelector.getBudget);
  const dispatch = useAppDispatch();

  return (
    <View
      style={{
        flexGrow: 1,
      }}>
      <Title
        title={'What is your budget?'}
        subtitle={'Select one of the below'}
      />
      <Body
        options={options}
        onChange={value => {
          dispatch(ProfileSettingsActions.setBudget(value));
        }}
        value={value}
      />
    </View>
  );
};

export default SelectBudget;
