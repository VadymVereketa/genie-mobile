import React from 'react';

import QuestionsView from '../../components/QuestionsView';
import useTheme from '../../Context/ThemeContext';
import type {ProfileSettingsScreenProps} from '../../navigators/types';

const SaveProfileSetting = ({
  navigation,
  route,
}: ProfileSettingsScreenProps<'SaveProfileSetting'>) => {
  const {palette} = useTheme();
  const {ids, items} = route.params;

  const profileSettings = items.filter(item => ids.some(id => id === item.id));

  return (
    <QuestionsView
      header="Profile setting"
      onFinished={() => {
        navigation.goBack();
      }}
      questions={profileSettings}
      isSkip={false}
    />
  );
};

export default SaveProfileSetting;
