import {createSlice} from '@reduxjs/toolkit';

import type {RootState} from '../store';
import DATA from '../../data/data';
import {OptionProfileSetting} from '../../components/Body';

export interface ProfileSettingsState {
  budget: OptionProfileSetting | null;
  shop: OptionProfileSetting | null;
  skinType: OptionProfileSetting | null;
  skinIssues: OptionProfileSetting[];
  allergies: OptionProfileSetting[];
  undertoneType: OptionProfileSetting | null;
  brands: OptionProfileSetting[];
  isFinished: boolean;
}

const initialState: ProfileSettingsState = {
  budget: null,
  shop: null,
  skinType: null,
  skinIssues: [],
  allergies: [],
  undertoneType: null,
  brands: [],
  isFinished: false,
};

export const profileSettingsSlice = createSlice({
  name: 'profileSettings',
  initialState: initialState as ProfileSettingsState,
  reducers: {
    setBudget: (state, action) => {
      state.budget = action.payload;
    },
    setShop: (state, action) => {
      state.shop = action.payload;
    },
    setSkinType: (state, action) => {
      state.skinType = action.payload;
    },
    setSkinIssues: (state, action) => {
      state.skinIssues = action.payload;
    },
    setAllergies: (state, action) => {
      state.allergies = action.payload;
    },
    setUndertoneType: (state, action) => {
      state.undertoneType = action.payload;
    },
    setBrands: (state, action) => {
      state.brands = action.payload;
    },
    removeSkinIssue: (state, action) => {
      state.skinIssues = state.skinIssues.filter(
        issue => issue.id !== action.payload.id,
      );
    },
    removeAllergy: (state, action) => {
      state.allergies = state.allergies.filter(
        allergy => allergy.id !== action.payload.id,
      );
    },
    setIsFinished: (state, action) => {
      state.isFinished = action.payload;
    },
  },
  extraReducers: builder => {},
});

export const ProfileSettingsActions = profileSettingsSlice.actions;
export class ProfileSettingsSelector {
  static getFinished = (state: RootState) => state.profileSettings.isFinished;
  static getBudgetId = (state: RootState) => state.profileSettings.budget?.id;
  static getBudget = (state: RootState) => {
    return state.profileSettings.budget;
  };
  static getShopId = (state: RootState) => state.profileSettings.shop?.id;
  static getShop = (state: RootState) => {
    return state.profileSettings.shop;
  };
  static getSkinTypeId = (state: RootState) =>
    state.profileSettings.skinType?.id;
  static getSkinType = (state: RootState) => {
    return state.profileSettings.skinType;
  };
  static getSkinIssuesId = (state: RootState) =>
    state.profileSettings.skinIssues?.map(s => s.id);

  static getSkinIssues = (state: RootState) => {
    return state.profileSettings.skinIssues;
  };
  static getAllergiesId = (state: RootState) =>
    state.profileSettings.allergies?.map(s => s.id);
  static getAllergies = (state: RootState) => {
    return state.profileSettings.allergies;
  };
  static getUndertoneTypeId = (state: RootState) =>
    state.profileSettings.undertoneType?.id;
  static getUndertoneType = (state: RootState) => {
    return state.profileSettings.undertoneType;
  };
  static getBrandsId = (state: RootState) =>
    state.profileSettings.brands.map(s => s.id);
  static getBrands = (state: RootState) => {
    return state.profileSettings.brands;
  };
}

export default profileSettingsSlice.reducer;
