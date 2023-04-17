import React from 'react';

import {StyleSheet} from 'react-native';
import useTheme from '../Context/ThemeContext';
import ScreenContainer from '../components/ScreenContainer';
import sizes from '../utils/sizes';
import {Font20} from '../uikit/Typography/Font20';

const MockScreen = () => {
  const {palette} = useTheme();

  return (
    <ScreenContainer scrollable style={styles.con}>
      <Font20.W600>Mock screen</Font20.W600>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
});
export default MockScreen;
