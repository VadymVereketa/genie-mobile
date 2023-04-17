import React from 'react';
import {StyleSheet, View} from 'react-native';
import FigmaIcon from '../../../components/FigmaIcon/FigmaIcon';
import {
  responsiveWidth,
  responsiveHeight,
} from '../../../utils/responsive-dimensions';
import sizes from '../../../utils/sizes';
import Title from './Title';

const Step2 = () => {
  return (
    <View style={styles.con}>
      <FigmaIcon
        name="SelfieArea"
        width={responsiveWidth(80)}
        height={responsiveHeight(40)}
        fill={'transparent'}
      />
      <View style={styles.view}>
        <Title
          color="primary"
          title="Selfie area"
          subtitle="Just put your face into selected area."
        />
      </View>
    </View>
  );
};
export default Step2;

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
