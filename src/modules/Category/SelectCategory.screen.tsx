import React from 'react';
import {StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {BoxIcons} from '../../components/BoxButton/assets';
import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import categories from '../../data/categories';
import type {CategoryScreenProps} from '../../navigators/types';
import type {MainCategory} from '../../typings/Category';
import {SubCategory} from '../../typings/Category';
import {Font20} from '../../uikit/Typography/Font20';
import {responsiveHeight} from '../../utils/responsive-dimensions';
import sizes from '../../utils/sizes';

const SelectCategoryScreen = ({
  navigation,
}: CategoryScreenProps<'SelectCategoryScreen'>) => {
  const {palette} = useTheme();

  console.log(categories);

  const navigateToMakeUp = (category: MainCategory) => {
    navigation.navigate('MakeUpScreen', {
      subCategories: category.subCategories,
      headerTitle: category.title,
    });
  };

  return (
    <ScreenContainer scrollable style={styles.con}>
      <Header title="Select category" />
      {categories.map((item, index) => {
        const Asset = BoxIcons[item.asset as keyof typeof BoxIcons];
        return (
          <TouchableOpacity
            key={item.id}
            onPress={() => {
              navigateToMakeUp(item);
            }}
            style={[
              styles.button,
              {
                backgroundColor: item.backgroundColor,
              },
            ]}>
            <Asset />
            <Font20.W600 color="primary">{item.title}</Font20.W600>
          </TouchableOpacity>
        );
      })}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
  button: {
    borderRadius: sizes[32],
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: sizes[16],
    paddingVertical: responsiveHeight(7),
  },
});
export default SelectCategoryScreen;
