import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {SvgProps} from 'react-native-svg';

import {BoxIcons} from '../../components/BoxButton/assets';
import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import Title from '../../components/Title';
import useTheme from '../../Context/ThemeContext';
import {CategoryNavigatorParamList} from '../../navigators/Category.navigator';
import type {CategoryScreenProps} from '../../navigators/types';
import {Font16} from '../../uikit/Typography/Font16';
import {responsiveWidth} from '../../utils/responsive-dimensions';
import sizes from '../../utils/sizes';

const MakeUpScreen = ({
  navigation,
  route,
}: CategoryScreenProps<'MakeUpScreen'>) => {
  const {palette} = useTheme();
  const {subCategories, headerTitle} = route.params;

  const goBack = () => {
    navigation.goBack();
  };

  return (
    <ScreenContainer scrollable style={styles.con}>
      <Header title={headerTitle} goBack={goBack} />
      <Title title="What product are you looking for? " />
      <View style={styles.view}>
        {subCategories.map((item, index) => {
          const Asset = BoxIcons[item.asset as keyof typeof BoxIcons];
          return (
            <TouchableOpacity
              key={item.id}
              onPress={() => {
                navigation.navigate('BrowsScreen', {
                  itemCategories: item.options,
                  headerTitle: item.title,
                });
              }}
              style={[
                styles.button,
                {
                  backgroundColor: item.backgroundColor,
                },
              ]}
              containerStyle={styles.containerStyle}>
              <Asset
                style={{
                  marginBottom: sizes[16],
                }}
              />
              <Font16.W600 color="primary">{item.title}</Font16.W600>
            </TouchableOpacity>
          );
        })}
      </View>
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
    width: responsiveWidth(50) - sizes[32],
    marginHorizontal: sizes[5],
    marginBottom: sizes[10],
  },
});
export default MakeUpScreen;
