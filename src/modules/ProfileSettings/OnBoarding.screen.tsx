import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';

import Boarding from './assets/boarding.svg';
import FigmaIcon from '../../components/FigmaIcon/FigmaIcon';
import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import Title from '../../components/Title';
import useTheme from '../../Context/ThemeContext';
import type {ProfileSettingsScreenProps} from '../../navigators/types';
import {useAppDispatch} from '../../redux/hooks';
import {QuestionsActions} from '../../redux/slices/questionsSlice';
import Button from '../../uikit/Button';
import {Font14} from '../../uikit/Typography/Font14';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../utils/responsive-dimensions';
import sizes from '../../utils/sizes';

const OnBoardingScreen = ({
  navigation,
}: ProfileSettingsScreenProps<'OnBoardingScreen'>) => {
  const dispatch = useAppDispatch();
  const {palette} = useTheme();

  useEffect(() => {
    dispatch(
      QuestionsActions.setData({
        data: {
          id: 1,
          title: 'asdasd',
        },
        path: 'eyes.color',
      }),
    );
  }, []);
  return (
    <ScreenContainer
      style={[
        {
          backgroundColor: palette.secondary,
        },
        styles.con,
      ]}>
      <Title
        title="Hello Gorgeous!"
        subtitle="Let's customize your beauty routine with our virtual skin analysis tool"
        color="primary"
      />
      <View
        style={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <FigmaIcon
          name="Genie"
          width={responsiveWidth(90)}
          height={responsiveHeight(46)}
          fill={'transparent'}
        />
      </View>
      <Font14.W400
        style={{
          marginBottom: sizes[32],
        }}
        textAlign="center"
        color="textLight">
        Answer the following questions once and they'll be saved to your profile
      </Font14.W400>
      <Button
        containerStyle={{
          width: '100%',
        }}
        onPress={() => {
          navigation.navigate('SelectDateOfBirthScreen', {
            withoutTextInput: false,
          });
        }}>
        Okay
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
export default OnBoardingScreen;
