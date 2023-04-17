import React from 'react';
import {Image, StyleSheet, View} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';

import HeaderRight from './components/HeaderRight';
import DefaultImage from '../../assets/defaultImg';
import FigmaIcon from '../../components/FigmaIcon/FigmaIcon';
import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import {groupOptions} from '../../data/groupOptions';
import type {CommunityScreenProps} from '../../navigators/types';
import IconButton from '../../uikit/IconButton';
import {Font14} from '../../uikit/Typography/Font14';
import sizes from '../../utils/sizes';

const ItemSeparatorComponent = () => {
  const {palette} = useTheme();

  return (
    <View
      style={{
        height: 1,
        backgroundColor: palette.line,
      }}
    />
  );
};

const MembersScreen = ({navigation}: CommunityScreenProps<'MembersScreen'>) => {
  const {palette} = useTheme();

  return (
    <ScreenContainer
      style={[
        styles.con,
        {
          backgroundColor: palette.background,
        },
      ]}>
      <Header title="Members" rightView={<HeaderRight />} />
      <FlatList
        data={[1, 2, 3]}
        ItemSeparatorComponent={ItemSeparatorComponent}
        renderItem={info => {
          return (
            <TouchableOpacity
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingVertical: sizes[16],
              }}>
              <Image
                source={DefaultImage}
                style={{
                  width: sizes[40],
                  height: sizes[40],
                  borderRadius: sizes[20],
                  marginRight: sizes[16],
                }}
              />
              <Font14.W600
                style={{
                  flexGrow: 1,
                }}>
                Name
              </Font14.W600>
              <FigmaIcon
                name="ArrowRight"
                size={sizes[24]}
                fill={palette.text}
                strokeWidth={1}
              />
            </TouchableOpacity>
          );
        }}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    padding: sizes[16],
    paddingBottom: sizes[32],
  },
});
export default MembersScreen;
