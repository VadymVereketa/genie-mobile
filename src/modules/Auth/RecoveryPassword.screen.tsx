import React from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet} from 'react-native';

import HeaderAuth from './components/HeaderAuth';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import type {AuthScreenProps} from '../../navigators/types';
import Button from '../../uikit/Button';
import {ControllerTextInput} from '../../uikit/TextInput';
import sizes from '../../utils/sizes';

const RecoveryPasswordScreen = ({
  navigation,
}: AuthScreenProps<'RecoveryPasswordScreen'>) => {
  const {palette} = useTheme();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      password: '',
    },
  });

  const onSubmit = data => console.log(data);

  return (
    <ScreenContainer scrollable style={styles.con}>
      <HeaderAuth screen="new-password" isBack />
      <ControllerTextInput
        control={control}
        name="password"
        placeholder="Passwword"
        errors={errors}
        secureTextEntry
        outerStyle={{
          marginBottom: sizes[16],
        }}
      />
      <Button
        onPress={handleSubmit(onSubmit)}
        style={{
          marginBottom: sizes[16],
        }}>
        Continue
      </Button>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
});
export default RecoveryPasswordScreen;
