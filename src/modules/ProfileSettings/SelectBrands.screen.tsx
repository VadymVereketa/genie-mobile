import React from 'react';

import ScreenContainer from '../../components/ScreenContainer';
import {ProfileSettingsScreenProps} from '../../navigators/types';
import sizes from '../../utils/sizes';
import {StyleSheet} from 'react-native';
import Header from '../../components/Header';
import Footer from './components/Footer';
import SelectBrands from './components/SelectBrands';
import {ScrollView} from 'react-native-gesture-handler';
import {responsiveHeight} from '../../utils/responsive-dimensions';
import {useAppDispatch} from '../../redux/hooks';
import {ProfileSettingsActions} from '../../redux/slices/profileSettings';

const SelectBrandsScreen = ({
  navigation,
}: ProfileSettingsScreenProps<'SelectBrandsScreen'>) => {
  const dispatch = useAppDispatch();

  return (
    <ScreenContainer style={[{}, styles.con]}>
      <Header
        goBack={() => {
          navigation.goBack();
        }}
      />
      <ScrollView style={{height: responsiveHeight(80)}}>
        <SelectBrands />
      </ScrollView>

      <Footer
        onSkip={() => {
          navigation.navigate('TabNavigator', {
            screen: 'CategoryNavigator',
          });
        }}
        onNext={() => {
          dispatch(ProfileSettingsActions.setIsFinished(true));
          navigation.navigate('TabNavigator', {
            screen: 'CategoryNavigator',
          });
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
export default SelectBrandsScreen;
