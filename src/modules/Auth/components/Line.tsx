import React from 'react';
import {StyleSheet, View} from 'react-native';
import useTheme from '../../../Context/ThemeContext';
import {Font14} from '../../../uikit/Typography/Font14';
import sizes from '../../../utils/sizes';

const Line = () => {
  const {palette} = useTheme();

  return (
    <View style={styles.con}>
      <View
        style={[
          styles.line,
          {
            backgroundColor: palette.line,
          },
        ]}
      />
      <Font14.W400
        style={[
          styles.text,
          {
            backgroundColor: palette.background,
          },
        ]}>
        or
      </Font14.W400>
    </View>
  );
};

export default Line;

const styles = StyleSheet.create({
  con: {
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: sizes[24],
  },
  line: {
    position: 'absolute',
    width: '100%',
    height: 1,
  },
  text: {
    position: 'absolute',
    paddingHorizontal: sizes[16],
  },
});
