import React from 'react';
import Title from '../../../components/Title';
import Body from '../../../components/Body';
import {useAppDispatch, useAppSelector} from '../../../redux/hooks';
import {
  ProfileSettingsActions,
  ProfileSettingsSelector,
} from '../../../redux/slices/profileSettings';
import DATA from '../../../data/data';

const options = DATA.undertoneTypes;

const SelectUndertoneType = () => {
  const value = useAppSelector(ProfileSettingsSelector.getUndertoneType);
  const dispatch = useAppDispatch();

  return (
    <React.Fragment>
      <Title
        title="What's your undertone type?"
        subtitle="Select one of the below"
      />
      <Body
        options={options}
        onChange={value => {
          dispatch(ProfileSettingsActions.setUndertoneType(value));
        }}
        value={value}
      />
    </React.Fragment>
  );
};

export default SelectUndertoneType;
