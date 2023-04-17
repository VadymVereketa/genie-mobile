import React from 'react';
import {StyleSheet} from 'react-native';

import QuestionsView from '../../components/QuestionsView';
import type {CategoryScreenProps} from '../../navigators/types';
import sizes from '../../utils/sizes';

const QuestionsEyesScreen = ({
  route,
  navigation,
}: CategoryScreenProps<'QuestionsEyesScreen'>) => {
  const {items} = route.params;

  return (
    <QuestionsView
      header="Mandate Questions"
      onFinished={() => {
        navigation.navigate('SelfieNavigator', {
          screen: 'OnboardingSelfie',
        });
      }}
      questions={items}
    />
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
});
export default QuestionsEyesScreen;
