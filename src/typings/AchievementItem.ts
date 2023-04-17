export type AchievementItem = {
  key?: CodeAward;
  title: string;
  id: string;
};

export type CodeAward =
  | 'board'
  | 'combiner'
  | 'beauty'
  | 'writer'
  | 'investigator';
