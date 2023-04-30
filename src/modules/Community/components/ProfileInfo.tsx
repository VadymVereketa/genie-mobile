import React from 'react';
import {View} from 'react-native';

import ViewBorders from '../../../components/Views/ViewBorders';
import useTheme from '../../../Context/ThemeContext';
import {useAppSelector} from '../../../redux/hooks';
import {UserSelector} from '../../../redux/slices/userSlice';
import {Font14} from '../../../uikit/Typography/Font14';
import sizes from '../../../utils/sizes';

const ProfileInfo = () => {
  const {palette} = useTheme();
  const user = useAppSelector(UserSelector.getUser);

  return (
    <React.Fragment>
      <Font14.W600
        textAlign="center"
        style={{
          marginVertical: sizes[16],
        }}>
        {user?.fullName}
      </Font14.W600>
      <ViewBorders
        style={{
          flexDirection: 'row',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '50%',
            justifyContent: 'center',
            borderRightWidth: 1,
            borderRightColor: palette.border,
          }}>
          <Font14.W600
            style={{
              marginRight: sizes[8],
            }}
            textAlign="center">
            0
          </Font14.W600>
          <Font14.W400 textAlign="center" color="textLight">
            followers
          </Font14.W400>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            width: '50%',
            justifyContent: 'center',
          }}>
          <Font14.W600
            style={{
              marginRight: sizes[8],
            }}
            textAlign="center">
            0
          </Font14.W600>
          <Font14.W400 textAlign="center" color="textLight">
            following
          </Font14.W400>
        </View>
      </ViewBorders>
    </React.Fragment>
  );
};

export default ProfileInfo;
