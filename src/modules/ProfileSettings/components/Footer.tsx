import React from 'react';
import {StyleSheet, View} from 'react-native';
import Button from '../../../uikit/Button';

type Props = {
  onSkip: () => void;
  onNext: () => void;
};
const Footer = ({onNext, onSkip}: Props) => {
  return (
    <View style={styles.con}>
      <Button containerStyle={styles.button} variant="border" onPress={onSkip}>
        Skip
      </Button>
      <Button containerStyle={styles.button} onPress={onNext}>
        Next
      </Button>
    </View>
  );
};

export default Footer;

const styles = StyleSheet.create({
  con: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  button: {
    width: '48%',
  },
});
