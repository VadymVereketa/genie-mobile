import type {BoxIconsType, BoxImagesType} from '../components/BoxButton/assets';
import type {LeavesQuestionsState} from '../redux/slices/questionsSlice';
import {
  QuestionsActions,
  QuestionsActionsType,
  QuestionsSelector,
} from '../redux/slices/questionsSlice';

export type Category = {
  id: number;
  title: string;
  asset: BoxIconsType | BoxImagesType;
  backgroundColor?: string;
  parentId?: number;
};

export type MainCategory = Category & {
  subCategories: SubCategory[];
};

export type SubCategory = Category & {
  options: ItemCategory[];
};
export type ItemCategory = Category & {
  options: QuestionType[];
};

export type QuestionItem = Omit<
  Category,
  'backgroundColor' | 'asset' | 'parentId'
> & {
  asset?: BoxIconsType | BoxImagesType;
};

export type QuestionType = {
  id: number;
  title: string;
  subtitle: string;
  options: QuestionItem[];

  path: LeavesQuestionsState;
  parentId?: number;
};
