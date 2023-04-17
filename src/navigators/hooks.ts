import {useNavigation} from '@react-navigation/native';
import {GeneralStartNavigatorProps} from './types';

export const useAppNavigation = () => {
  return useNavigation<GeneralStartNavigatorProps['navigation']>();
};
