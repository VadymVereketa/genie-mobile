import type {ItemCategory, SubCategory} from '../../typings/Category';

const eyelinerItem: ItemCategory = {
  id: 1,
  title: 'Eyeliner',
  asset: 'Eyeliner',
  options: [
    {
      id: 1,
      title: 'Formula should be',
      subtitle: 'Select one of the below',
      path: 'eyes.eyeliner.formula',
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
          title: 'Crease resistant',
          asset: 'CreaseResistant',
        },
        {
          id: 4,
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
    {
      id: 2,
      title: 'What kind of look are you going for?',
      subtitle: 'Select one of the below',
      path: 'eyes.eyeliner.kindOfLook',

      options: [
        {
          id: 1,
          title: 'Black',
          asset: 'Black',
        },
        {
          id: 2,
          title: 'Brown',
          asset: 'Brown',
        },
        {
          id: 3,
          title: 'White',
          asset: 'White',
        },
        {
          id: 4,
          title: 'Colorful',
          asset: 'Colorful',
        },
      ],
    },
    {
      id: 4,
      title: 'Formula Preference',
      subtitle: 'Select one of the below',
      path: 'eyes.eyeliner.formulation',
      options: [
        {
          id: 1,
          title: 'Liquid',
          asset: 'Eyeliner',
        },
        {
          id: 2,
          title: 'Pencil',
          asset: 'EyebrowPencils',
        },
        {
          id: 3,
          title: 'Gel',
          asset: 'UnderEyeCorrector',
        },
        {
          id: 4,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 5,
      title: 'What type of eyelids do you have?',
      subtitle: 'Select one of the below',
      path: 'eyes.eyeliner.eyelids',

      options: [
        {
          id: 1,
          title: 'Monolid',
          asset: 'Monolid',
        },
        {
          id: 2,
          title: 'Hooded eyes',
          asset: 'HoodedEyes',
        },
        {
          id: 3,
          title: 'Double eyelid',
          asset: 'DoubleEyelid',
        },
      ],
    },
  ],
};

const eyeshadowItem: ItemCategory = {
  id: 2,
  title: 'Eyeshadow palette',
  asset: 'EyePalettes',
  options: [
    {
      id: 1,
      title: 'Formula should be',
      subtitle: 'Select one of the below',
      path: 'eyes.eyeshadow.formula',
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
          title: 'Crease resistant',
          asset: 'CreaseResistant',
        },
        {
          id: 4,
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
    {
      id: 2,
      title: 'What kind of look are you going for?',
      subtitle: 'Select one of the below',
      path: 'eyes.eyeshadow.kindOfLook',

      options: [
        {
          id: 1,
          title: 'Very natural',
          asset: 'VeryNatural',
        },
        {
          id: 2,
          title: 'Some glam',
          asset: 'SomeGlam',
        },
        {
          id: 3,
          title: 'Full glam',
          asset: 'FullGlam',
        },
        {
          id: 4,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 3,
      title: 'What colors are you interested in?',
      subtitle: 'Select one of the below',
      path: 'eyes.eyeshadow.color',
      options: [
        {
          id: 1,
          title: 'Warm toned neutrals',
          asset: 'WarmTonedNeutrals',
        },
        {
          id: 2,
          title: 'Cool toned neutrals',
          asset: 'CoolTonedNeutrals',
        },
        {
          id: 3,
          title: 'Bright colors',
          asset: 'BrightColors',
        },
        {
          id: 4,
          title: 'Pinks',
          asset: 'Pinks',
        },
        {
          id: 5,
          title: 'Oranges',
          asset: 'Oranges',
        },
        {
          id: 6,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 4,
      title: 'Preference on formulation',
      subtitle: 'Select one of the below',
      path: 'eyes.eyeshadow.formulation',
      options: [
        {
          id: 1,
          title: 'Liquid',
          asset: 'Liquid',
        },
        {
          id: 2,
          title: 'Cream',
          asset: 'Cream',
        },
        {
          id: 3,
          title: 'Powder',
          asset: 'Powder',
        },
        {
          id: 4,
          title: 'Show me everything',
        },
      ],
    },
  ],
};

const mascaraItem: ItemCategory = {
  id: 3,
  title: 'Mascara',
  asset: 'Mascara',
  options: [
    {
      id: 1,
      title: 'Formula should be',
      subtitle: 'Select one of the below',
      path: 'eyes.mascara.formula',
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
          title: 'Crease resistant',
          asset: 'CreaseResistant',
        },
        {
          id: 4,
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
    {
      id: 2,
      title: 'What color do you prefer?',
      subtitle: 'Select one of the below',
      path: 'eyes.mascara.color',

      options: [
        {
          id: 1,
          title: 'Black',
          asset: 'MascaraBlack',
        },
        {
          id: 2,
          title: 'Brown',
          asset: 'MascaraBrown',
        },
        {
          id: 3,
          title: 'WhitBLue',
          asset: 'MascaraBlue',
        },
        {
          id: 4,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 3,
      title: 'Type of mascara wand',
      subtitle: 'Select one of the below',
      path: 'eyes.mascara.type',

      options: [
        {
          id: 1,
          title: 'Curved',
          asset: 'Curved',
        },
        {
          id: 2,
          title: 'Thickening',
          asset: 'Thickening',
        },
        {
          id: 3,
          title: 'Cone taper',
          asset: 'ConeTaper',
        },
        {
          id: 4,
          title: 'Super volume',
          asset: 'SuperVolume',
        },
        {
          id: 5,
          title: 'Natural',
          asset: 'Natural',
        },
        {
          id: 6,
          title: 'Separation',
          asset: 'Separation',
        },
      ],
    },
  ],
};

const underEyeCorrectorItem: ItemCategory = {
  id: 4,
  title: 'Under Eye corrector',
  asset: 'UnderEyeCorrector',
  options: [
    {
      id: 1,
      title: 'Formula Preference',
      subtitle: 'Select one of the below',
      path: 'eyes.underEyeCorrector.formula',
      options: [
        {
          id: 1,
          title: 'Liquid',
          asset: 'Liquid',
        },
        {
          id: 2,
          title: 'Cream',
          asset: 'Cream',
        },
        {
          id: 3,
          title: 'Powder',
          asset: 'Powder',
        },
        {
          id: 4,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 2,
      title: 'What kind of finish do you love?',
      subtitle: 'Select one of the below',
      path: 'eyes.underEyeCorrector.formula',
      options: [
        {
          id: 1,
          title: 'Matte Shine-free all day',
          asset: 'Matte',
        },
        {
          id: 2,
          title: 'Natural That Fresh, “no-makeup” look',
          asset: 'Fresh',
        },
        {
          id: 3,
          title: 'Radiant Give me a glow',
          asset: 'Radiant',
        },
      ],
    },
  ],
};

const eyePrimerItem: ItemCategory = {
  id: 5,
  title: 'Eye primer',
  asset: 'EyePrimer',
  options: [
    {
      id: 1,
      title: 'Formula Preference',
      subtitle: 'Select one of the below',
      path: 'eyes.primer.formula',
      options: [
        {
          id: 1,
          title: 'Liquid',
          asset: 'Liquid',
        },
        {
          id: 2,
          title: 'Cream',
          asset: 'Cream',
        },
        {
          id: 3,
          title: 'Powder',
          asset: 'Powder',
        },
        {
          id: 4,
          title: 'Pencil',
          asset: 'Pencil',
        },
      ],
    },
  ],
};

const FalseEyelashes: ItemCategory = {
  id: 6,
  title: 'False eyelashes',
  asset: 'FalseEyelashes',
  options: [
    {
      id: 1,
      title: 'What types of eyelashes do you prefer?',
      subtitle: 'Select one of the below',
      path: 'eyes.falseEyelashes.type',
      options: [
        {
          id: 1,
          title: 'Natural',
          asset: 'EyelashesNatural',
        },
        {
          id: 2,
          title: 'Open eye',
          asset: 'EyelashesOpen',
        },
        {
          id: 3,
          title: 'Cat eye',
          asset: 'EyelashesCat',
        },
        {
          id: 4,
          title: 'Doll eye',
          asset: 'EyelashesDoll',
        },
      ],
    },
  ],
};

const eyesSubCategory: SubCategory = {
  id: 1,
  title: 'Eyes',
  asset: 'Eyes',
  backgroundColor: '#FCF0F0',
  options: [
    eyelinerItem,
    eyeshadowItem,
    mascaraItem,
    underEyeCorrectorItem,
    eyePrimerItem,
    FalseEyelashes,
    {
      id: 7,
      title: 'Lash glue',
      asset: 'LashGlue',
      options: [],
    },
  ],
};

export default eyesSubCategory;
