import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import IconButton from '../uikit/IconButton';
import {Font14} from '../uikit/Typography/Font14';
import sizes from '../utils/sizes';
import useTheme from '../Context/ThemeContext';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import {useAppNavigation} from '../navigators/hooks';

type Props = {
  isBack?: boolean;
  goBack?: () => void;
  currentStep?: number;
  length?: number;
  title?: string;
  rightView?: React.ReactNode;
};
const Header = ({
  goBack,
  currentStep = -1,
  length,
  rightView,
  title = 'Profile setting',
  isBack = false,
}: Props) => {
  const translateX = useSharedValue(0);
  const navigation = useAppNavigation();

  const {palette} = useTheme();

  useEffect(() => {
    if (currentStep === -1) {
      return;
    }

    if (length === undefined) {
      return;
    }

    translateX.value = withTiming(
      -(sizes[8] * length + sizes[4] * (length - 1)) +
        currentStep * sizes[8] +
        (currentStep - 1) * sizes[4],
    );
  }, [currentStep]);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{translateX: translateX.value}],
    };
  }, []);

  return (
    <View
      style={[
        styles.con,
        {
          borderBottomColor: palette.line,
          backgroundColor: 'transparent',
        },
      ]}>
      <IconButton
        onPress={
          isBack
            ? () => {
                navigation.goBack();
              }
            : goBack
        }
        iconName="ArrowBack"
        size={sizes[16]}
        fill={goBack || isBack ? palette.text : 'transparent'}
      />
      <Font14.W600 style={styles.title}>{title}</Font14.W600>
      {currentStep !== -1 && length !== undefined && length !== 1 && (
        <View style={styles.view}>
          {Array.from({length: length || 0}).map((_, index) => (
            <View
              key={index}
              style={[
                styles.circle,
                {
                  backgroundColor: palette.primaryLight,
                  marginLeft: index === 0 ? 0 : sizes[2],
                  marginRight: index === length - 1 ? 0 : sizes[2],
                },
              ]}
            />
          ))}
          <Animated.View
            style={[
              {
                width: sizes[8] * length + sizes[4] * (length - 1),
                height: sizes[8],
                borderRadius: sizes[4],
                backgroundColor: palette.primary,
                marginHorizontal: sizes[2],
                position: 'absolute',
                left: -sizes[2],
              },
              style,
            ]}
          />
        </View>
      )}
      {rightView}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  con: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    alignItems: 'center',
    borderBottomWidth: 1,
    paddingBottom: sizes[12],
  },
  title: {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    height: '100%',
    lineHeight: sizes[16],
    top: 0,
    zIndex: -1,
  },
  view: {
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: sizes[4],
  },
  circle: {
    width: sizes[8],
    height: sizes[8],
    borderRadius: sizes[4],
    marginHorizontal: sizes[2],
  },
});
