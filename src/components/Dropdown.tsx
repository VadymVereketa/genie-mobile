import React from 'react';
import {Modal, StyleSheet, View} from 'react-native';
import {
  GestureHandlerRootView,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native-gesture-handler';

import FigmaIcon from './FigmaIcon/FigmaIcon';
import useTheme from '../Context/ThemeContext';
import {Font14} from '../uikit/Typography/Font14';
import {responsiveWidth} from '../utils/responsive-dimensions';
import sizes from '../utils/sizes';

export type DropdownOption = {
  id: string;
  title: string;
};

type Props = {
  options: DropdownOption[];
  value: DropdownOption | null;
  onChange: (value: DropdownOption) => void;
  point: {x: number; y: number};
  visible: boolean;
  onClose: () => void;
  withoutSelected?: boolean;
};

export const usePointDropdown = () => {
  const [point, setPoint] = React.useState({x: 0, y: 0});

  const onLayout = React.useCallback(e => {
    e.target.measure((x, y, width, height, pageX, pageY) => {
      setPoint({x: pageX, y: pageY + height});
    });
  }, []);

  return [point, onLayout] as const;
};

const Dropdown = ({
  onChange,
  options,
  point,
  value,
  onClose,
  visible,
  withoutSelected = false,
}: Props) => {
  const {palette} = useTheme();
  const [widthView, setWidthView] = React.useState(0);

  if (!visible) {
    return null;
  }

  const isLeft = widthView + point.x < responsiveWidth(100);
  return (
    <Modal
      visible
      style={{
        flexGrow: 1,
      }}
      transparent>
      <GestureHandlerRootView
        style={{
          flexGrow: 1,
        }}>
        <TouchableWithoutFeedback
          onPress={onClose}
          style={{
            flexGrow: 1,
          }}
          containerStyle={{
            flexGrow: 1,
            backgroundColor: '#11111111',
            ...StyleSheet.absoluteFillObject,
          }}>
          <View
            onLayout={e => {
              setWidthView(e.nativeEvent.layout.width);
            }}
            style={{
              backgroundColor: palette.background,
              borderRadius: sizes[8],
              position: 'absolute',
              top: point.y,
              left: isLeft ? point.x : undefined,
              right: isLeft ? undefined : sizes[16],
              padding: sizes[8],
              zIndex: 100,
            }}>
            {options.map((item, index) => {
              const isSelected = value?.id === item.id;

              return (
                <TouchableOpacity
                  key={item.id}
                  onPress={() => {
                    onChange(item);
                    onClose();
                  }}
                  style={{
                    paddingVertical: sizes[8],
                    justifyContent: 'center',
                    marginHorizontal: sizes[8],
                    borderBottomWidth: index !== options.length - 1 ? 1 : 0,
                    borderBottomColor: palette.line,
                    paddingLeft: withoutSelected ? 0 : sizes[24],
                  }}>
                  {isSelected && (
                    <FigmaIcon
                      name="Check"
                      size={sizes[14]}
                      strokeWidth={1}
                      fill={palette.text}
                      style={{
                        position: 'absolute',
                      }}
                    />
                  )}

                  <Font14.W400>{item.title}</Font14.W400>
                </TouchableOpacity>
              );
            })}
          </View>
        </TouchableWithoutFeedback>
      </GestureHandlerRootView>
    </Modal>
  );
};

export default Dropdown;
