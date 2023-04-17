import React from 'react';
import {StyleSheet} from 'react-native';

import QuestionsView from '../../components/QuestionsView';
import {profileSettings1, profileSettings2} from '../../data/data';
import type {ProfileSettingsScreenProps} from '../../navigators/types';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {QuestionsActions} from '../../redux/slices/questionsSlice';
import {UserSelector} from '../../redux/slices/userSlice';
import Service from '../../services/service/service';
import sizes from '../../utils/sizes';

const ProfileSettingMoreQuestionsScreen = ({
  navigation,
}: ProfileSettingsScreenProps<'ProfileSettingMoreQuestionsScreen'>) => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(UserSelector.getUser);

  return (
    <QuestionsView
      header="Profile setting"
      onFinished={() => {
        dispatch(QuestionsActions.setIsFinished(true));

        if (user) {
          Service.completeOnboarding(user.userID);
        }
        navigation.navigate('TabNavigator', {
          screen: 'CategoryNavigator',
        });
      }}
      questions={profileSettings2}
    />
  );
};

export default ProfileSettingMoreQuestionsScreen;
