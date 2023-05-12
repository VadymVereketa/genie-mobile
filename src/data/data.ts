import type {QuestionItem, QuestionType} from '../typings/Category';

const budgets: QuestionItem[] = [
  {
    id: 1,
    title: '$15 and under',
  },
  {
    id: 2,
    title: '$15 - $25',
  },
  {
    id: 3,
    title: '$25 - $50',
  },
  {
    id: 4,
    title: '$50+',
  },
  {
    id: 5,
    title: 'No preference',
  },
];

const allergies: QuestionItem[] = [
  {
    id: 1,
    title: 'Comedogenic',

    asset: 'Comedogenic',
  },
  {
    id: 2,
    title: 'Fragrance',

    asset: 'Fragrance',
  },
  {
    id: 3,
    title: 'Parabens',

    asset: 'Parabens',
  },
  {
    id: 4,
    title: 'Phthalates',

    asset: 'Phthalates',
  },
  {
    id: 5,
    title: 'Sulfates and Synthetic fragrances',

    asset: 'Sulfates',
  },
  {
    id: 6,
    title: 'I don’t Know',
  },
];

const shops: QuestionItem[] = [
  {
    id: 1,
    title: 'Bestseller',

    asset: 'Bestseller',
  },
  {
    id: 2,
    title: 'Top-Rated',

    asset: 'TopRated',
  },
  {
    id: 3,
    title: 'Now Trending',

    asset: 'NowTrending',
  },
  {
    id: 4,
    title: 'Indie brands',

    asset: 'Indiebrands',
  },
];

const skinIssues: QuestionItem[] = [
  {
    id: 1,
    title: 'Acne',

    asset: 'Acne',
  },
  {
    id: 2,
    title: 'Aging',

    asset: 'Aging',
  },
  {
    id: 3,
    title: 'Freckles',

    asset: 'Freckles',
  },
  {
    id: 4,
    title: 'Rosacea',

    asset: 'Rosacea',
  },
  {
    id: 5,
    title: 'Hydration',

    asset: 'Hydration',
  },
  {
    id: 6,
    title: 'Swelling',

    asset: 'Swelling',
  },

  {
    id: 7,
    title: 'Oil control/Pores',

    asset: 'OilControl',
  },

  {
    id: 8,
    title: 'Pigmentation',

    asset: 'Pigmentation',
  },

  {
    id: 9,
    title: 'Redness',

    asset: 'Redness',
  },

  {
    id: 10,
    title: 'Facial itching',

    asset: 'FacialItching',
  },

  {
    id: 11,
    title: 'I don’t Know',
  },
];

const skinTypes: QuestionItem[] = [
  {
    id: 1,
    title: 'Dry',
    asset: 'Dry',
  },
  {
    id: 2,
    title: 'Oily',
    asset: 'Oily',
  },
  {
    id: 3,
    title: 'Combination',
    asset: 'Combination',
  },
  {
    id: 4,
    title: 'Sensitive',
    asset: 'Sensitive',
  },
  {
    id: 5,
    title: 'Mature',
    asset: 'Mature',
  },
  {
    id: 6,
    title: 'Normal',
  },
];

const brands: QuestionItem[] = [
  {
    id: 1,
    asset: 'Loreal',
    name: 'Loreal',
  },
  {
    id: 2,
    asset: 'Chanel',
    name: 'Chanel',
  },
  {
    id: 3,
    asset: 'Dior',
    name: 'Dior',
  },
  {
    id: 4,
    asset: 'Mac',
    name: 'Mac',
  },
  {
    id: 5,
    asset: 'Ysl',
    name: 'Ysl',
  },
  {
    id: 6,
    asset: 'Maxfactor',
    name: 'Maxfactor',
  },
  {
    id: 7,
    asset: 'BobbiBrown',
    name: 'Bobbi Brown',
  },
  {
    id: 8,
    asset: 'Givenchy',
    name: 'Givenchy',
  },
];

const undertoneTypes: QuestionItem[] = [
  {
    id: 1,
    title: 'Warm',

    asset: 'Warm',
  },
  {
    id: 2,
    title: 'Cool',

    asset: 'Cool',
  },
  {
    id: 3,
    title: 'Neutral',

    asset: 'Neutral',
  },
];

const whyLikes: QuestionItem[] = [
  {
    id: 1,
    title: 'Calming',
  },
  {
    id: 2,
    title: 'Hydration',
  },
  {
    id: 3,
    title: 'Inexpensive',
  },
  {
    id: 4,
    title: 'Price',
  },
];

const whyDislikes: QuestionItem[] = [
  {
    id: 1,
    title: 'Not Effective',
  },
  {
    id: 2,
    title: 'Oily',
  },
  {
    id: 3,
    title: 'Acne',
  },
  {
    id: 4,
    title: 'Price',
  },
];

const DATA = {
  brands,
  skinTypes,
  skinIssues,
  shops,
  allergies,
  undertoneTypes,
  budgets,
};

const profileSettings1: QuestionType[] = [
  {
    id: 1,
    options: budgets,
    title: 'What is your budget?',
    subtitle: 'Select one of the below',
    path: 'profileSettings.budget',
  },
  {
    id: 2,
    options: skinTypes,
    title: 'What is your skin type?',
    subtitle: 'Select one of the below',
    path: 'profileSettings.skinType',
  },
  {
    id: 3,
    options: skinIssues,
    title: 'Do you have any skin issues?',
    subtitle: 'Select one of the below',
    path: 'profileSettings.skinIssues',
  },
  {
    id: 4,
    options: allergies,
    title: 'Do you avoid any ingredients while shopping (allergies)?',
    subtitle: 'Select all that apply',
    path: 'profileSettings.allergies',
  },
];
const profileSettings2: QuestionType[] = [
  {
    id: 1,
    options: undertoneTypes,
    title: "What's your undertone type?",
    subtitle: 'Select one of the below',
    path: 'profileSettings.undertoneType',
  },
  {
    id: 2,
    options: brands,
    title: 'What brands do you like?',
    subtitle: 'Select all that apply',
    path: 'profileSettings.brandsLikes',
    isSearchable: true,
  },
  {
    id: 3,
    options: whyLikes,
    title: 'Why do you like it?',
    subtitle: 'Select all that apply',
    path: 'profileSettings.whyLikes',
  },
  {
    id: 4,
    options: brands,
    title: "What brands don't you like?",
    subtitle: 'Select all that apply',
    path: 'profileSettings.brandsDislikes',
    isSearchable: true,
  },
  {
    id: 5,
    options: whyDislikes,
    title: "Why don't you like it?",
    subtitle: 'Select all that apply',
    path: 'profileSettings.whyDislikes',
  },
  {
    id: 6,
    options: shops,
    title: 'How do you want to shop?',
    subtitle: 'Select one of the below',
    path: 'profileSettings.shop',
  },
];
export {profileSettings1, profileSettings2};
export default DATA;
