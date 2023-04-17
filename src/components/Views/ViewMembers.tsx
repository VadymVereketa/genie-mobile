import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Font12} from '../../uikit/Typography/Font12';
import sizes from '../../utils/sizes';
import FigmaIcon from '../FigmaIcon/FigmaIcon';
import ViewBorders from './ViewBorders';
import useTheme from '../../Context/ThemeContext';

const ViewMembers = () => {
  const {palette} = useTheme();

  return (
    <ViewBorders style={styles.con}>
      <View
        style={[
          styles.view,
          {
            borderRightColor: palette.border,
          },
        ]}>
        <FigmaIcon style={styles.icon} name="Group" size={sizes[18]} />
        <Font12.W400>
          <Font12.W600> 540,690 </Font12.W600>members
        </Font12.W400>
      </View>
      <View style={styles.view2}>
        <FigmaIcon
          style={styles.icon}
          name="Message"
          size={sizes[18]}
          fill="transparent"
        />
        <Font12.W400>
          <Font12.W600> 540,690 </Font12.W600>posts
        </Font12.W400>
      </View>
    </ViewBorders>
  );
};

export default ViewMembers;

const styles = StyleSheet.create({
  con: {
    flexDirection: 'row',
    marginTop: sizes[16],
  },
  view: {
    flexDirection: 'row',
    borderRightWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  view2: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flexGrow: 1,
  },
  icon: {
    marginRight: sizes[8],
  },
});
