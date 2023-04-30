import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';

import {QuestionsActions} from './questionsSlice';
import {profileSettings1, profileSettings2} from '../../data/data';
import Service from '../../services/service/service';
import type {
  CreateUser,
  LoginUser,
  ResponseCreateUser,
  UpdatePropertyOfUser,
  User,
} from '../../typings/CreateUser';
import type {RootState} from '../store';

export interface UserState {
  user: ResponseCreateUser | null;
  error: string | null | undefined;
  loginError: string | null | undefined;
  dateOfBirth: string | null;
}

const initialState: UserState = {
  user: null,
  error: null,
  dateOfBirth: null,
  loginError: null,
};

const fillQuestions = (user: User, dispatch: any) => {
  const {
    budget,
    allergies,

    shoppingPreference,
    skinIssues,
    skinType,
    undertone,
    dislikeBrandReasons,
    dislikedBrands,
    likeBrandReasons,
    likedBrands,
  } = user;

  if (budget) {
    dispatch(
      QuestionsActions.setData({
        data: profileSettings1[0].options.find(opt => opt.id === +budget)!,
        path: 'profileSettings.budget',
      }),
    );
  }
  if (allergies !== undefined) {
    dispatch(
      QuestionsActions.setData({
        data: profileSettings1[3].options.filter(opt => {
          return allergies.includes(opt.id.toString());
        }),
        path: 'profileSettings.allergies.0',
      }),
    );
  }
  if (likedBrands !== undefined) {
    dispatch(
      QuestionsActions.setData({
        data: profileSettings2[1].options.filter(opt => {
          return likedBrands.includes(opt.id.toString());
        }),
        path: 'profileSettings.brandsLikes.0',
      }),
    );
  }

  if (dislikedBrands !== undefined) {
    dispatch(
      QuestionsActions.setData({
        data: profileSettings2[1].options.filter(opt => {
          return dislikedBrands.includes(opt.id.toString());
        }),
        path: 'profileSettings.brandsDislikes.0',
      }),
    );
  }

  if (likeBrandReasons !== undefined) {
    dispatch(
      QuestionsActions.setData({
        data: profileSettings2[2].options.filter(opt => {
          return likeBrandReasons.includes(opt.id.toString());
        }),
        path: 'profileSettings.whyLikes.0',
      }),
    );
  }

  if (dislikeBrandReasons !== undefined) {
    dispatch(
      QuestionsActions.setData({
        data: profileSettings2[4].options.filter(opt => {
          return dislikeBrandReasons.includes(opt.id.toString());
        }),
        path: 'profileSettings.whyDislikes.0',
      }),
    );
  }

  if (shoppingPreference !== undefined) {
    dispatch(
      QuestionsActions.setData({
        data: profileSettings2[5].options.find(
          opt => opt.id === +shoppingPreference,
        )!,
        path: 'profileSettings.shop',
      }),
    );
  }
  if (skinIssues !== undefined) {
    dispatch(
      QuestionsActions.setData({
        data: profileSettings1[2].options.filter(opt => {
          return skinIssues.includes(opt.id.toString());
        }),
        path: 'profileSettings.skinIssues.0',
      }),
    );
  }
  if (skinType !== undefined) {
    dispatch(
      QuestionsActions.setData({
        data: profileSettings1[1].options.find(opt => opt.id === +skinType)!,
        path: 'profileSettings.skinType',
      }),
    );
  }
  if (undertone !== undefined) {
    dispatch(
      QuestionsActions.setData({
        data: profileSettings2[0].options.find(opt => opt.id === +undertone)!,
        path: 'profileSettings.undertoneType',
      }),
    );
  }
};
export const fetchUser = createAsyncThunk(
  'user/fetchUser',
  async (_: void, thunkAPI) => {
    const root: RootState = thunkAPI.getState() as RootState;
    const userId = UserSelector.getUserId(root);
    if (!userId) return;

    const res = await Service.refresh(userId);
    console.log(res);

    fillQuestions(res, thunkAPI.dispatch);
    thunkAPI.dispatch(UserActions.setProfileUser(res));
  },
);
export const fetchCreateUser = createAsyncThunk(
  'user/fetchCreateUser',
  async (user: CreateUser, thunkAPI) => {
    thunkAPI.dispatch(UserActions.setError(null));
    const res = await Service.createUser(user);

    console.log(res);
    thunkAPI.dispatch(fetchLoginUser(user));
    return null;
  },
);

