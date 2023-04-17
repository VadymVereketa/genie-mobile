import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import useTheme from '../../../Context/ThemeContext';
import {Font16} from '../../../uikit/Typography/Font16';
import {responsiveWidth} from '../../../utils/responsive-dimensions';
import sizes from '../../../utils/sizes';
import Happy from '../assets/happy.svg';
import Normal from '../assets/normal.svg';
import Sad from '../assets/sad.svg';

type Props = {
  isShow: boolean;
  onClose?: () => void;
};

const Recomendations = ({isShow, onClose}: Props) => {
  const {palette} = useTheme();
  const [indexPress, setIndexPress] = React.useState<number>(-1);
  const [isAnswered, setIsAnswered] = React.useState<boolean>(false);
  const insets = useSafeAreaInsets();

  return (
    <Modal
      style={{
        flexGrow: 1,
        justifyContent: 'flex-end',
      }}
      visible={isShow}
      onRequestClose={onClose}
      transparent>
      <TouchableWithoutFeedback
        onPress={onClose}
        containerStyle={{
          flexGrow: 1,
          ...StyleSheet.absoluteFillObject,
          zIndex: -1,
        }}
        style={{
          backgroundColor: '#03052B43',
          flexGrow: 1,
          justifyContent: 'flex-end',
        }}></TouchableWithoutFeedback>
      <View
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          backgroundColor: '#03052B',
          borderTopLeftRadius: sizes[20],
          borderTopRightRadius: sizes[20],
          paddingBottom: insets.bottom,
        }}>
        <View
          style={{
            height: sizes[5],
            borderRadius: sizes[3],
            flexGrow: 1,
            backgroundColor: palette.background,
            marginHorizontal: responsiveWidth(30),
            marginTop: sizes[12],
            marginBottom: sizes[16],
          }}
        />
        {isAnswered ? (
          <Font16.W600 textAlign="center" color="background">
            Thank you for your feedback!
          </Font16.W600>
        ) : (
          <React.Fragment>
            <Font16.W600 textAlign="center" color="background">
              How was the recomendations?
            </Font16.W600>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: sizes[24],
              }}>
              {[Sad, Normal, Happy].map((Icon, index) => {
                return (
                  <Icon
                    onPress={() => setIsAnswered(true)}
                    onPressIn={() => setIndexPress(index)}
                    onPressOut={() => setIndexPress(-1)}
                    style={{
                      marginHorizontal: sizes[16],
                    }}
                    key={index}
                    fill={
                      index === indexPress ? palette.primaryLight : palette.text
                    }
                  />
                );
              })}
            </View>
          </React.Fragment>
        )}
      </View>
    </Modal>
  );
};

export default Recomendations;
