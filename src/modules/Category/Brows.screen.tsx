import React from 'react';

import ScreenContainer from '../../components/ScreenContainer';
import {CategoryScreenProps} from '../../navigators/types';
import useTheme from '../../Context/ThemeContext';
import sizes from '../../utils/sizes';
import {StyleSheet} from 'react-native';
import Header from '../../components/Header';
import Body from '../../components/Body';
import {QuestionItem} from '../../typings/Category';
import {ScrollView} from 'react-native-gesture-handler';

const BrowsScreen = ({
  navigation,
  route,
}: CategoryScreenProps<'BrowsScreen'>) => {
  const {palette} = useTheme();
  const {itemCategories, headerTitle} = route.params;

  const options: QuestionItem[] = itemCategories.map(item => ({
    id: item.id,
    title: item.title,
    asset: item.asset,
  }));

  const goBack = () => {
    navigation.goBack();
  };
  return (
    <ScreenContainer style={styles.con}>
      <Header title={headerTitle} goBack={goBack} />
      <ScrollView>
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
                  navigation.navigate('QuestionsEyesScreen', {
                    items: data,
                  });
                }
              }
            }
          }}
          value={null}
          options={options}
        />
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
  view: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -sizes[5],
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    alignItems: 'center',
    paddingVertical: sizes[32],
    justifyContent: 'center',
    borderRadius: sizes[32],
  },
  containerStyle: {
    flexGrow: 1,
    marginHorizontal: sizes[5],
    marginBottom: sizes[10],
  },
});
export default BrowsScreen;
