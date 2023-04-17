import React from 'react';
import {View} from 'react-native';

import useTheme from '../../../Context/ThemeContext';
import {useAppNavigation} from '../../../navigators/hooks';
import IconButton from '../../../uikit/IconButton';
import sizes from '../../../utils/sizes';

const HeaderRight = () => {
  const {palette} = useTheme();
  const navigation = useAppNavigation();

  return (
    <View
      style={{
        flexDirection: 'row',
      }}>
      <IconButton
        iconName="Notif"
        size={sizes[20]}
        fill={'transparent'}
        style={{
          marginRight: sizes[16],
        }}
        onPress={() => {
          navigation.navigate('NotificationsScreen');
        }}
      />
      <IconButton
        onPress={() => {
          console.log('MessageScreen');

          navigation.navigate('MessageScreen');
        }}
        iconName="Mail"
        size={sizes[20]}
        fill={palette.text}
      />
    </View>
  );
};

export default HeaderRight;
