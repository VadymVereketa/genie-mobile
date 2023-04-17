import React from 'react';
import {StyleSheet, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import FigmaIcon from '../../../components/FigmaIcon/FigmaIcon';
import useTheme from '../../../Context/ThemeContext';
import type {QuestionItem} from '../../../typings/Category';
import CheckBox from '../../../uikit/CheckBox';
import RadioButton from '../../../uikit/RadioButton';
import {Font14} from '../../../uikit/Typography/Font14';
import sizes from '../../../utils/sizes';

export type OptionFilter = {
  label: string;
  value: string;
};

type Props = {
  title: string;
  options: QuestionItem[];
  value: QuestionItem | QuestionItem[] | null;
  onChange: (value: QuestionItem | QuestionItem[]) => void;
};

const ItemFilter = ({options, title, value, onChange}: Props) => {
  const {palette} = useTheme();
  const [isOpen, setIsOpen] = React.useState(true);

  const isArray = Array.isArray(value);

  const Component = isArray ? CheckBox : RadioButton;

  const count = isArray
    ? (value as QuestionItem[]).length
    : value !== null
    ? 1
    : 0;

  return (
    <View>
      <TouchableOpacity
        onPress={() => setIsOpen(!isOpen)}
        style={[
          styles.touchable,
          {
            borderBottomColor: palette.line,
          },
        ]}>
        <Font14.W600>
          {title}
          {!isArray ? (
            <Font14.W400 color="textLight"> (select one)</Font14.W400>
          ) : null}
          {count !== 0 ? ` (${count})` : ''}
        </Font14.W600>
        <FigmaIcon
          name="ArrowDown"
          size={sizes[12]}
          fill={'transparent'}
          style={{
            transform: [
              {
                rotate: isOpen ? '180deg' : '0deg',
              },
            ],
          }}
        />
      </TouchableOpacity>
      {isOpen ? (
        <View
          style={[
            styles.view,
            {
              borderBottomColor: palette.line,
            },
          ]}>
          {options.map((option, index) => {
            const isChecked = isArray
              ? (value as QuestionItem[]).findIndex(
                  item => item.id === option.id,
                ) !== -1
              : (value as QuestionItem)?.id === option.id;
            return (
              <Component
                containerStyle={styles.containerStyle}
                title={option.title}
                checked={isChecked}
                onChange={() => {
                  if (isArray) {
                    const newValue = isChecked
                      ? (value as QuestionItem[]).filter(
                          item => item.id !== option.id,
                        )
                      : [...(value as QuestionItem[]), option];
                    onChange(newValue);
                  } else {
                    const newValue = isChecked ? null : option;
                    onChange(newValue);
                  }
                }}
                key={index}
              />
            );
          })}
        </View>
      ) : null}
    </View>
  );
};

export default ItemFilter;

const styles = StyleSheet.create({
  touchable: {
    paddingVertical: sizes[16],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  view: {
    borderBottomWidth: 1,
    paddingTop: sizes[16],
  },
  containerStyle: {
    marginBottom: sizes[16],
  },
});
