import React from 'react';

import type {IFigmaIcon} from '../../../components/FigmaIcon/FigmaIcon';
import FigmaIcon from '../../../components/FigmaIcon/FigmaIcon';
import useTheme from '../../../Context/ThemeContext';
import Social from '../../../typings/Social';
import Button from '../../../uikit/Button';
import {Font14} from '../../../uikit/Typography/Font14';
import sizes from '../../../utils/sizes';

type Props = Parameters<typeof Button>[0] & {
  social: Social;
};

const socialInfo = (social: Social) => {
  switch (social) {
    case Social.Google:
      return {
        icon: 'Google',
        //text: 'Continue with Google',
      };
    case Social.Apple:
      return {
        icon: 'Apple',
        //text: 'Continue with Google',
      };
    default:
      return {
        icon: 'google',
        text: '#db4437',
      };
  }
};
const SocialButton = ({social, ...props}: Props) => {
  const {palette} = useTheme();

  const info = socialInfo(social);
  return (
    <Button
      {...props}
      style={{
        borderColor: palette.border,
        backgroundColor: palette.background,
        flexDirection: 'row',
      }}>
      <FigmaIcon name={info.icon as IFigmaIcon} size={sizes[24]} />
      {/* <Font14.W400>{'  ' + info.text}</Font14.W400> */}
    </Button>
  );
};

export default SocialButton;
