import {browsSubCategory} from './brows/browsSubCategory';
import CleanserSubCategory from './Cleanser/CleanserSubCategory';
import eyesSubCategory from './eyes/eyesSubCategory';
import faceSubCategory from './face/faceSubCategory';
import lipsSubCategory from './lips/lipsSubCategory';
import MaskSubCategory from './Mask/MaskSubCategory';
import MoisturizerSubCategory from './Moisturizer/MoisturizerSubCategory';
import SerumSubCategory from './Serum/SerumSubCategory';
import type {
  ItemCategory,
  MainCategory,
  SubCategory,
} from '../typings/Category';

const makeUp: MainCategory = {
  id: 1,
  title: 'Makeup',
  asset: 'MakeUp',
  backgroundColor: '#FCF0F0',
  subCategories: [
    eyesSubCategory,
    browsSubCategory,
    lipsSubCategory,
    faceSubCategory,
  ],
};

const skinCare: MainCategory = {
  id: 2,
  title: 'Skin care',
  asset: 'SkinCare',
  backgroundColor: '#EFF5FF',
  subCategories: [
    CleanserSubCategory,
    MoisturizerSubCategory,
    SerumSubCategory,
    MaskSubCategory,
  ],
};

const categories: MainCategory[] = [makeUp, skinCare];

const setIdForCategoriesAndParentId = () => {
  let id = 1;
  categories.forEach(category => {
    category.id = id;
    id++;
    category.subCategories.forEach(subCategory => {
      subCategory.id = id;
      subCategory.parentId = category.id;
      id++;
      subCategory.options.forEach(item => {
        item.id = id;
        item.parentId = subCategory.id;
        id++;
        item.options.forEach(option => {
          option.id = id;
          option.parentId = item.id;
          id++;
          option.options.forEach(optionOption => {
            optionOption.id = id;
            id++;
          });
        });
      });
    });
  });
};
setIdForCategoriesAndParentId();

export const getTreeCategoryByParentId = (parentId: number) => {
  let category: ItemCategory;
  categories.forEach(mainCategory => {
    if (mainCategory.id === parentId) {
    }
    mainCategory.subCategories.forEach(subCategory => {
      if (subCategory.id === parentId) {
      }
      subCategory.options.forEach(item => {
        if (item.id === parentId) {
          category = item;
        }
      });
    });
  });
  return category;
};

export default categories;
