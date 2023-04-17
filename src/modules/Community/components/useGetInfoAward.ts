import type {CodeAward} from '../../../typings/AchievementItem';
import Beauty from '../assets/beauty.svg';
import Board from '../assets/board.svg';
import Combiner from '../assets/combiner.svg';
import Empty from '../assets/empty.svg';
import Investigator from '../assets/investigator.svg';
import Writer from '../assets/writer.svg';

export const useGetInfoAward = () => {
  return (code: CodeAward) => {
    switch (code) {
      case 'board':
        return {
          bg: '#FCF0F0',
          circle: '#3048EA33',
          innerBg: '#FCF0F0',
          icon: Board,
        };

      case 'combiner':
        return {
          bg: '#EFF5FF',
          circle: '#3048EA33',
          innerBg: '#EFF5FF',
          icon: Combiner,
        };
      case 'beauty':
        return {
          bg: '#3048EA',
          circle: '#FFFEFE33',
          innerBg: '#3048EA',
          icon: Beauty,
        };
      case 'writer':
        return {
          bg: '#EFF5FF',
          circle: '#3048EA33',
          innerBg: '#EFF5FF',
          icon: Writer,
        };
      case 'investigator':
        return {
          bg: '#FCF0F0',
          circle: '#3048EA33',
          innerBg: '#FCF0F0',
          icon: Investigator,
        };

      default:
        return {
          bg: '#F6F8FC',
          circle: '#3048EA33',
          innerBg: '#F6F8FC',
          icon: Empty,
        };
    }
  };
};
