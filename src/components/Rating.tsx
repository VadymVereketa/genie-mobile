import React from 'react';
import {View} from 'react-native';
import FigmaIcon from './FigmaIcon/FigmaIcon';
import sizes from '../utils/sizes';

type Props = {
  rating: number;
};
const Rating = ({rating}: Props) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        alignItems: 'center',
      }}>
      {Array.from({length: 5}, (_, i) => {
        const value = i + 1;

        if (rating >= value) {
          return (
            <FigmaIcon
              key={i}
              name="FillStar"
              size={sizes[20]}
              fill={'transparent'}
            />
          );
        } else if (rating > value - 1 && rating < value) {
          return (
            <FigmaIcon
              key={i}
              name="HalfStar"
              size={sizes[20]}
              fill={'transparent'}
            />
          );
        }

        return (
          <FigmaIcon
            key={i}
            name="Star"
            size={sizes[20]}
            fill={'transparent'}
          />
        );
      })}
    </View>
  );
};

export default Rating;
