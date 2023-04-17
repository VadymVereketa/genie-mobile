import React, {useState} from 'react';
import {StyleSheet} from 'react-native';
import DatePicker from 'react-native-date-picker';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import Animated, {SlideInDown} from 'react-native-reanimated';

import Footer from './components/Footer';
import SelectUndertoneType from './components/SelectUndertoneType';
import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import Title from '../../components/Title';
import useTheme from '../../Context/ThemeContext';
import type {ProfileSettingsScreenProps} from '../../navigators/types';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {fetchDateOfBirth, UserSelector} from '../../redux/slices/userSlice';
import Button from '../../uikit/Button';
import TextInput from '../../uikit/TextInput';
import {Font14} from '../../uikit/Typography/Font14';
import {formatDate} from '../../utils/formatDate';
import {responsiveHeight} from '../../utils/responsive-dimensions';
import sizes from '../../utils/sizes';

const SelectDateOfBirthScreen = ({
  navigation,
  route,
}: ProfileSettingsScreenProps<'SelectDateOfBirthScreen'>) => {
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
      <TouchableWithoutFeedback
        disabled={withoutTextInput}
        containerStyle={{
          flexGrow: 1,
        }}
        onPress={() => {
          setIsShow(false);
        }}>
        <Title
          title={'What is your date of birth?'}
          subtitle={
            'Your skin needs change throughout your life so this will help us build the perfect regimen for you'
          }
        />
        {!withoutTextInput && (
          <TouchableOpacity
            style={{
              borderColor: palette.border,
              alignItems: 'flex-start',
              borderWidth: 1,
              padding: sizes[12],
              justifyContent: 'center',
              borderRadius: 8,
            }}
            onPress={() => {
              setIsShow(!isShow);
            }}>
            <Font14.W400>{date.toLocaleDateString()}</Font14.W400>
          </TouchableOpacity>
        )}
        {isShow && (
          <Animated.View
            entering={withoutTextInput ? undefined : SlideInDown}
            style={{
              alignItems: 'center',
              justifyContent: 'flex-end',
            }}>
            <DatePicker
              date={date}
              onDateChange={setDate}
              androidVariant="iosClone"
              mode="date"
              locale="us-en"
              textColor={palette.text}
            />
          </Animated.View>
        )}
      </TouchableWithoutFeedback>
      <Button
        containerStyle={{
          width: '100%',
        }}
        onPress={() => {
          dispatch(
            fetchDateOfBirth({
              type: 'dateofbirth',
              value: formatDate(date, 'MM-DD-YYYY'),
            }),
          );

          if (withoutTextInput) {
            navigation.goBack();
            return;
          }

          navigation.navigate('ProfileSettingScreen');
        }}>
        {withoutTextInput ? 'Save' : 'Next'}
      </Button>
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
export default SelectDateOfBirthScreen;
