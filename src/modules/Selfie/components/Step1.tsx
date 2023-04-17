import React from 'react';
import {StyleSheet, View} from 'react-native';
import FigmaIcon from '../../../components/FigmaIcon/FigmaIcon';
import {
  responsiveWidth,
  responsiveHeight,
} from '../../../utils/responsive-dimensions';
import sizes from '../../../utils/sizes';
import Title from './Title';

const Step1 = () => {
  return (
    <View style={styles.con}>
      <FigmaIcon
        name="Genie"
        width={responsiveWidth(80)}
        height={responsiveHeight(40)}
        fill={'transparent'}
      />
      <View style={styles.view}>
        <Title
          color="primary"
          title="Take a selfie"
          subtitle="Take a selfie & get the best products for your skin. You’re just a few clicks away from meeting
  the formulas meant for your skin."
        />
      </View>
    </View>
  );
};

export default Step1;

const styles = StyleSheet.create({
  con: {
    alignItems: 'center',
    flexGrow: 1,
    justifyContent: 'center',
    paddingHorizontal: sizes[16],
  },
  view: {
    height: responsiveHeight(20),
  },
});
