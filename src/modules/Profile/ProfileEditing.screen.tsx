import React from 'react';
import {useForm} from 'react-hook-form';
import {Image, StyleSheet, View} from 'react-native';
import {ScrollView, TouchableOpacity} from 'react-native-gesture-handler';

import {BoxImages} from '../../components/BoxButton/assets';
import Header from '../../components/Header';
import ScreenContainer from '../../components/ScreenContainer';
import useTheme from '../../Context/ThemeContext';
import {profileSettings1, profileSettings2} from '../../data/data';
import {useRules} from '../../hooks/useRules';
import type {ProfileScreenProps} from '../../navigators/types';
import {useAppDispatch, useAppSelector} from '../../redux/hooks';
import {
  QuestionsActions,
  QuestionsSelector,
} from '../../redux/slices/questionsSlice';
import {UserActions, UserSelector} from '../../redux/slices/userSlice';
import Service from '../../services/service/service';
import Button from '../../uikit/Button';
import PlusButton from '../../uikit/PlusButton';
import TagButton from '../../uikit/TagButton';
import TextInput, {ControllerTextInput} from '../../uikit/TextInput';
import {Font12} from '../../uikit/Typography/Font12';
import sizes from '../../utils/sizes';

const ProfileEditingScreen = ({
  navigation,
}: ProfileScreenProps<'ProfileEditingScreen'>) => {
  const disptach = useAppDispatch();
  const rules = useRules();
  const {palette} = useTheme();
  const dateOfBirth = useAppSelector(UserSelector.getDateOfBirth);
  const user = useAppSelector(UserSelector.getUser);
  const budget = useAppSelector(
    QuestionsSelector.getData('profileSettings.budget'),
  );
  const shop = useAppSelector(
    QuestionsSelector.getData('profileSettings.shop'),
  );
  const brandsLikes = useAppSelector(
    QuestionsSelector.getData('profileSettings.brandsLikes.0'),
  );
  const brandsDislikes = useAppSelector(
    QuestionsSelector.getData('profileSettings.brandsDislikes.0'),
  );
  const skinType = useAppSelector(
    QuestionsSelector.getData('profileSettings.skinType'),
  );
  const skinIssues = useAppSelector(
    QuestionsSelector.getData('profileSettings.skinIssues.0'),
  );
  const allergies = useAppSelector(
    QuestionsSelector.getData('profileSettings.allergies.0'),
  );
  const undertoneType = useAppSelector(
    QuestionsSelector.getData('profileSettings.undertoneType'),
  );

  const {
    control,
    handleSubmit,
    formState: {errors},
    setError,
  } = useForm({
    defaultValues: {
      email: user?.email,
      fullname: user?.fullName,
    },
  });

  const onSubmit = async ({
    email,
    fullname,
  }: {
    email: string;
    fullname: string;
  }) => {
    try {
      await Service.updatePropertyOfUser(user?.userID, {
        type: 'name',
        value: fullname,
      });
      disptach(UserActions.setFullName(fullname));
    } catch (e) {
      setError('fullname', {
        message: e.message,
      });
    }

    if (email === user?.email) {
      return;
    }
    try {
      await Service.updatePropertyOfUser(user?.userID, {
        type: 'email',
        value: email,
      });
      disptach(UserActions.setEmail(email));
    } catch (e) {
      setError('email', {
        message: e.message,
      });
    }
  };

  return (
    <ScreenContainer style={styles.con}>
      <Header
        title="Personal data"
        goBack={() => {
          navigation.goBack();
        }}
      />
      <ScrollView>
        <ControllerTextInput
          label="Full name"
          control={control}
          name="fullname"
          placeholder="Full name"
          errors={errors}
          outerStyle={{
            marginBottom: sizes[16],
            marginTop: sizes[16],
          }}
          iconRight="Edit"
          rules={{
            validate: (value: string) => {
              return value.trim() === '' ? 'Requeris' : undefined;
            },
          }}
        />
        <ControllerTextInput
          label="Email"
          control={control}
          name="email"
          placeholder="Email"
          errors={errors}
          outerStyle={{
            marginBottom: sizes[16],
          }}
          iconRight="Edit"
          rules={rules.email}
        />
        <TextInput
          onPress={() => {
            navigation.navigate('ProfileSettingsNavigator2', {
              screen: 'SelectDateOfBirthScreen',
              params: {
                withoutTextInput: true,
              },
            });
          }}
          enabled={false}
          label="Date of birth"
          placeholder="DD/MM/YYYY"
          outerStyle={{
            marginBottom: sizes[16],
          }}
          iconRight="Edit"
          value={dateOfBirth?.toLocaleDateString()}
        />
        <TextInput
          onPress={() => {
            navigation.navigate('ProfileSettingsNavigator2', {
              screen: 'SaveProfileSetting',
              params: {
                items: profileSettings1,
                ids: [1],
              },
            });
          }}
          value={budget?.title}
          enabled={false}
          label="Budget"
          outerStyle={{
            marginBottom: sizes[16],
          }}
          iconRight="Edit"
        />
        <TextInput
          onPress={() => {
            navigation.navigate('ProfileSettingsNavigator2', {
              screen: 'SaveProfileSetting',
              params: {
                items: profileSettings2,
                ids: [6],
              },
            });
          }}
          value={shop?.title}
          enabled={false}
          label="How do you want to shop?"
          outerStyle={{
            marginBottom: sizes[16],
          }}
          iconRight="Edit"
        />
        <Font12.W400 color="textLight">What brands do you like?</Font12.W400>
        <ScrollView
          horizontal
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: -sizes[8],
            marginTop: sizes[8],
            marginBottom: sizes[16],
          }}>
          {brandsLikes?.map(brand => (
            <View
              key={brand.id}
              style={[
                styles.viewBrand,
                {
                  borderColor: palette.border,
                },
              ]}>
              <Image
                source={BoxImages[brand.asset]}
                style={{
                  height: sizes[50],
                }}
                resizeMode="contain"
              />
            </View>
          ))}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProfileSettingsNavigator2', {
                screen: 'SaveProfileSetting',
                params: {
                  items: profileSettings2,
                  ids: [2, 3],
                },
              });
            }}
            style={[
              {
                borderColor: palette.border,
              },
              styles.viewBrand,
            ]}>
            <PlusButton disabled />
          </TouchableOpacity>
        </ScrollView>
        <Font12.W400 color="textLight">What brands don't you like?</Font12.W400>
        <ScrollView
          horizontal
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginHorizontal: -sizes[8],
            marginTop: sizes[8],
            marginBottom: sizes[16],
          }}>
          {brandsDislikes?.map(brand => (
            <View
              key={brand.id}
              style={[
                styles.viewBrand,
                {
                  borderColor: palette.border,
                },
              ]}>
              <Image
                source={BoxImages[brand.asset]}
                style={{
                  height: sizes[50],
                }}
                resizeMode="contain"
              />
            </View>
          ))}
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('ProfileSettingsNavigator2', {
                screen: 'SaveProfileSetting',
                params: {
                  items: profileSettings2,
                  ids: [4, 5],
                },
              });
            }}
            style={[
              {
                borderColor: palette.border,
              },
              styles.viewBrand,
            ]}>
            <PlusButton disabled />
          </TouchableOpacity>
        </ScrollView>
        <TextInput
          onPress={() => {
            navigation.navigate('ProfileSettingsNavigator2', {
              screen: 'SaveProfileSetting',
              params: {
                items: profileSettings1,
                ids: [2],
              },
            });
          }}
          value={skinType?.title}
          enabled={false}
          label="Skin type"
          outerStyle={{
            marginBottom: sizes[16],
          }}
          iconRight="Edit"
        />
        <Font12.W400 color="textLight">Skin issues</Font12.W400>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            marginHorizontal: -sizes[4],
            marginTop: sizes[8],
            marginBottom: sizes[16],
          }}
          horizontal>
          {skinIssues?.map(skinIssue => (
            <TagButton
              key={skinIssue.id}
              style={{
                marginHorizontal: sizes[4],
                marginVertical: sizes[8],
              }}
              title={skinIssue.title}
              onPress={() => {
                const newItems = skinIssues.filter(
                  item => item.id !== skinIssue.id,
                );
                Service.updatePropertyOfUser(user?.userID, {
                  type: 'skin_issue',
                  value: newItems.map(item => item.id.toString()),
                });

                disptach(QuestionsActions.removeSkinIssue(skinIssue));
              }}
              isRemove
            />
          ))}
          <PlusButton
            style={{
              marginHorizontal: sizes[4],
            }}
            onPress={() => {
              navigation.navigate('ProfileSettingsNavigator2', {
                screen: 'SaveProfileSetting',
                params: {
                  items: profileSettings1,
                  ids: [3],
                },
              });
            }}
          />
        </ScrollView>
        <Font12.W400 color="textLight">Allergy</Font12.W400>
        <ScrollView
          contentContainerStyle={{
            alignItems: 'center',
            marginHorizontal: -sizes[4],
            marginTop: sizes[8],
            marginBottom: sizes[16],
          }}
          horizontal>
          {allergies?.map(allergy => (
            <TagButton
              key={allergy.id}
              style={{
                marginHorizontal: sizes[4],
                marginVertical: sizes[8],
              }}
              title={allergy.title}
              onPress={() => {
                const newItems = allergies.filter(
                  item => item.id !== allergy.id,
                );
                Service.updatePropertyOfUser(user?.userID, {
                  type: 'allergy',
                  value: newItems.map(item => item.id.toString()),
                });
                disptach(QuestionsActions.removeAllergy(allergy));
              }}
            />
          ))}
          <PlusButton
            style={{
              marginHorizontal: sizes[4],
            }}
            onPress={() => {
              navigation.navigate('ProfileSettingsNavigator2', {
                screen: 'SaveProfileSetting',
                params: {
                  items: profileSettings1,
                  ids: [4],
                },
              });
            }}
          />
        </ScrollView>

        <TextInput
          onPress={() => {
            navigation.navigate('ProfileSettingsNavigator2', {
              screen: 'SaveProfileSetting',
              params: {
                items: profileSettings2,
                ids: [1],
              },
            });
          }}
          value={undertoneType?.title}
          enabled={false}
          label="Undertone type"
          outerStyle={{
            marginBottom: sizes[16],
          }}
          iconRight="Edit"
        />
        <Button onPress={handleSubmit(onSubmit)}>Save</Button>
      </ScrollView>
    </ScreenContainer>
  );
};

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
  viewBrand: {
    borderWidth: 1,
    borderRadius: sizes[4],
    marginHorizontal: sizes[8],
    paddingVertical: sizes[8],
    width: sizes[140],
    height: sizes[70],
    alignItems: 'center',
    justifyContent: 'center',
  },
});
export default ProfileEditingScreen;