export const fetchLoginUser = createAsyncThunk(
  'user/fetchLoginUser',
  async (user: LoginUser, thunkAPI) => {
    thunkAPI.dispatch(UserActions.setError(null));
    const res = await Service.login(user);
    console.log('res', res);

    fillQuestions(res.userProfile, thunkAPI.dispatch);
    return res;
  },
);

export const fetchDateOfBirth = createAsyncThunk(
  'user/fetchDateOfBirth',
  async (data: UpdatePropertyOfUser, thunkAPI) => {
    const root: RootState = thunkAPI.getState() as RootState;
    const userId = UserSelector.getUserId(root);
    const res = await Service.updatePropertyOfUser(userId, data);
    thunkAPI.dispatch(UserActions.setDateOfBirth(data.value));

    console.log(res);
  },
);

export const fetchPropertyOfUser = createAsyncThunk(
  'user/fetchPropertyOfUser',
  async (data: UpdatePropertyOfUser, thunkAPI) => {
    const root: RootState = thunkAPI.getState() as RootState;
    const userId = UserSelector.getUserId(root);
    const res = await Service.updatePropertyOfUser(userId, data);
    //thunkAPI.dispatch(UserActions.setDateOfBirth(data.value));

    console.log(res);
  },
);

export const fetchLogout = createAsyncThunk(
  'user/fetchLogout',
  async (_: void, thunkAPI) => {
    thunkAPI.dispatch(UserActions.logout());
    thunkAPI.dispatch(QuestionsActions.logout());
  },
);

export const userSlice = createSlice({
  name: 'user',
  initialState: initialState as UserState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setProfileUser: (state, action) => {
      if (state.user) {
        state.user.userProfile = action.payload;
      }
    },
    setError: (state, action) => {
      state.error = action.payload;
      state.loginError = action.payload;
    },
    setDateOfBirth: (state, action) => {
      state.dateOfBirth = action.payload;
    },
    logout: state => {
      state.dateOfBirth = null;
      state.user = null;
      state.error = null;
    },
    setFullName: (state, action) => {
      if (state.user) {
        state.user.userProfile.fullName = action.payload;
      }
    },
    setEmail: (state, action) => {
      if (state.user) {
        state.user.userProfile.email = action.payload;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchCreateUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(fetchCreateUser.rejected, (state, action) => {
      state.error = action.error.message;
    });
    builder.addCase(fetchLoginUser.fulfilled, (state, action) => {
      state.user = action.payload;
    });
    builder.addCase(fetchLoginUser.rejected, (state, action) => {
      state.loginError = action.error.message;
    });
  },
});

export const UserActions = userSlice.actions;
export class UserSelector {
  static getTokenId = (state: RootState) =>
    state.user.user?.authCredentials?.idToken ?? null;
  static getUserId = (state: RootState) =>
    state.user.user?.userProfile?.userID ?? null;

  static isAuth = (state: RootState) => !!state.user.user?.userProfile?.userID;
  static getUser = (state: RootState) => state.user.user?.userProfile;
  static getError = (state: RootState) => state.user.error;
  static getLoginError = (state: RootState) => state.user.loginError;
  static getDateOfBirth = (state: RootState) => {
    if (state.user.dateOfBirth) {
      const [month, day, year] = state.user.dateOfBirth.split('-').map(Number);
      return new Date(year, month - 1, day);
    }
    return null;
  };
  static getCompleteOnboarding = (state: RootState) => {
    return state.user.user?.userProfile?.completeOnboarding ?? false;
  };
}

export default userSlice.reducer;
