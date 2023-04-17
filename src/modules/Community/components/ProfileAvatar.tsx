import React from 'react';
import useTheme from '../../../Context/ThemeContext';
import {Image, View} from 'react-native';
import sizes from '../../../utils/sizes';
import DefaultImage from '../../../assets/defaultImg';

const ProfileAvatar = () => {
  const {palette} = useTheme();

  return (
    <View
      style={{
        borderRadius: sizes[8],
        backgroundColor: palette.line,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={DefaultImage}
        style={{
          width: sizes[80],
          height: sizes[80],
          borderRadius: sizes[40],
          borderWidth: 2,
          borderColor: palette.background,
          transform: [
            {
              scale: 1.1,
            },
          ],
        }}
      />
    </View>
  );
};

export default ProfileAvatar;
