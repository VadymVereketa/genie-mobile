import React from 'react';

import {StyleSheet} from 'react-native';
import QuestionsView from '../../components/QuestionsView';
import sizes from '../../utils/sizes';
import {
  CategoryScreenProps,
  QuestionsScreenProps,
} from '../../navigators/types';

const MandateQuestionsScreen = ({
  route,
  navigation,
}: QuestionsScreenProps<'MandateQuestionsScreen'>) => {
  const {items} = route.params;

  return (
    <QuestionsView
      header="Mandate Questions"
      onFinished={() => {
        navigation.goBack();
      }}
      questions={items}
      isSkip={false}
    />
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
});
export default MandateQuestionsScreen;
