import React from 'react';
import type {NumberProp, SvgProps} from 'react-native-svg';

import Apple from './svg/apple.svg';
import ArrowBack from './svg/arrow-back.svg';
import ArrowDown from './svg/arrow-down.svg';
import ArrowRight from './svg/arrow-right.svg';
import Check from './svg/check.svg';
import Close from './svg/close.svg';
import CommunityFill from './svg/community-fill.svg';
import Community from './svg/community.svg';
import EditSquare from './svg/edit-square.svg';
import Edit from './svg/edit.svg';
import EyeClose from './svg/eye-close.svg';
import Eye from './svg/eye.svg';
import FaceIdFill from './svg/face-id-fill.svg';
import FaceId from './svg/face-id.svg';
import FillStar from './svg/fill-star.svg';
import Genie from './svg/genie.svg';
import Google from './svg/google.svg';
import Group from './svg/group.svg';
import HalfStar from './svg/half-star.svg';
import Hand from './svg/hand.svg';
import Instagram from './svg/instagram.svg';
import Lamp from './svg/lamp.svg';
import Like from './svg/like.svg';
import LoginGenie from './svg/login-genie.svg';
import Logo from './svg/logo.svg';
import Mail from './svg/mail.svg';
import Message from './svg/message.svg';
import Notif from './svg/notif.svg';
import Paperclip from './svg/paperclip.svg';
import Plus from './svg/plus.svg';
import Points from './svg/points.svg';
import ProfileFill from './svg/profile-fill.svg';
import Profile from './svg/profile.svg';
import QuestionsFill from './svg/questions-fill.svg';
import Questions from './svg/questions.svg';
import Refresh from './svg/refresh.svg';
import Replay from './svg/replay.svg';
import SearchFill from './svg/search-fill.svg';
import Search from './svg/search.svg';
import SelfieArea from './svg/selfie-area.svg';
import Send from './svg/send.svg';
import SignupGenie from './svg/signup-genie.svg';
import Star from './svg/star.svg';
import Tag from './svg/tag.svg';
import Trash from './svg/trash.svg';
import Triangle from './svg/triangle.svg';
import Web from './svg/web.svg';

const icons = {
  Apple,
  Eye,
  Paperclip,
  Send,
  Refresh,
  Notif,
  Hand,
  Tag,
  Web,
  Star,
  HalfStar,
  FillStar,
  Trash,
  Instagram,
  Mail,
  ArrowDown,
  EditSquare,
  Like,
  Group,
  Message,
  Points,
  Edit,
  ArrowRight,
  Logo,
  Genie,
  LoginGenie,
  SignupGenie,
  EyeClose,
  Google,
  Check,
  ArrowBack,
  Community,
  FaceId,
  Profile,
  Questions,
  Search,
  CommunityFill,
  FaceIdFill,
  ProfileFill,
  QuestionsFill,
  SearchFill,
  Plus,
  Close,
  SelfieArea,
  Triangle,
  Lamp,
  Replay,
};

export type IFigmaIcon = keyof typeof icons;

const hasStroke: IFigmaIcon[] = [];
const onlyStroke: IFigmaIcon[] = [
  'Check',
  'ArrowRight',
  'Plus',
  'Close',
  'Mail',
];

const getIcon = (name: IFigmaIcon) => {
  return icons[name] as React.FC<SvgProps>;
};

const getSizeSVG = (props: {
  size?: number;
  width?: NumberProp;
  height?: NumberProp;
}) => {
  const width = props.width ?? props.size;
  const height = props.height ?? props.size;

  return {
    width,
    height,
  };
};

export interface IDesignIconProps extends SvgProps {
  name: IFigmaIcon;
  size?: number;
}

const FigmaIcon = React.memo(
  ({
    name,
    fill,
    size,
    height,
    width,
    stroke: strokeProp,
    ...props
  }: IDesignIconProps) => {
    const I = getIcon(name);

    const sizes = getSizeSVG({
      height,
      width,
      size,
    });
    const stroke = hasStroke.includes(name) ? fill : strokeProp;
    const isOnlyStroke = onlyStroke.includes(name);

    return (
      <I
        fill={isOnlyStroke ? 'transparent' : fill}
        stroke={isOnlyStroke ? fill : stroke}
        strokeWidth={isOnlyStroke ? 2 : undefined}
        width={sizes.width}
        height={sizes.height}
        {...props}
      />
    );
  },
);

FigmaIcon.displayName = 'FigmaIcon';
export default FigmaIcon;
