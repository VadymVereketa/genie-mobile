import React, {useRef} from 'react';
import {useForm} from 'react-hook-form';
import {StyleSheet, View} from 'react-native';
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {
  measure,
  runOnJS,
  useAnimatedRef,
  useDerivedValue,
} from 'react-native-reanimated';

import AddGalleryItem from './components/AddGalleryItem';
import GalleryItem from './components/GalleryItem';
import HeaderRight from './components/HeaderRight';
import DefaultImage from '../../assets/defaultImg';
import Dropdown, {usePointDropdown} from '../../components/Dropdown';
import FigmaIcon from '../../components/FigmaIcon/FigmaIcon';
import Header from '../../components/Header';
import ImageSlider from '../../components/ImageSlider';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import {sortOptions} from '../../data/sortOptions';
import {localize} from '../../localization/utils';
import type {CommunityScreenProps} from '../../navigators/types';
import {ControllerTextInput} from '../../uikit/TextInput';
import {Font14} from '../../uikit/Typography/Font14';
import {Font20} from '../../uikit/Typography/Font20';
import sizes from '../../utils/sizes';

const GalleryCommunityScreen = ({
  navigation,
}: CommunityScreenProps<'GalleryCommunityScreen'>) => {
  const {palette} = useTheme();
  const [isShowSort, setIsShowSort] = React.useState(false);
  const [point, onLayout] = usePointDropdown();
  const [sort, setSort] = React.useState(sortOptions[0]);
  const refY = useRef(0);

  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      nickname: '',
    },
  });

  const newPoint = {...point, y: point.y - refY.current};
  return (
    <ScreenContainer style={styles.con}>
      <Header
        isBack
        title={localize('titles.gallery')}
        rightView={<HeaderRight />}
      />
      <ScrollView
        onScroll={e => {
          console.log(e.nativeEvent.contentOffset.y);
          refY.current = e.nativeEvent.contentOffset.y;
        }}
        scrollEventThrottle={16}
        nestedScrollEnabled>
        <Font20.W600 textAlign="center" style={styles.text}>
          {localize('gallery-community-screen.title')}
        </Font20.W600>
        <Font14.W400 textAlign="center" color={'textLight'}>
          {localize('gallery-community-screen.desc')}
        </Font14.W400>
        <ControllerTextInput
          control={control}
          name="search"
          placeholder={localize('input.search.placeholder-photos')}
          errors={errors}
          outerStyle={styles.textInput}
          iconRight="Search"
        />
        <Font14.W600 style={styles.text2}>
          {localize('gallery-community-screen.mention')}
        </Font14.W600>
        <ImageSlider images={[DefaultImage, DefaultImage, DefaultImage]} />
        <View
          style={[
            styles.view,
            {
              borderColor: palette.line,
            },
          ]}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('FilterScreen');
            }}
            style={styles.touchable}>
            <Font14.W400 style={styles.text3}>
              {localize('common.filter')}
            </Font14.W400>
            <FigmaIcon name="ArrowDown" size={sizes[14]} fill="transparent" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setIsShowSort(true);
            }}
            onLayout={onLayout}
            style={styles.touchable}>
            <Font14.W400 style={styles.text3}>
              {localize('common.sort-by')}: {sort.title}
            </Font14.W400>
            <FigmaIcon name="ArrowDown" size={sizes[14]} fill="transparent" />
          </TouchableOpacity>
        </View>
        <FlatList
          nestedScrollEnabled
          data={[1, 2, 3, 4, 5]}
          renderItem={info => {
            if (info.index === 0) {
              return <AddGalleryItem />;
            }
            return <GalleryItem />;
          }}
          numColumns={2}
          columnWrapperStyle={styles.columnWrapperStyle}
        />
        {isShowSort && (
          <Dropdown
            onChange={setSort}
            onClose={() => {
              setIsShowSort(false);
            }}
            options={sortOptions}
            point={newPoint}
            visible
            value={sort}
          />
        )}
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
  text: {
    marginBottom: sizes[12],
    marginTop: sizes[16],
  },
  textInput: {
    marginTop: sizes[16],
  },
  text2: {
    marginVertical: sizes[16],
  },
  view: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    paddingVertical: sizes[16],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  text3: {
    marginRight: sizes[8],
  },
  columnWrapperStyle: {
    justifyContent: 'space-between',
    marginVertical: sizes[8],
  },
});
export default GalleryCommunityScreen;
