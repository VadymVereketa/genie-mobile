import React from 'react';
import {View} from 'react-native';
import {Font14} from '../../../uikit/Typography/Font14';
import Board from '../assets/board.svg';
import Combiner from '../assets/combiner.svg';
import Empty from '../assets/empty.svg';
import {Font12} from '../../../uikit/Typography/Font12';
import useTheme from '../../../Context/ThemeContext';
import sizes from '../../../utils/sizes';
import {AchievementItem} from '../../../typings/AchievementItem';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useAppNavigation} from '../../../navigators/hooks';
import {useGetInfoAward} from './useGetInfoAward';

type Props = {
  options: AchievementItem[];
  selectedItems: string[];
  isCount?: boolean;
};

const AchievementSegment = ({
  options,
  selectedItems,
  isCount = false,
}: Props) => {
  const {palette} = useTheme();
  const naviagation = useAppNavigation();
  const infoFunction = useGetInfoAward();

  return (
    <View>
      {isCount && (
        <Font14.W400>{`You have unlocked ${selectedItems.length} out of ${options.length} awards`}</Font14.W400>
      )}
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}>
        {options.map(item => {
          const info = infoFunction(item.key);
          const Icon = info.icon;

          return (
            <View
              key={item.id}
              style={{
                width: '33.33%',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <TouchableOpacity
                onPress={() => {
                  naviagation.navigate('AwardScreen', {award: item});
                }}
                style={{
                  width: '65%',
                  aspectRatio: 1,
                  backgroundColor: info.bg,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: 50,
                  marginBottom: sizes[16],
                }}>
                <Icon />
              </TouchableOpacity>
              <Font12.W600>{item.title}</Font12.W600>
            </View>
          );
        })}
      </View>
    </View>
  );
};

export default AchievementSegment;
