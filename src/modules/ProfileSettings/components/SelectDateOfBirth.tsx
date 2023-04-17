import React, {useState} from 'react';
import Title from '../../../components/Title';
import {View} from 'react-native';
import TextInput from '../../../uikit/TextInput';

import DatePicker from 'react-native-date-picker';
import Animated, {SlideInDown} from 'react-native-reanimated';
import {
  ScrollView,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

type Props = {
  withoutTextInput?: boolean;
};
const SelectDateOfBirth = ({withoutTextInput = false}: Props) => {
  const [isShow, setIsShow] = useState(withoutTextInput);
  const [date, setDate] = useState(new Date());
  return (
    <TouchableWithoutFeedback
      disabled={withoutTextInput}
      containerStyle={{
        flexGrow: 1,
      }}
      style={{
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
        <TextInput
          value={date.toLocaleDateString()}
          editable={false}
          onPressOut={() => {
            setIsShow(!isShow);
          }}
        />
      )}
      {isShow && (
        <Animated.View
          entering={withoutTextInput ? undefined : SlideInDown}
          style={{
            alignItems: 'center',
            justifyContent: 'flex-end',
            flexGrow: 1,
          }}>
          <DatePicker
            date={date}
            onDateChange={setDate}
            androidVariant="iosClone"
            mode="date"
          />
        </Animated.View>
      )}
    </TouchableWithoutFeedback>
  );
};

export default SelectDateOfBirth;
