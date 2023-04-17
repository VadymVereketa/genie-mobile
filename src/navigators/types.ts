import {CompositeScreenProps} from '@react-navigation/native';
import {AuthNavigatorParamList} from './Auth.navigator';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootNavigatorParamList} from './Root.navigator';
import {ProfileSettingsNavigatorParamList} from './ProfileSettings.navigator';
import {TabNavigatorParamList} from './Tab.navigator';
import {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import {CategoryNavigatorParamList} from './Category.navigator';
import {ProfileNavigatorParamList} from './Profile.navigator';
import {SelfieNavigatorParamList} from './Selfie.navigator';
import {CommunityNavigatorParamList} from './Community.navigator';
import {SearchNavigatorParamList} from './Search.navigator';
import {QuestionsNavigatorParamList} from './Questions.navigator';

export type GeneralStartNavigatorProps =
  NativeStackScreenProps<RootNavigatorParamList>;

export type RootStackScreenProps<T extends keyof RootNavigatorParamList> =
  NativeStackScreenProps<RootNavigatorParamList, T>;

export type AuthScreenProps<T extends keyof AuthNavigatorParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<AuthNavigatorParamList, T>,
    RootStackScreenProps<keyof RootNavigatorParamList>
  >;

export type ProfileSettingsScreenProps<
  T extends keyof ProfileSettingsNavigatorParamList,
> = CompositeScreenProps<
  NativeStackScreenProps<ProfileSettingsNavigatorParamList, T>,
  RootStackScreenProps<keyof RootNavigatorParamList>
>;

export type TabScreenProps<T extends keyof TabNavigatorParamList> =
  CompositeScreenProps<
    BottomTabScreenProps<TabNavigatorParamList, T>,
    RootStackScreenProps<keyof RootNavigatorParamList>
  >;

export type CategoryScreenProps<T extends keyof CategoryNavigatorParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<CategoryNavigatorParamList, T>,
    TabScreenProps<'CategoryNavigator'>
  >;

export type ProfileScreenProps<T extends keyof ProfileNavigatorParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<ProfileNavigatorParamList, T>,
    TabScreenProps<'ProfileNavigator'>
  >;

/* export type CategoryScreenProps2<T extends keyof CategoryNavigatorParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<CategoryNavigatorParamList, T>,
    BottomTabScreenProps<TabNavigatorParamList>
  >; */

export type SelfieScreenProps<T extends keyof SelfieNavigatorParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<SelfieNavigatorParamList, T>,
    RootStackScreenProps<keyof RootNavigatorParamList>
  >;

export type CommunityScreenProps<T extends keyof CommunityNavigatorParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<CommunityNavigatorParamList, T>,
    TabScreenProps<'CommunityNavigator'>
  >;

export type SearchScreenProps<T extends keyof SearchNavigatorParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<SearchNavigatorParamList, T>,
    TabScreenProps<'SearchNavigator'>
  >;

export type QuestionsScreenProps<T extends keyof QuestionsNavigatorParamList> =
  CompositeScreenProps<
    NativeStackScreenProps<QuestionsNavigatorParamList, T>,
    TabScreenProps<'QuestionsNavigator'>
  >;
declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootNavigatorParamList {}
  }
}
