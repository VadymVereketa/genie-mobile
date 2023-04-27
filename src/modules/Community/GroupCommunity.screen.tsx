import React from 'react';
import {useForm} from 'react-hook-form';
import {Image, StyleSheet, View} from 'react-native';
import {FlatList, ScrollView} from 'react-native-gesture-handler';

import AddGroupItem from './components/AddGroupItem';
import GroupItem from './components/GroupItem';
import HeaderRight from './components/HeaderRight';
import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import {localize} from '../../localization/utils';
import type {CommunityScreenProps} from '../../navigators/types';
import Button from '../../uikit/Button';
import {ControllerTextInput} from '../../uikit/TextInput';
import {Font14} from '../../uikit/Typography/Font14';
import {Font20} from '../../uikit/Typography/Font20';
import {responsiveHeight} from '../../utils/responsive-dimensions';
import sizes from '../../utils/sizes';

const options = ['Makeup', 'Skincare', '45+', 'LGBTQ'];

const GroupCommunityScreen = ({
  navigation,
}: CommunityScreenProps<'GroupCommunityScreen'>) => {
  const {palette} = useTheme();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      search: '',
    },
  });

  return (
    <ScreenContainer style={styles.con}>
      <Header isBack title="Groups" rightView={<HeaderRight />} />
      <FlatList
        ListHeaderComponent={
          <>
            <Font14.W400
              textAlign="center"
              style={styles.title}
              color="textLight">
              {localize('groups-community-screen.desc')}
            </Font14.W400>
            <ControllerTextInput
              control={control}
              name="search"
              placeholder={localize('input.search.placeholder')}
              errors={errors}
              outerStyle={styles.input}
              iconRight="Search"
            />
            <View
              style={[
                styles.view,
                {
                  borderColor: palette.line,
                },
              ]}>
              <Font14.W600>{localize('common.categories')}</Font14.W600>
              <View style={styles.categories}>
                {options.map((item, index) => (
                  <View
                    key={index}
                    style={[
                      styles.category,
                      {
                        borderColor: palette.primary,
                      },
                    ]}>
                    <Font14.W400 color="primary">{item}</Font14.W400>
                  </View>
                ))}
              </View>
            </View>
            <Font14.W600>
              {localize('groups-community-screen.all-groups')}
            </Font14.W600>
          </>
        }
        bounces={false}
        data={[1, 2, 3, 4, 5]}
        renderItem={info => {
          if (info.index === 0) {
            return <AddGroupItem />;
          }
          return <GroupItem />;
        }}
        numColumns={2}
        columnWrapperStyle={styles.columnWrapperStyle}
        contentContainerStyle={{}}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
  title: {
    marginVertical: sizes[16],
  },
  input: {
    marginTop: sizes[16],
  },
  view: {
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginVertical: sizes[16],
    paddingVertical: sizes[16],
  },
  categories: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    marginHorizontal: -sizes[4],
    marginTop: sizes[12],
  },
  category: {
    borderWidth: 1,
    paddingHorizontal: sizes[16],
    paddingVertical: sizes[12],
    borderRadius: sizes[30],
    margin: sizes[4],
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    marginVertical: sizes[8],
  },
});
export default GroupCommunityScreen;
