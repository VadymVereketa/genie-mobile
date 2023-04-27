import Axios from 'axios';
import React, {useRef} from 'react';
import {useForm} from 'react-hook-form';
import {Modal, StyleSheet, View} from 'react-native';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import RNFetchBlob from 'rn-fetch-blob';

import HeaderRight from './components/HeaderRight';
import Dropdown, {usePointDropdown} from '../../components/Dropdown';
import FigmaIcon from '../../components/FigmaIcon/FigmaIcon';
import Header from '../../components/Header';
import type {IImagePickerInterface} from '../../components/ImagePicker';
import ImagePicker from '../../components/ImagePicker';
import Post from '../../components/Post';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import {allGroupOptions, chooseGroupOptions} from '../../data/groupOptions';
import {sortOptions} from '../../data/sortOptions';
import {localize} from '../../localization/utils';
import type {CommunityScreenProps} from '../../navigators/types';
import Button from '../../uikit/Button';
import PlusButton from '../../uikit/PlusButton';
import TagButton from '../../uikit/TagButton';
import {ControllerTextInput} from '../../uikit/TextInput';
import {Font14} from '../../uikit/Typography/Font14';
import {Font20} from '../../uikit/Typography/Font20';
import {isAndroid, isIOS} from '../../utils/isPlatform';
import {responsiveWidth} from '../../utils/responsive-dimensions';
import sizes from '../../utils/sizes';
import uploadImage from '../../utils/uploadImage';

const AddPhotoScreen = ({
  navigation,
}: CommunityScreenProps<'AddPhotoScreen'>) => {
  const {palette} = useTheme();
  const [pointGroups, onLayout] = usePointDropdown();
  const [isShowGroup, setIsShowGroup] = React.useState(false);
  const [products, setProducts] = React.useState<string[]>([]);
  const [tags, setTags] = React.useState<string[]>([]);
  const ref = useRef<IImagePickerInterface | null>(null);

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

  const onSubmit = async () => {
    const photo = ref.current?.getAssets()[0];

    if (!photo) {
      return;
    }

    try {
      const res = await uploadImage({
        url: 'https://ytmmhc8r3u.us-east-1.awsapprunner.com/api/v1/upload',
        data: photo,
      });
      console.log(res);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <ScreenContainer scrollable style={styles.con}>
      <Header
        goBack={() => {
          navigation.goBack();
        }}
        title="Photo Gallery"
        rightView={<HeaderRight />}
      />
      <View style={styles.view}>
        <ControllerTextInput
          control={control}
          name="product"
          placeholder={localize('input.items.placeholder')}
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
        <Font14.W400>{getValues().group.title}</Font14.W400>
        <FigmaIcon name="ArrowDown" size={sizes[14]} fill="transparent" />
      </TouchableOpacity>

      <ControllerTextInput
        control={control}
        name="subject"
        placeholder={localize('input.subject.placeholder')}
        errors={errors}
        outerStyle={styles.textInput}
      />
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
          placeholder={localize('input.description.placeholder')}
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
            placeholder={localize('input.tags.placeholder')}
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
      <ImagePicker ref={ref} />
      <Button onPress={handleSubmit(onSubmit)}>
        {localize('button.post-now')}
      </Button>
      <Dropdown
        onChange={value => {
          setValue('group', value);
        }}
        onClose={() => setIsShowGroup(false)}
        options={chooseGroupOptions}
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
  },
  view: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    marginBottom: sizes[16],
    marginTop: sizes[16],
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
export default AddPhotoScreen;
