import type {PayloadAction} from '@reduxjs/toolkit';
import {createSlice} from '@reduxjs/toolkit';

import type {
  ItemCategory,
  QuestionItem,
  QuestionType,
} from '../../typings/Category';
import type {Leaves} from '../../typings/Leaves';
import type {RootState} from '../store';

export interface QuestionsState {
  eyes: {
    eyeshadow: {
      formula: QuestionItem | null;
      kindOfLook: QuestionItem | null;
      color: QuestionItem | null;
      formulation: QuestionItem | null;
    };
    eyeliner: {
      formula: QuestionItem | null;
      kindOfLook: QuestionItem | null;
      formulation: QuestionItem | null;
      eyelids: QuestionItem | null;
    };
    mascara: {
      formula: QuestionItem | null;
      color: QuestionItem | null;
      type: QuestionItem | null;
    };
    underEyeCorrector: {
      formula: QuestionItem | null;
      kindOfFinish: QuestionItem | null;
    };
    primer: {
      formula: QuestionItem | null;
    };
    falseEyelashes: {
      type: QuestionItem | null;
    };
  };
  lips: {
    lipstick: {
      formula: QuestionItem | null;
      finish: QuestionItem | null;
      benefits: QuestionItem | null;
      kindOfLook: QuestionItem | null;
    };
    lipgloss: {
      finish: QuestionItem | null;
      benefits: QuestionItem | null;
      kindOfLook: QuestionItem | null;
    };
    lipstain: {
      finish: QuestionItem | null;
      benefits: QuestionItem | null;
      kindOfLook: QuestionItem | null;
    };
    lipliner: {
      benefits: QuestionItem | null;
      kindOfLook: QuestionItem | null;
    };
    lipplumper: {
      benefits: QuestionItem | null;
      finish: QuestionItem | null;
    };
  };
  brows: {
    mascara: {
      kindOfLook: QuestionItem | null;
      formula: QuestionItem | null;
    };
    pomades: {
      formula: QuestionItem | null;
    };
    pencils: {
      formula: QuestionItem | null;
    };
  };
  face: {
    foundation: {
      coverage: QuestionItem | null;
      benefit: QuestionItem | null;
      finish: QuestionItem | null;
      formula: QuestionItem | null;
    };
    creams: {
      coverage: QuestionItem | null;
      benefit: QuestionItem | null;
      finish: QuestionItem | null;
      formula: QuestionItem | null;
    };
    concealer: {
      coverage: QuestionItem | null;
      benefit: QuestionItem | null;
      finish: QuestionItem | null;
      formula: QuestionItem | null;
    };
    primer: {
      coverage: QuestionItem | null;
      finish: QuestionItem | null;
    };
    powder: {
      type: QuestionItem | null;
      finish: QuestionItem | null;
    };
    highlighter: {
      formula: QuestionItem | null;
      finish: QuestionItem | null;
    };
    contour: {
      formula: QuestionItem | null;
      finish: QuestionItem | null;
      kindOfLook: QuestionItem | null;
    };
    blush: {
      formula: QuestionItem | null;
      kindOfLook: QuestionItem | null;
    };
    bronzer: {
      formula: QuestionItem | null;
      kindOfLook: QuestionItem | null;
    };
  };
  profileSettings: {
    budget: QuestionItem | null;
    shop: QuestionItem | null;
    skinType: QuestionItem | null;
    skinIssues: QuestionItem[];
    allergies: QuestionItem[];
    undertoneType: QuestionItem | null;
    brandsLikes: QuestionItem[];
    brandsDislikes: QuestionItem[];
    whyLikes: QuestionItem[];
    whyDislikes: QuestionItem[];
  };

  skipQuestions: ItemCategory[];
  isFinished: boolean;
}
export type LeavesQuestionsState = Leaves<QuestionsState, 3>;

