import React from 'react';
import {GenericTouchableProps} from 'react-native-gesture-handler/lib/typescript/components/touchables/GenericTouchable';
import {TouchableOpacityProps} from 'react-native/types';
import useTheme from '../../Context/ThemeContext';
import {TouchableOpacity} from 'react-native-gesture-handler';
import sizes from '../../utils/sizes';
import CheckBox from '../../uikit/CheckBox';
import {responsiveWidth} from '../../utils/responsive-dimensions';

export type BaseBoxButtonProps = TouchableOpacityProps &
  GenericTouchableProps & {
    children?: React.ReactNode | string;
    isActive?: boolean;
    isCheck?: boolean;
  };

const width = responsiveWidth(50) - sizes[24];
const padding = sizes[12];

const BaseBoxButton = ({
  isActive = false,
  isCheck = false,
  children,
  style,
  ...props
}: BaseBoxButtonProps) => {
  const {palette} = useTheme();

  return (
    <TouchableOpacity
      {...props}
      style={[
        {
          padding: padding,
          borderRadius: padding,
          alignItems: 'center',
          justifyContent: 'center',
          borderWidth: 1,
          borderColor: isActive ? palette.primaryExtraLight : palette.border,
          height: width,
          width: width,
          backgroundColor: isActive
            ? palette.primaryExtraLight
            : palette.background,
        },
        style,
      ]}>
      {isCheck && (
        <CheckBox
          disabled
          containerStyle={{
            position: 'absolute',
            right: padding,
            top: padding,
          }}
          style={{
            backgroundColor: palette.background,
          }}
          checked={isActive}
        />
      )}
      {children}
    </TouchableOpacity>
  );
};

export default BaseBoxButton;
