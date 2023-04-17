import React from 'react';
import Button from '../../../uikit/Button';
import Social from '../../../typings/Social';
import useTheme from '../../../Context/ThemeContext';
import FigmaIcon, {IFigmaIcon} from '../../../components/FigmaIcon/FigmaIcon';
import sizes from '../../../utils/sizes';
import {Font14} from '../../../uikit/Typography/Font14';

type Props = Parameters<typeof Button>[0] & {
  social: Social;
};

const socialInfo = (social: Social) => {
  switch (social) {
    case Social.Google:
      return {
        icon: 'Google',
        text: 'Continue with Google',
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
      <Font14.W400>{'  ' + info.text}</Font14.W400>
    </Button>
  );
};

export default SocialButton;