const initialState: QuestionsState = {
  eyes: {
    eyeliner: {
      formula: null,
      kindOfLook: null,
      formulation: null,
      eyelids: null,
    },
    eyeshadow: {
      formula: null,
      kindOfLook: null,
      color: null,
      formulation: null,
    },
    mascara: {
      formula: null,
      color: null,
      type: null,
    },
    underEyeCorrector: {
      formula: null,
      kindOfFinish: null,
    },
    primer: {
      formula: null,
    },
    falseEyelashes: {
      type: null,
    },
  },
  lips: {
    lipstick: {
      formula: null,
      finish: null,
      benefits: null,
      kindOfLook: null,
    },
    lipgloss: {
      finish: null,
      benefits: null,
      kindOfLook: null,
    },
    lipstain: {
      finish: null,
      benefits: null,
      kindOfLook: null,
    },
    lipliner: {
      benefits: null,
      kindOfLook: null,
    },
    lipplumper: {
      benefits: null,
      finish: null,
    },
  },
  brows: {
    mascara: {
      kindOfLook: null,
      formula: null,
    },
    pomades: {
      formula: null,
    },
    pencils: {
      formula: null,
    },
  },
  face: {
    foundation: {
      coverage: null,
      benefit: null,
      finish: null,
      formula: null,
    },
    creams: {
      coverage: null,
      benefit: null,
      finish: null,
      formula: null,
    },
    concealer: {
      coverage: null,
      benefit: null,
      finish: null,
      formula: null,
    },
    primer: {
      coverage: null,
      finish: null,
    },
    powder: {
      type: null,
      finish: null,
    },
    highlighter: {
      formula: null,
      finish: null,
    },
    contour: {
      formula: null,
      finish: null,
      kindOfLook: null,
    },
    blush: {
      formula: null,
      kindOfLook: null,
    },
    bronzer: {
      formula: null,
      kindOfLook: null,
    },
  },
  profileSettings: {
    budget: null,
    shop: null,
    skinType: null,
    skinIssues: [],
    allergies: [],
    undertoneType: null,
    brandsLikes: [],
    brandsDislikes: [],
    whyLikes: [],
    whyDislikes: [],
  },
  skipQuestions: [],
  isFinished: false,
};

export const questionsSlice = createSlice({
  name: 'questions',
  initialState: initialState as QuestionsState,
  reducers: {
    logout: state => {
      state.brows = initialState.brows;
      state.eyes = initialState.eyes;
      state.face = initialState.face;
      state.profileSettings = initialState.profileSettings;
      state.skipQuestions = initialState.skipQuestions;
      state.isFinished = initialState.isFinished;
    },
    setIsFinished: (state, action) => {
      state.isFinished = action.payload;
    },
    setData: (
      state,
      action: PayloadAction<{
        data: QuestionItem | QuestionItem[] | null;
        path: LeavesQuestionsState;
      }>,
    ) => {
      const [k1, k2, k3] = action.payload.path.split('.');
      const value = action.payload.data;

      if (k3 && k3 !== '0') {
        state[k1][k2][k3] = value;
        return;
      }
      state[k1][k2] = value;
    },
    removeSkinIssue: (state, action) => {
      state.profileSettings.skinIssues =
        state.profileSettings.skinIssues.filter(
          issue => issue.id !== action.payload.id,
        );
    },
    removeAllergy: (state, action) => {
      state.profileSettings.allergies = state.profileSettings.allergies.filter(
        allergy => allergy.id !== action.payload.id,
      );
    },
    addOptionToSkipQuestions: (state, action: PayloadAction<ItemCategory>) => {
      const findIndex = state.skipQuestions.findIndex(
        item => item.id === action.payload.id,
      );
      if (findIndex === -1) {
        state.skipQuestions.push(action.payload);
      } else {
        const skipQuestion = state.skipQuestions[findIndex];
        const option = action.payload.options[0];

        const findOptionIndex = skipQuestion.options.findIndex(
          item => item.id === option.id,
        );

        console.log('findOptionIndex', findOptionIndex);

        if (findOptionIndex === -1) {
          state.skipQuestions[findIndex].options = [
            ...state.skipQuestions[findIndex].options,
            ...action.payload.options,
          ];
        }
      }
    },
    removeOptionToSkipQuestions: (
      state,
      action: PayloadAction<QuestionType>,
    ) => {
      const findIndex = state.skipQuestions.findIndex(
        item => item.id === action.payload.parentId,
      );
      if (findIndex !== -1) {
        state.skipQuestions[findIndex].options = state.skipQuestions[
          findIndex
        ].options.filter(item => item.id !== action.payload.id);

        if (state.skipQuestions[findIndex].options.length === 0) {
          state.skipQuestions = state.skipQuestions.filter(
            item => item.id !== action.payload.parentId,
          );
        }
      }
    },
  },
});

export const QuestionsActions = questionsSlice.actions;
export type QuestionsActionsType = keyof typeof QuestionsActions;
export class QuestionsSelector {
  static getData = (path: LeavesQuestionsState) => (state: RootState) => {
    const [k1, k2, k3] = path.split('.');

    if (k3 && k3 !== '0') {
      return state.questions[k1][k2][k3] as
        | QuestionItem
        | QuestionItem[]
        | null;
    }
    return state.questions[k1][k2] as QuestionItem | QuestionItem[] | null;
  };
  static getFinished = (state: RootState) => state.questions.isFinished;
  static getSkipQuestions = (state: RootState) => state.questions.skipQuestions;
}

export default questionsSlice.reducer;
