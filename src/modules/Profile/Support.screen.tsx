import React from 'react';

import {StyleSheet, View} from 'react-native';
import useTheme from '../../Context/ThemeContext';
import ScreenContainer from '../../components/ScreenContainer';
import {Font20} from '../../uikit/Typography/Font20';
import PressableItem from './PressableItem';
import sizes from '../../utils/sizes';
import Header from '../../components/Header';
import {Font12} from '../../uikit/Typography/Font12';
import {ProfileScreenProps} from '../../navigators/types';
import Avatar from './assets/avatar.svg';
import {Font14} from '../../uikit/Typography/Font14';
import Switch from '../../uikit/Switch';
import {ControllerTextInput} from '../../uikit/TextInput';
import {useForm} from 'react-hook-form';
import Button from '../../uikit/Button';

const SupportScreen = ({navigation}: ProfileScreenProps<'SupportScreen'>) => {
  const {palette} = useTheme();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      email: '',
      description: '',
    },
  });

  return (
    <ScreenContainer scrollable style={styles.con}>
      <Header
        goBack={() => {
          navigation.goBack();
        }}
        title="Support"
      />
      <Font14.W400
        style={{
          marginVertical: sizes[16],
        }}
        color="textLight"
        textAlign="center">
        Write a message to Genie's support area
      </Font14.W400>
      <ControllerTextInput
        label="Your email"
        control={control}
        name="email"
        errors={errors}
        outerStyle={{
          marginBottom: sizes[16],
          marginTop: sizes[16],
        }}
      />
      <ControllerTextInput
        label="How we can help you?"
        control={control}
        name="description"
        placeholder="Write description..."
        errors={errors}
        outerStyle={{
          marginBottom: sizes[16],
        }}
        multiline
      />
      <View
        style={{
          flexGrow: 1,
          justifyContent: 'flex-end',
        }}>
        <Button>Send</Button>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
});
export default SupportScreen;
