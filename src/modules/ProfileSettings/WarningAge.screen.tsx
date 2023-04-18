import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Animated, {SlideInDown} from 'react-native-reanimated';

import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import Title from '../../components/Title';
import useTheme from '../../Context/ThemeContext';
import type {ProfileSettingsScreenProps} from '../../navigators/types';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {fetchDateOfBirth, UserSelector} from '../../redux/slices/userSlice';
import Button from '../../uikit/Button';
import {Font14} from '../../uikit/Typography/Font14';
import {Font20} from '../../uikit/Typography/Font20';
import {formatDate} from '../../utils/formatDate';
import sizes from '../../utils/sizes';

const getYearFromCurrentDate = (date: Date) => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  const currentMonth = currentDate.getMonth();
  const currentDay = currentDate.getDate();

  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  if (currentMonth > month) {
    return currentYear - year;
  }

  if (currentMonth === month) {
    if (currentDay >= day) {
      return currentYear - year;
    }
  }

  return currentYear - year - 1;
};

const WarningAgeScreen = ({
  navigation,
  route,
}: ProfileSettingsScreenProps<'WarningAgeScreen'>) => {
  const {withoutTextInput} = route.params ?? {
    withoutTextInput: false,
  };
  const dispatch = useAppDispatch();
  const {palette} = useTheme();
  const [isShow, setIsShow] = useState(withoutTextInput);
  const defaultDate = useAppSelector(UserSelector.getDateOfBirth);

  const [date, setDate] = useState(defaultDate ?? new Date());

  return (
    <ScreenContainer style={styles.con}>
      <Header
        goBack={() => {
          navigation.goBack();
        }}
      />
      <Font20.W600
        style={{
          marginVertical: sizes[16],
        }}
        textAlign="center">
        We are sorry to inform you that this app is only for users who are 13
        years old or older
      </Font20.W600>
      <Font14.W400
        style={{
          marginBottom: sizes[16],
        }}
        textAlign="center"
        color="textLight">
        As per the Children's Online Privacy Protection Act (COPPA), we are
        required to ensure the safety and privacy of children under the age of
        13. Therefore, we cannot allow users who are under 13 to use our app. We
        apologize for any inconvenience this may cause. If you are under 13,
        please refrain from using our app and wait until you are old enough to
        enjoy it safely. Thank you for your understanding.
      </Font14.W400>
      <Font14.W400 textAlign="center" color="textLight">
        We apologize for any inconvenience this may cause. If you are under 13,
        please refrain from using our app and wait until you are old enough to
        enjoy it safely. Thank you for your understanding.
      </Font14.W400>
      <View style={styles.bottomView}>
        <Button
          onPress={() => {
            navigation.goBack();
          }}>
          Okay
        </Button>
      </View>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    alignItems: 'center',
    paddingHorizontal: sizes[16],
  },
  logo: {
    marginVertical: sizes[40],
  },
  bottomView: {
    flexGrow: 1,
    justifyContent: 'flex-end',
    width: '100%',
  },
  text: {
    textAlign: 'center',
    marginVertical: sizes[24],
  },
});
export default WarningAgeScreen;
