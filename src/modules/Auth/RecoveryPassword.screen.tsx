import React from 'react';

import ScreenContainer from '../../components/ScreenContainer';
import {AuthScreenProps} from '../../navigators/types';
import useTheme from '../../Context/ThemeContext';
import sizes from '../../utils/sizes';
import {StyleSheet} from 'react-native';
import Button from '../../uikit/Button';
import {ControllerTextInput} from '../../uikit/TextInput';
import {useForm} from 'react-hook-form';
import HeaderAuth from './components/HeaderAuth';

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
