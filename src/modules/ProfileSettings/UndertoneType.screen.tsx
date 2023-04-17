import React from 'react';

import ScreenContainer from '../../components/ScreenContainer';
import {ProfileSettingsScreenProps} from '../../navigators/types';
import sizes from '../../utils/sizes';
import {StyleSheet} from 'react-native';
import Header from '../../components/Header';
import Footer from './components/Footer';
import SelectUndertoneType from './components/SelectUndertoneType';
import {ScrollView} from 'react-native-gesture-handler';
import {responsiveHeight} from '../../utils/responsive-dimensions';

const UndertoneTypeScreen = ({
  navigation,
}: ProfileSettingsScreenProps<'UndertoneTypeScreen'>) => {
  return (
    <ScreenContainer style={styles.con}>
      <Header
        goBack={() => {
          navigation.goBack();
        }}
      />
      <ScrollView style={{height: responsiveHeight(80)}}>
        <SelectUndertoneType />
      </ScrollView>
      <Footer
        onSkip={() => {
          navigation.navigate('TabNavigator', {
            screen: 'CategoryNavigator',
          });
        }}
        onNext={() => {
          navigation.navigate('SelectBrandsScreen');
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
export default UndertoneTypeScreen;
