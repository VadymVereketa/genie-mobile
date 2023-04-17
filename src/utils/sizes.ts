import {isTablet} from './isTablet';
import {responsiveScreenFontSize} from './responsive-dimensions';

const tablet = isTablet();

const width = 386;

const f = (z: number) => {
  const x = (16 / 9) * width;

  return (100 * z) / Math.sqrt(x ** 2 + width ** 2);
};

const sizes: Record<string, number> = {};

for (let i = 1; i <= 400; i++) {
  sizes[i] = Math.floor(responsiveScreenFontSize(f(i) * (tablet ? 0.7 : 1)));
}

export default sizes;
