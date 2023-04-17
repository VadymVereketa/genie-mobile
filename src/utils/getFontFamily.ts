type StyleFont = 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900;

const getWeight = (str: number) => {
  switch (str) {
    case 100:
      return 'Thin';
    case 200:
      return 'ExtraLight';
    case 300:
      return 'Light';
    case 400:
      return 'Regular';
    case 500:
      return 'Medium';
    case 600:
      return 'SemiBold';
    case 700:
      return 'Bold';
    case 800:
      return 'ExtraBold';
    case 900:
      return 'Black';
  }
};

export const getFontFamily = (style: StyleFont) => {
  const weight = getWeight(style);
  return `Poppins-${weight}`;
};
