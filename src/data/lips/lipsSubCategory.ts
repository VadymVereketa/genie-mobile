import type {ItemCategory, SubCategory} from '../../typings/Category';

const lipstick: ItemCategory = {
  id: 1,
  title: 'Lipstick',
  asset: 'Lipstick',
  options: [
    {
      id: 1,
      title: 'Formula Type',
      subtitle: 'Select one of the below',
      path: 'lips.lipstick.formula',
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
          title: 'Tint',
          asset: 'Tint',
        },
        {
          id: 4,
          title: 'Powder',
          asset: 'Powder',
        },
        {
          id: 6,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 2,
      title: "What's your favorite finish?",
      subtitle: 'Select one of the below',
      path: 'lips.lipstick.finish',
      options: [
        {
          id: 1,
          title: 'Glossy',
          asset: 'Glossy',
        },
        {
          id: 2,
          title: 'High-shine',
          asset: 'HighShine',
        },
        {
          id: 3,
          title: 'Matte',
          asset: 'Matte',
        },
        {
          id: 4,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 3,
      title: 'Which benefits are most important to you?',
      subtitle: 'Select one of the below',
      path: 'lips.lipstick.benefits',
      options: [
        {
          id: 1,
          title: 'Hydrating',
          asset: 'Hydrating',
        },
        {
          id: 2,
          title: 'High-shine',
          asset: 'HighShine',
        },
        {
          id: 3,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 3,
      title: 'What kind of look are you going for?',
      subtitle: 'Select one of the below',
      path: 'lips.lipstick.kindOfLook',
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
          id: 3,
          title: 'Show me everything',
        },
      ],
    },
  ],
};

const lipgloss: ItemCategory = {
  id: 2,
  title: 'Lip gloss',
  asset: 'LipGloss',
  options: [
    {
      id: 1,
      title: 'Which benefits are most important to you?',
      subtitle: 'Select one of the below',
      path: 'lips.lipstick.benefits',
      options: [
        {
          id: 1,
          title: 'Plumping',
          asset: 'LipPlumper',
        },
        {
          id: 2,
          title: 'Hydrating',
          asset: 'Hydrating',
        },
        {
          id: 6,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 2,
      title: "What's your favorite finish?",
      subtitle: 'Select one of the below',
      path: 'lips.lipgloss.finish',
      options: [
        {
          id: 1,
          title: 'Glossy',
          asset: 'Glossy',
        },
        {
          id: 2,
          title: 'High-shine',
          asset: 'HighShine',
        },
        {
          id: 3,
          title: 'Matte',
          asset: 'Matte',
        },
        {
          id: 4,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 3,
      title: 'What kind of look are you going for?',
      subtitle: 'Select one of the below',
      path: 'lips.lipgloss.kindOfLook',
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
          id: 3,
          title: 'Show me everything',
        },
      ],
    },
  ],
};

const lipstain: ItemCategory = {
  id: 2,
  title: 'Lip Stain',
  asset: 'LipStain',
  options: [
    {
      id: 1,
      title: 'Which benefits are most important to you?',
      subtitle: 'Select one of the below',
      path: 'lips.lipstain.benefits',
      options: [
        {
          id: 1,
          title: 'Hydrating',
          asset: 'Hydrating',
        },
        {
          id: 2,
          title: 'Long-wearing',
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
      title: "What's your favorite finish?",
      subtitle: 'Select one of the below',
      path: 'lips.lipstain.finish',
      options: [
        {
          id: 1,
          title: 'Glossy',
          asset: 'Glossy',
        },
        {
          id: 2,
          title: 'High-shine',
          asset: 'HighShine',
        },
        {
          id: 3,
          title: 'Matte',
          asset: 'Matte',
        },
        {
          id: 4,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 3,
      title: 'What kind of look are you going for?',
      subtitle: 'Select one of the below',
      path: 'lips.lipstain.kindOfLook',
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
          id: 3,
          title: 'Show me everything',
        },
      ],
    },
  ],
};

const lipliner: ItemCategory = {
  id: 2,
  title: 'Lip Liner',
  asset: 'EyebrowPencils',
  options: [
    {
      id: 1,
      title: 'Which benefits are most important to you?',
      subtitle: 'Select one of the below',
      path: 'lips.lipliner.benefits',
      options: [
        {
          id: 1,
          title: 'Hydrating',
          asset: 'Hydrating',
        },
        {
          id: 2,
          title: 'Long-wearing',
          asset: 'LongLasting',
        },
        {
          id: 6,
          title: 'Show me everything',
        },
      ],
    },
    {
      id: 3,
      title: 'What kind of look are you going for?',
      subtitle: 'Select one of the below',
      path: 'lips.lipliner.kindOfLook',
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
          id: 3,
          title: 'Show me everything',
        },
      ],
    },
  ],
};

const lipplumper: ItemCategory = {
  id: 5,
  title: 'Lip Plumper',
  asset: 'LipPlumper',
  options: [
    {
      id: 1,
      title: 'Which benefits are most important to you?',
      subtitle: 'Select one of the below',
      path: 'lips.lipplumper.benefits',
      options: [
        {
          id: 1,
          title: 'Hydrating',
          asset: 'Hydrating',
        },
        {
          id: 2,
          title: 'Long-wearing',
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
      title: "What's your favorite finish?",
      subtitle: 'Select one of the below',
      path: 'lips.lipplumper.finish',
      options: [
        {
          id: 1,
          title: 'Glossy',
          asset: 'Glossy',
        },
        {
          id: 2,
          title: 'High-shine',
          asset: 'HighShine',
        },
        {
          id: 3,
          title: 'Matte',
          asset: 'Matte',
        },
        {
          id: 4,
          title: 'Show me everything',
        },
      ],
    },
  ],
};

const lipsSubCategory: SubCategory = {
  id: 3,
  title: 'Lips',
  asset: 'Lips',
  backgroundColor: '#FCF0F0',
  options: [lipstick, lipgloss, lipstain, lipliner, lipplumper],
};

export default lipsSubCategory;
