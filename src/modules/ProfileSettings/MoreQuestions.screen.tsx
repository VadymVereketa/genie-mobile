import React from 'react';
import {StyleSheet, View} from 'react-native';

import Boarding from './assets/boarding.svg';
import Footer from './components/Footer';
import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import Title from '../../components/Title';
import useTheme from '../../Context/ThemeContext';
import type {ProfileSettingsScreenProps} from '../../navigators/types';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {QuestionsActions} from '../../redux/slices/questionsSlice';
import {UserSelector} from '../../redux/slices/userSlice';
import Service from '../../services/service/service';
import Button from '../../uikit/Button';
import {Font14} from '../../uikit/Typography/Font14';
import sizes from '../../utils/sizes';

const MoreQuestionsScreen = ({
  navigation,
}: ProfileSettingsScreenProps<'MoreQuestionsScreen'>) => {
  const {palette} = useTheme();
  const dispatch = useAppDispatch();
  const user = useAppSelector(UserSelector.getUser);

  return (
    <ScreenContainer style={[{}, styles.con]}>
      <Header
        goBack={() => {
          navigation.goBack();
        }}
      />
      <Title
        title="Would you like more questions?"
        subtitle="Based on your answers, AI will be able to find a more accurate product suitable for you"
      />
      <View
        style={{
          flexGrow: 1,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Boarding />
      </View>

      <Footer
        onSkip={() => {
          dispatch(QuestionsActions.setIsFinished(true));
          if (user) {
            Service.completeOnboarding(user.userID);
          }
          navigation.navigate('TabNavigator', {
            screen: 'CategoryNavigator',
          });
        }}
        onNext={() => {
          navigation.navigate('ProfileSettingMoreQuestionsScreen');
        }}
      />
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
export default MoreQuestionsScreen;
