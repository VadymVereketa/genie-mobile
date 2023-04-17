import type {ItemCategory, SubCategory} from '../../typings/Category';

const Foundation: ItemCategory = {
  id: 5,
  title: 'Foundation',
  asset: 'Foundation',
  options: [
    {
      id: 1,
      title: 'How much coverage are you craving?',
      subtitle: 'Select one of the below',
      path: 'face.foundation.coverage',
      options: [
        {
          id: 1,
          title: 'Full Let’s cover it all',
          asset: 'Full',
        },
        {
          id: 2,
          title: 'Medium Hiding some minor blemishes',
          asset: 'Medium',
        },
        {
          id: 2,
          title: 'Light A little tint is perfect',
          asset: 'Light',
        },
        {
          id: 6,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 2,
      title: 'What benefit matters most to you?',
      subtitle: 'Select one of the below',
      path: 'face.foundation.benefit',
      options: [
        {
          id: 1,
          title: 'Clean products Feel-good ingredients only',
          asset: 'Clean',
        },
        {
          id: 2,
          title: 'Sun protection SPF always',
          asset: 'Sun',
        },
        {
          id: 3,
          title: 'No preference I’m cool with whatever!',
        },
      ],
    },
    {
      id: 3,
      title: 'What kind of finish do you love?',
      subtitle: 'Select one of the below',
      path: 'face.foundation.finish',
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
        {
          id: 4,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 3,
      title: 'What’s your fave formula?',
      subtitle: 'Select one of the below',
      path: 'face.foundation.formula',
      options: [
        {
          id: 1,
          title: 'Liquid',
          asset: 'Liquid',
        },
        {
          id: 2,
          title: 'Powder',
          asset: 'Powder',
        },
        {
          id: 3,
          title: 'Cream & Stick',
          asset: 'Creams',
        },
        {
          id: 4,
          title: 'Show me everything',
        },
      ],
    },
  ],
};

const Concealer: ItemCategory = {
  id: 5,
  title: 'Concealer',
  asset: 'Concealer',
  options: [
    {
      id: 1,
      title: 'How much coverage are you craving?',
      subtitle: 'Select one of the below',
      path: 'face.concealer.coverage',
      options: [
        {
          id: 1,
          title: 'Full Let’s cover it all',
          asset: 'Full',
        },
        {
          id: 2,
          title: 'Medium Hiding some minor blemishes',
          asset: 'Medium',
        },
        {
          id: 2,
          title: 'Light A little tint is perfect',
          asset: 'Light',
        },
        {
          id: 6,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 2,
      title: 'What benefit matters most to you?',
      subtitle: 'Select one of the below',
      path: 'face.concealer.benefit',
      options: [
        {
          id: 1,
          title: 'Clean products Feel-good ingredients only',
          asset: 'Clean',
        },
        {
          id: 2,
          title: 'Sun protection SPF always',
          asset: 'Sun',
        },
        {
          id: 3,
          title: 'No preference I’m cool with whatever!',
        },
      ],
    },
    {
      id: 3,
      title: 'What kind of finish do you love?',
      subtitle: 'Select one of the below',
      path: 'face.concealer.finish',
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
        {
          id: 4,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 3,
      title: 'What’s your fave formula?',
      subtitle: 'Select one of the below',
      path: 'face.concealer.formula',
      options: [
        {
          id: 1,
          title: 'Liquid',
          asset: 'Liquid',
        },
        {
          id: 2,
          title: 'Powder',
          asset: 'Powder',
        },
        {
          id: 3,
          title: 'Cream & Stick',
          asset: 'Creams',
        },
        {
          id: 4,
          title: 'Show me everything',
        },
      ],
    },
  ],
};

const Creams: ItemCategory = {
  id: 5,
  title: 'BB & CC Creams',
  asset: 'Creams',
  options: [
    {
      id: 1,
      title: 'How much coverage are you craving?',
      subtitle: 'Select one of the below',
      path: 'face.creams.coverage',
      options: [
        {
          id: 1,
          title: 'Full Let’s cover it all',
          asset: 'Full',
        },
        {
          id: 2,
          title: 'Medium Hiding some minor blemishes',
          asset: 'Medium',
        },
        {
          id: 2,
          title: 'Light A little tint is perfect',
          asset: 'Light',
        },
        {
          id: 6,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 2,
      title: 'What benefit matters most to you?',
      subtitle: 'Select one of the below',
      path: 'face.creams.benefit',
      options: [
        {
          id: 1,
          title: 'Clean products Feel-good ingredients only',
          asset: 'Clean',
        },
        {
          id: 2,
          title: 'Sun protection SPF always',
          asset: 'Sun',
        },
        {
          id: 3,
          title: 'No preference I’m cool with whatever!',
        },
      ],
    },
    {
      id: 3,
      title: 'What kind of finish do you love?',
      subtitle: 'Select one of the below',
      path: 'face.creams.finish',
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
        {
          id: 4,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 3,
      title: 'What’s your fave formula?',
      subtitle: 'Select one of the below',
      path: 'face.creams.formula',
      options: [
        {
          id: 1,
          title: 'Liquid',
          asset: 'Liquid',
        },
        {
          id: 2,
          title: 'Powder',
          asset: 'Powder',
        },
        {
          id: 3,
          title: 'Cream & Stick',
          asset: 'Creams',
        },
        {
          id: 4,
          title: 'Show me everything',
        },
      ],
    },
  ],
};

const Primer: ItemCategory = {
  id: 5,
  title: 'Face Primer',
  asset: 'FacePrimer',
  options: [
    {
      id: 1,
      title: 'What kind of finish do you love?',
      subtitle: 'Select one of the below',
      path: 'face.primer.coverage',
      options: [
        {
          id: 1,
          title: 'Matte primer',
          asset: 'Matte',
        },
        {
          id: 2,
          title: 'Hydrating primer',
          asset: 'Hydrating',
        },
        {
          id: 2,
          title: 'Illuminating Primer',
          asset: 'Illuminating',
        },
        {
          id: 2,
          title: 'Colour correcting primer',
          asset: 'ColourCorrecting',
        },
        {
          id: 6,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 2,
      title: 'How much coverage are you craving?',
      subtitle: 'Select one of the below',
      path: 'face.primer.coverage',
      options: [
        {
          id: 1,
          title: 'Full Let’s cover it all',
          asset: 'Full',
        },
        {
          id: 2,
          title: 'Medium Hiding some minor blemishes',
          asset: 'Medium',
        },
        {
          id: 2,
          title: 'Light A little tint is perfect',
          asset: 'Light',
        },
        {
          id: 6,
          title: 'Show me everything',
        },
      ],
    },
  ],
};

const Powder: ItemCategory = {
  id: 5,
  title: 'Powder',
  asset: 'Powder',
  options: [
    {
      id: 1,
      title: 'What type of powder do you love?',
      subtitle: 'Select one of the below',
      path: 'face.powder.type',
      options: [
        {
          id: 1,
          title: 'Loose powder',
          asset: 'Powder',
        },
        {
          id: 2,
          title: 'Pressed powder',
          asset: 'UnderEyeCorrector',
        },
        {
          id: 6,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 2,
      title: 'What kind of finish do you love?',
      subtitle: 'Select one of the below',
      path: 'face.powder.finish',
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
          id: 2,
          title: 'Radiant Give me a glow',
          asset: 'Radiant',
        },
        {
          id: 6,
          title: 'Show me everything',
        },
      ],
    },
  ],
};

const Highlighter: ItemCategory = {
  id: 5,
  title: 'Highlighter',
  asset: 'Highlighter',
  options: [
    {
      id: 1,
      title: 'What kind of finish do you love?',
      subtitle: 'Select one of the below',
      path: 'face.highlighter.finish',
      options: [
        {
          id: 1,
          title: 'Radiant',
          asset: 'Radiant',
        },
        {
          id: 2,
          title: 'Shimmer',
          asset: 'Highlighter',
        },
        {
          id: 6,
          title: 'Natural',
          asset: 'Fresh',
        },
        {
          id: 6,
          title: 'Satin',
          asset: 'Satin',
        },
        {
          id: 6,
          title: 'Matte',
          asset: 'Matte',
        },
        {
          id: 6,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 3,
      title: 'What’s your fave formula?',
      subtitle: 'Select one of the below',
      path: 'face.highlighter.formula',
      options: [
        {
          id: 1,
          title: 'Liquid',
          asset: 'Liquid',
        },
        {
          id: 2,
          title: 'Powder',
          asset: 'Powder',
        },
        {
          id: 3,
          title: 'Cream & Stick',
          asset: 'Cream',
        },
        {
          id: 4,
          title: 'Show me everything',
        },
      ],
    },
  ],
};

const Contour: ItemCategory = {
  id: 5,
  title: 'Contour',
  asset: 'Contour',
  options: [
    {
      id: 3,
      title: 'What’s your fave formula?',
      subtitle: 'Select one of the below',
      path: 'face.contour.formula',
      options: [
        {
          id: 1,
          title: 'Liquid',
          asset: 'Liquid',
        },
        {
          id: 2,
          title: 'Powder',
          asset: 'Powder',
        },
        {
          id: 3,
          title: 'Cream & Stick',
          asset: 'Cream',
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
      path: 'face.contour.finish',
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
          id: 2,
          title: 'Radiant Give me a glow',
          asset: 'Radiant',
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
      path: 'face.contour.kindOfLook',
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
          id: 2,
          title: 'Full glam',
          asset: 'FullGlam',
        },
        {
          id: 6,
          title: 'Show me everything',
        },
      ],
    },
  ],
};

const Blush: ItemCategory = {
  id: 5,
  title: 'Blush',
  asset: 'UnderEyeCorrector',
  options: [
    {
      id: 3,
      title: 'What’s your fave formula?',
      subtitle: 'Select one of the below',
      path: 'face.blush.formula',
      options: [
        {
          id: 1,
          title: 'Cream',
          asset: 'Liquid',
        },
        {
          id: 2,
          title: 'Powder',
          asset: 'Powder',
        },
        {
          id: 3,
          title: 'Stick',
          asset: 'Stick',
        },
        {
          id: 4,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 2,
      title: 'What kind of look are you going for?',
      subtitle: 'Select one of the below',
      path: 'face.blush.kindOfLook',
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
          id: 2,
          title: 'Full glam',
          asset: 'FullGlam',
        },
        {
          id: 6,
          title: 'Show me everything',
        },
      ],
    },
  ],
};

const Bronzer: ItemCategory = {
  id: 5,
  title: 'Bronzer',
  asset: 'UnderEyeCorrector',
  options: [
    {
      id: 3,
      title: 'What’s your fave formula?',
      subtitle: 'Select one of the below',
      path: 'face.bronzer.formula',
      options: [
        {
          id: 1,
          title: 'Liquid',
          asset: 'Liquid',
        },
        {
          id: 2,
          title: 'Powder',
          asset: 'Powder',
        },
        {
          id: 3,
          title: 'Cream & Stick',
          asset: 'Cream',
        },
        {
          id: 4,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 2,
      title: 'What kind of look are you going for?',
      subtitle: 'Select one of the below',
      path: 'face.bronzer.kindOfLook',
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
          id: 2,
          title: 'Full glam',
          asset: 'FullGlam',
        },
        {
          id: 6,
          title: 'Show me everything',
        },
      ],
    },
  ],
};

const faceSubCategory: SubCategory = {
  id: 4,
  title: 'Face',
  asset: 'Face',
  backgroundColor: '#FCF0F0',
  options: [
    Foundation,
    Creams,
    Concealer,
    Primer,
    Powder,
    Highlighter,
    Contour,
    Blush,
    Bronzer,
  ],
};

export default faceSubCategory;
