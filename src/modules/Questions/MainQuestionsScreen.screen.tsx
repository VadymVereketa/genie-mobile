import React from 'react';
import {StyleSheet} from 'react-native';

import Body from '../../components/Body';
import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import type {QuestionsScreenProps} from '../../navigators/types';
import {useAppSelector} from '../../redux/hooks';
import {QuestionsSelector} from '../../redux/slices/questionsSlice';
import type {QuestionItem} from '../../typings/Category';
import {Font20} from '../../uikit/Typography/Font20';
import sizes from '../../utils/sizes';

const MainQuestionsScreen = ({
  navigation,
}: QuestionsScreenProps<'MainQuestionsScreen'>) => {
  const {palette} = useTheme();

  const itemCategories = useAppSelector(QuestionsSelector.getSkipQuestions);

  const options: QuestionItem[] = itemCategories.map(item => ({
    id: item.id,
    title: item.title,
    asset: item.asset,
  }));

  return (
    <ScreenContainer scrollable style={styles.con}>
      <Header title={'Questions'} />
      {options.length > 0 ? (
        <Body
          onChange={value => {
            if (!Array.isArray(value) && value) {
              const findValue = itemCategories.find(
                item => item.id === value.id,
              );
              if (findValue) {
                const data = findValue.options;
                console.log('data', data);

                if (data.length !== 0) {
                  navigation.navigate('MandateQuestionsScreen', {
                    items: data,
                  });
                }
              }
            }
          }}
          value={null}
          options={options}
        />
      ) : null}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
});
export default MainQuestionsScreen;
