import React from 'react';
import {StyleSheet} from 'react-native';

import QuestionsView from '../../components/QuestionsView';
import {profileSettings1} from '../../data/data';
import type {ProfileSettingsScreenProps} from '../../navigators/types';
import sizes from '../../utils/sizes';

const ProfileSettingScreen = ({
  navigation,
}: ProfileSettingsScreenProps<'ProfileSettingScreen'>) => {
  return (
    <QuestionsView
      header="Profile setting"
      onFinished={() => {
        navigation.navigate('MoreQuestionsScreen');
      }}
      questions={profileSettings1}
    />
  );
};

export default ProfileSettingScreen;
