import React from 'react';
import {StyleSheet, View} from 'react-native';

import Title from './Title';
import FigmaIcon from '../../../components/FigmaIcon/FigmaIcon';
import useTheme from '../../../Context/ThemeContext';
import {
  responsiveHeight,
  responsiveWidth,
} from '../../../utils/responsive-dimensions';
import sizes from '../../../utils/sizes';

const Step3 = () => {
  const {palette} = useTheme();

  return (
    <View
      style={[
        styles.con,
        {
          backgroundColor: palette.primary,
        },
      ]}>
      <FigmaIcon
        name="Triangle"
        width={responsiveWidth(100)}
        height={responsiveHeight(48)}
        fill={'transparent'}
        style={styles.icon}
      />
      <FigmaIcon
        name="Lamp"
        width={'100%'}
        height={responsiveHeight(30)}
        fill={'transparent'}
      />
      <View
        style={[
          styles.view,
          {
            backgroundColor: palette.secondary,
          },
        ]}>
        <Title
          color="primary"
          title="Good lighting"
          subtitle="Make sure, that light is enough. The best way
          to take a selfie in daylight."
        />
      </View>
    </View>
  );
};
export default Step3;

const styles = StyleSheet.create({
  con: {
    alignItems: 'center',
    flexGrow: 1,
  },
  icon: {
    position: 'absolute',
    top: responsiveHeight(18),
  },
  view: {
    width: '100%',
    position: 'absolute',
    bottom: 0,
    height: responsiveHeight(30),
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: sizes[16],
  },
});
