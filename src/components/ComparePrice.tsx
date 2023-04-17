import React from 'react';
import {Image, Modal, StyleSheet, View} from 'react-native';
import {TouchableWithoutFeedback} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

import {Amazon, Notino} from '../assets/defaultImg';
import useTheme from '../Context/ThemeContext';
import Button from '../uikit/Button';
import IconButton from '../uikit/IconButton';
import {Font14} from '../uikit/Typography/Font14';
import sizes from '../utils/sizes';

type Props = {
  isShow: boolean;
  onClose?: () => void;
};
const ComparePrice = ({isShow, onClose}: Props) => {
  const {palette} = useTheme();
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
          padding: sizes[20],
          borderRadius: sizes[8],
          backgroundColor: palette.background,
          position: 'absolute',
          bottom: insets.bottom + sizes[20],
          right: sizes[16],
          left: sizes[16],
        }}>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginBottom: sizes[16],
          }}>
          <Font14.W600>Compare price</Font14.W600>
          <IconButton
            onPress={onClose}
            iconName="Close"
            size={sizes[16]}
            fill={palette.text}
          />
        </View>
        {[Amazon, Notino].map((img, i) => {
          return (
            <View
              key={i}
              style={{
                borderTopWidth: 1,
                borderColor: palette.line,
                flexDirection: 'row',
                alignItems: 'center',
                paddingVertical: sizes[8],
                justifyContent: 'space-between',
              }}>
              <Image source={img} />
              <Font14.W600>$62.00</Font14.W600>
              <Button
                containerStyle={{
                  width: sizes[100],
                }}>
                Buy
              </Button>
            </View>
          );
        })}
      </View>
    </Modal>
  );
};

export default ComparePrice;
