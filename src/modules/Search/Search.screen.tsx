import React, {useRef} from 'react';
import {useForm} from 'react-hook-form';
import {Image, Keyboard, StyleSheet, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import NotFound from './components/NotFound';
import DefaultImage from '../../assets/defaultImg';
import {usePointDropdown} from '../../components/Dropdown';
import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import type {SearchScreenProps} from '../../navigators/types';
import IconButton from '../../uikit/IconButton';
import TagButton from '../../uikit/TagButton';
import type {TextInputInterface} from '../../uikit/TextInput';
import TextInput, {ControllerTextInput} from '../../uikit/TextInput';
import {Font14} from '../../uikit/Typography/Font14';
import {Font20} from '../../uikit/Typography/Font20';
import {responsiveHeight} from '../../utils/responsive-dimensions';
import sizes from '../../utils/sizes';

const tags = [
  {
    id: 1,
    title: 'La Roche-Posay',
  },
  {
    id: 2,
    title: 'Yves Saint Laurent',
  },
  {
    id: 3,
    title: 'Clarins',
  },
  {
    id: 4,
    title: 'Chanel',
  },
];

const suggestions = [
  'Chanel Vitalumiere Aqua',
  'Chanel vitalumiere Aqua 22 beige rose',
  'Chanel vitalumiere Aqua rose',
];

const SearchScreen = ({navigation}: SearchScreenProps<'SearchScreen'>) => {
  const [point, onLayout] = usePointDropdown();
  const [isFocus, setIsFocus] = React.useState(false);
  const [search, setSearch] = React.useState('');
  const [history, setHistory] = React.useState<string[]>([]);
  const ref = useRef<TextInputInterface>();
  const {palette} = useTheme();

  const filterItems =
    search !== '' ? suggestions.filter(item => item.includes(search)) : [];

  const handlePressTag = (item: string) => {
    setSearch(item);
    ref.current?.focus();
  };

  const handlePressSuggestion = (item: string) => {
    setSearch(item);
    setHistory([...history, item]);
    navigation.navigate('ResultScreen');
    Keyboard.dismiss();
  };
  return (
    <ScreenContainer style={styles.con}>
      <Header title="Search" />
      <ScrollView bounces={false}>
        <Font14.W400
          style={{
            marginTop: sizes[12],
            marginBottom: sizes[20],
          }}
          textAlign="center"
          color="textLight">
          Look for products and we will find the best tone for your skin
        </Font14.W400>
        <TextInput
          ref={ref}
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          onLayout={onLayout}
          placeholder="Type something"
          outerStyle={{
            marginBottom: sizes[16],
          }}
          iconRight="Search"
          value={search}
          onChangeText={setSearch}
          onSubmitEditing={() => {
            console.log('submit');
          }}
          blurOnSubmit
        />
        {history.length > 0 ? (
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: sizes[16],
              alignItems: 'center',
            }}>
            <Font14.W600>Seach history</Font14.W600>
            <IconButton
              onPress={() => {
                setHistory([]);
              }}
              iconName="Trash"
              size={sizes[20]}
            />
          </View>
        ) : null}
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: -sizes[4],
          }}>
          {history.map((item, id) => (
            <TagButton
              key={id}
              title={item}
              isRemove={false}
              color="grey"
              style={{
                margin: sizes[4],
              }}
              onPress={() => {
                handlePressTag(item);
              }}
            />
          ))}
        </View>
        <Font14.W600
          style={{
            marginVertical: sizes[16],
          }}>
          Top products searches
        </Font14.W600>
        <ScrollView
          style={{
            maxHeight: sizes[80],
            marginHorizontal: -sizes[4],
          }}
          horizontal>
          {[DefaultImage, DefaultImage].map((item, index) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate('DetailProductScreen');
              }}
              containerStyle={{
                borderWidth: 1,
                borderColor: palette.border,
                borderRadius: sizes[8],
                width: sizes[100],
                marginHorizontal: sizes[4],
              }}
              key={index}>
              <Image
                style={{
                  height: '100%',
                }}
                resizeMode="center"
                source={item}
              />
            </TouchableOpacity>
          ))}
        </ScrollView>
        <Font14.W600
          style={{
            marginVertical: sizes[16],
          }}>
          Popular tegs
        </Font14.W600>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: -sizes[4],
          }}>
          {tags.map(item => (
            <TagButton
              key={item.id}
              title={item.title}
              isRemove={false}
              color="blue"
              style={{
                margin: sizes[4],
              }}
              onPress={() => {
                handlePressTag(item.title);
              }}
            />
          ))}
        </View>
      </ScrollView>

      {isFocus && (
        <View
          style={{
            position: 'absolute',
            right: sizes[16],
            left: sizes[16],
            backgroundColor: palette.background,
            top: point.y,
            padding: sizes[12],
            borderRadius: sizes[8],
            zIndex: 100,
            shadowOffset: {
              width: 0,
              height: 0,
            },
            shadowOpacity: 0.1,
            shadowRadius: 4,
            elevation: 5,
            maxHeight: responsiveHeight(60),
          }}>
          <ScrollView>
            {filterItems.length > 0 ? (
              filterItems.map((item, id) => (
                <Font14.W400
                  onPress={() => handlePressSuggestion(item)}
                  style={{
                    paddingVertical: sizes[8],
                  }}
                  key={id.toString()}>
                  {item}
                </Font14.W400>
              ))
            ) : (
              <NotFound />
            )}
          </ScrollView>
        </View>
      )}
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
});
export default SearchScreen;
