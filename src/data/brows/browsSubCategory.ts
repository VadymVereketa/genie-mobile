import type {ItemCategory, SubCategory} from '../../typings/Category';

const mascara: ItemCategory = {
  id: 5,
  title: 'Eyebrow Pencils',
  asset: 'EyebrowPencils',
  options: [
    {
      id: 1,
      title: 'What kind of look are you going for?',
      subtitle: 'Select one of the below',
      path: 'brows.mascara.kindOfLook',
      options: [
        {
          id: 1,
          title: 'Dark',
          asset: 'MascaraDark',
        },
        {
          id: 2,
          title: 'Natural',
          asset: 'MascaraNatural',
        },
        {
          id: 2,
          title: 'Transparent',
          asset: 'MascaraTransparent',
        },
        {
          id: 6,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 2,
      title: 'Formula should be',
      subtitle: 'Select one of the below',
      path: 'brows.mascara.formula',
      options: [
        {
          id: 1,
          title: 'Smudge proof',
          asset: 'SmudgeProof',
        },
        {
          id: 2,
          title: 'Waterproof',
          asset: 'Waterproof',
        },
        {
          id: 3,
          title: 'Water resistant',
          asset: 'WaterResistant',
        },
        {
          id: 3,
          title: 'Long lasting',
          asset: 'LongLasting',
        },
        {
          id: 4,
          title: 'Show me everything',
        },
      ],
    },
  ],
};

const pomades: ItemCategory = {
  id: 2,
  title: 'Eyebrow gel',
  asset: 'EyebrowGel',
  options: [
    {
      id: 2,
      title: 'Formula should be',
      subtitle: 'Select one of the below',
      path: 'brows.pomades.formula',
      options: [
        {
          id: 1,
          title: 'Smudge proof',
          asset: 'SmudgeProof',
        },
        {
          id: 2,
          title: 'Waterproof',
          asset: 'Waterproof',
        },
        {
          id: 3,
          title: 'Water resistant',
          asset: 'WaterResistant',
        },
        {
          id: 4,
          title: 'Wax',
          asset: 'UnderEyeCorrector',
        },
        {
          id: 5,
          title: 'Long lasting',
          asset: 'LongLasting',
        },
        {
          id: 6,
          title: 'Show me everything',
        },
      ],
    },
  ],
};

const pencils: ItemCategory = {
  id: 3,
  title: 'Eyebrow Pomades',
  asset: 'UnderEyeCorrector',
  options: [
    {
      id: 2,
      title: 'Formula should be',
      subtitle: 'Select one of the below',
      path: 'brows.pencils.formula',
      options: [
        {
          id: 1,
          title: 'Smudge proof',
          asset: 'SmudgeProof',
        },
        {
          id: 2,
          title: 'Waterproof',
          asset: 'Waterproof',
        },
        {
          id: 3,
          title: 'Water resistant',
          asset: 'WaterResistant',
        },
        {
          id: 5,
          title: 'Long lasting',
          asset: 'LongLasting',
        },
        {
          id: 6,
          title: 'Show me everything',
        },
      ],
    },
  ],
};

export const browsSubCategory: SubCategory = {
  id: 2,
  title: 'Brows',
  asset: 'Brows',
  backgroundColor: '#FCF0F0',
  options: [mascara, pomades, pencils],
};
