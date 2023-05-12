import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';

import Avatar from './assets/avatar.svg';
import PressableItem from './PressableItem';
import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import {useRules} from '../../hooks/useRules';
import type {ProfileScreenProps} from '../../navigators/types';
import Button from '../../uikit/Button';
import Switch from '../../uikit/Switch';
import {ControllerTextInput} from '../../uikit/TextInput';
import {Font12} from '../../uikit/Typography/Font12';
import {Font14} from '../../uikit/Typography/Font14';
import {Font20} from '../../uikit/Typography/Font20';
import sizes from '../../utils/sizes';

const ChangePasswordScreen = ({
  navigation,
}: ProfileScreenProps<'ChangePasswordScreen'>) => {
  const {palette} = useTheme();
  const rules = useRules();
  const {
    control,
    handleSubmit,
    formState: {errors},
    getValues,
  } = useForm({
    defaultValues: {
      password: '',
      oldPassword: '',
      confirmPassword: '',
    },
  });

  return (
    <ScreenContainer scrollable style={styles.con}>
      <Header
        goBack={() => {
          navigation.goBack();
        }}
        title="Change Password"
      />
      <ControllerTextInput
        label="Old password"
        control={control}
        name="oldPassword"
        errors={errors}
        outerStyle={{
          marginTop: sizes[16],
        }}
        secureTextEntry
        rules={rules.password}
      />
      <ControllerTextInput
        label="New password"
        control={control}
        name="password"
        errors={errors}
        outerStyle={{
          marginTop: sizes[16],
        }}
        secureTextEntry
        rules={rules.password}
      />
      <ControllerTextInput
        label="Confirm password"
        control={control}
        name="confirmPassword"
        errors={errors}
        outerStyle={{
          marginTop: sizes[16],
        }}
        secureTextEntry
        rules={{
          validate: rules.confirmPassword(getValues('password')),
        }}
      />
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'flex-end',
        }}>
        <Button>Save</Button>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
});
export default ChangePasswordScreen;
