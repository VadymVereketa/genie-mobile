import React from 'react';
import {useForm} from 'react-hook-form';
import {Modal, StyleSheet, View} from 'react-native';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import HeaderRight from './components/HeaderRight';
import Dropdown, {usePointDropdown} from '../../components/Dropdown';
import FigmaIcon from '../../components/FigmaIcon/FigmaIcon';
import Header from '../../components/Header';

import {Font14} from '../../uikit/Typography/Font14';
import {sortOptions} from '../../data/sortOptions';
import {allGroupOptions} from '../../data/groupOptions';
import {responsiveWidth} from '../../utils/responsive-dimensions';
import Post from '../../components/Post';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import {CommunityScreenProps} from '../../navigators/types';
import Button from '../../uikit/Button';
import PlusButton from '../../uikit/PlusButton';
import TagButton from '../../uikit/TagButton';
import {ControllerTextInput} from '../../uikit/TextInput';
import {Font20} from '../../uikit/Typography/Font20';
import sizes from '../../utils/sizes';

const AddPostScreen = ({navigation}: CommunityScreenProps<'AddPostScreen'>) => {
  const {palette} = useTheme();
  const [pointGroups, onLayout] = usePointDropdown();
  const [isShowGroup, setIsShowGroup] = React.useState(false);
  const [products, setProducts] = React.useState<string[]>([]);
  const [tags, setTags] = React.useState<string[]>([]);

  const {
    control,
    handleSubmit,
    formState: {errors},
    setValue,
    getValues,
  } = useForm({
    defaultValues: {
      subject: '',
      group: allGroupOptions[0],
      product: '',
      tag: '',
      description: '',
    },
  });

  const onSubmit = data => {
    console.log(data);
  };
  return (
    <ScreenContainer scrollable style={styles.con}>
      <Header
        goBack={() => {
          navigation.goBack();
        }}
        title="New Post"
        rightView={<HeaderRight />}
      />
      <ControllerTextInput
        control={control}
        name="subject"
        placeholder="Enter a subject"
        errors={errors}
        outerStyle={styles.textInput}
      />
      <View style={styles.view}>
        <ControllerTextInput
          control={control}
          name="product"
          placeholder="Add products to the photo"
          errors={errors}
          outerStyle={styles.textInput1}
        />
        <PlusButton
          onPress={() => {
            const value = getValues().product;
            setProducts([...products, value]);
            setValue('product', '');
          }}
        />
      </View>
      <View style={styles.view2}>
        {products.map((item, index) => {
          return (
            <TagButton
              onPress={() => {
                const newProducts = products.filter((_, i) => i !== index);
                setProducts(newProducts);
              }}
              key={item}
              title={item}
              style={{
                marginHorizontal: sizes[4],
              }}
            />
          );
        })}
      </View>
      <TouchableOpacity
        onLayout={onLayout}
        onPress={() => {
          setIsShowGroup(true);
        }}
        containerStyle={{
          marginBottom: sizes[16],
        }}
        style={[
          styles.touchable,
          {
            borderColor: palette.border,
          },
        ]}>
        <Font14.W400>{getValues().group.label}</Font14.W400>
        <FigmaIcon name="ArrowDown" size={sizes[14]} fill="transparent" />
      </TouchableOpacity>

      <View
        style={[
          styles.view3,
          {
            borderColor: palette.border,
          },
        ]}>
        <ControllerTextInput
          control={control}
          name="description"
          placeholder="Write description..."
          errors={errors}
          outerStyle={[
            styles.textInput2,
            {
              borderBottomColor: palette.border,
            },
          ]}
          isBorder={false}
        />
        <View style={styles.view4}>
          <ControllerTextInput
            control={control}
            name="tag"
            placeholder="Add tags..."
            errors={errors}
            outerStyle={styles.textInput1}
          />
          <PlusButton
            onPress={() => {
              const value = getValues().tag;
              setTags([...tags, value]);
              setValue('tag', '');
            }}
          />
        </View>
        <View style={styles.view5}>
          {tags.map((item, index) => {
            return (
              <TagButton
                color="blue"
                onPress={() => {
                  const newProducts = tags.filter((_, i) => i !== index);
                  setTags(newProducts);
                }}
                key={item}
                title={item}
                style={styles.tag}
              />
            );
          })}
        </View>
      </View>
      <ScrollView horizontal style={styles.scrollView}>
        <TouchableOpacity style={styles.touchable2}>
          <PlusButton
            disabled
            style={{
              backgroundColor: palette.placeholder,
            }}
          />
        </TouchableOpacity>
      </ScrollView>
      <Button onPress={handleSubmit(onSubmit)}>Post now</Button>
      <Dropdown
        onChange={value => {
          setValue('group', value);
        }}
        onClose={() => setIsShowGroup(false)}
        options={allGroupOptions}
        point={pointGroups}
        visible={isShowGroup}
        value={getValues().group}
      />
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
  textInput: {
    marginBottom: sizes[16],
    marginTop: sizes[16],
  },
  view: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: sizes[16],
  },
  textInput1: {
    flexGrow: 1,
    marginRight: sizes[12],
  },
  view2: {
    flexDirection: 'row',
    marginBottom: sizes[16],
  },
  touchable: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: sizes[8],
    padding: sizes[12],
  },
  view3: {
    borderRadius: sizes[8],
    borderWidth: 1,
    padding: sizes[8],
  },
  textInput2: {
    flexGrow: 1,
    marginRight: sizes[12],
    borderBottomWidth: 1,
    marginBottom: sizes[8],
  },
  view4: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: sizes[8],
  },
  view5: {
    flexDirection: 'row',
  },
  tag: {
    marginHorizontal: sizes[4],
  },
  scrollView: {
    marginVertical: sizes[16],
  },
  touchable2: {
    backgroundColor: '#F7F7F7',
    borderRadius: sizes[8],
    alignItems: 'center',
    justifyContent: 'center',
    padding: sizes[32],
  },
});
export default AddPostScreen;
