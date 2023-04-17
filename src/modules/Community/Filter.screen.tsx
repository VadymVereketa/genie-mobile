import React from 'react';
import {StyleSheet, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import type {OptionFilter} from './components/ItemFilter';
import ItemFilter from './components/ItemFilter';
import Header from '../../components/Header';
import useTheme from '../../Context/ThemeContext';
import DATA from '../../data/data';
import {groupOptions} from '../../data/groupOptions';
import type {CommunityScreenProps} from '../../navigators/types';
import IconButton from '../../uikit/IconButton';
import sizes from '../../utils/sizes';

const optionsGroup = groupOptions;
const budgets = DATA.budgets.filter(item => item.id !== 5);
const skinTypes = DATA.skinTypes;
const skinIssues = DATA.skinIssues;

const FilterScreen = ({navigation}: CommunityScreenProps<'FilterScreen'>) => {
  const {palette} = useTheme();
  const [group, setGroup] = React.useState<OptionFilter[]>([]);
  const [budget, setBudget] = React.useState<OptionFilter[]>([]);
  const [skinType, setSkinType] = React.useState<OptionFilter | null>(null);
  const [skinIssue, setSkinIssue] = React.useState<OptionFilter[]>([]);

  return (
    <View
      style={[
        styles.con,
        {
          backgroundColor: palette.background,
        },
      ]}>
      <Header
        title="Filter"
        rightView={
          <IconButton
            onPress={() => navigation.goBack()}
            iconName="Close"
            size={sizes[14]}
            fill={palette.textLight}
          />
        }
      />
      <ScrollView>
        <ItemFilter
          onChange={setGroup}
          options={optionsGroup}
          value={group}
          title="Group"
        />
        <ItemFilter
          onChange={setBudget}
          options={budgets}
          value={budget}
          title="Budget"
        />
        <ItemFilter
          onChange={setSkinType}
          options={skinTypes}
          value={skinType}
          title="Skin type"
        />
        <ItemFilter
          onChange={setSkinIssue}
          options={skinIssues}
          value={skinIssue}
          title="Skin issues"
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  con: {
    padding: sizes[16],
    paddingBottom: sizes[32],
  },
});
export default FilterScreen;
