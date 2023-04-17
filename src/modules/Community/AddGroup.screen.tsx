import React from 'react';
import {useForm} from 'react-hook-form';
import {Modal, StyleSheet, View} from 'react-native';
import {
  ScrollView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';
import {launchCamera, launchImageLibrary} from 'react-native-image-picker';

import HeaderRight from './components/HeaderRight';
import Dropdown, {usePointDropdown} from '../../components/Dropdown';
import FigmaIcon from '../../components/FigmaIcon/FigmaIcon';
import Header from '../../components/Header';
import ImagePicker from '../../components/ImagePicker';
import Post from '../../components/Post';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import {allGroupOptions} from '../../data/groupOptions';
import {sortOptions} from '../../data/sortOptions';
import type {CommunityScreenProps} from '../../navigators/types';
import Button from '../../uikit/Button';
import PlusButton from '../../uikit/PlusButton';
import TagButton from '../../uikit/TagButton';
import {ControllerTextInput} from '../../uikit/TextInput';
import {Font14} from '../../uikit/Typography/Font14';
import {Font20} from '../../uikit/Typography/Font20';
import {responsiveWidth} from '../../utils/responsive-dimensions';
import sizes from '../../utils/sizes';

const AddGroupScreen = ({
  navigation,
}: CommunityScreenProps<'AddGroupScreen'>) => {
  const {palette} = useTheme();
  const [isShowGroup, setIsShowGroup] = React.useState(false);
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
        title="New Group"
        rightView={<HeaderRight />}
      />
      <ControllerTextInput
        control={control}
        name="subject"
        placeholder="Enter a subject"
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
      <Font14.W400>Pictures for icon</Font14.W400>
      <ImagePicker />
      <Button onPress={handleSubmit(onSubmit)}>Create</Button>
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
    marginBottom: sizes[8],
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
export default AddGroupScreen;
