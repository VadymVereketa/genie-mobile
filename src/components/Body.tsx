import React from 'react';
import {BoxIconsType, BoxImagesType} from './BoxButton/assets';
import {ScrollView} from 'react-native-gesture-handler';
import IconBoxButton from './BoxButton/IconBoxButton';
import sizes from '../utils/sizes';
import {View} from 'react-native';
import {QuestionItem} from '../typings/Category';

type Props = {
  options: QuestionItem[];
  value: QuestionItem | QuestionItem[] | null;
  onChange: (value: QuestionItem | QuestionItem[] | null) => void;
};

const Body = ({onChange, options, value}: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingBottom: sizes[16],
        flexWrap: 'wrap',
      }}>
      {options.map(item => {
        const isArray = Array.isArray(value);
        const isActive = isArray
          ? value.some(v => v.id === item.id)
          : value?.id === item.id;
        return (
          <IconBoxButton
            isActive={isActive}
            isCheck={isArray}
            containerStyle={{
              marginTop: sizes[16],
            }}
            key={item.id}
            title={item.title}
            asset={item.asset}
            onPress={() => {
              if (isArray) {
                if (isActive) {
                  onChange(value.filter(v => v.id !== item.id));
                } else {
                  onChange([...value, item]);
                }
              } else {
                onChange(item);
              }
            }}
          />
        );
      })}
    </View>
  );
};

export default Body;
