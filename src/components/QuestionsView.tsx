import React from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  FadeOut,
  SlideInLeft,
  SlideInRight,
} from 'react-native-reanimated';
import {useSelector} from 'react-redux';

import Body from './Body';
import Header from './Header';
import ScreenContainer from './ScreenContainer';
import Title from './Title';
import useTheme from '../Context/ThemeContext';
import {getTreeCategoryByParentId} from '../data/categories';
import useDidUpdateEffect from '../hooks/useDidUpdateEffect';
import {useAppNavigation} from '../navigators/hooks';
import {useAppDispatch} from '../redux/hooks';
import {
  QuestionsActions,
  QuestionsSelector,
} from '../redux/slices/questionsSlice';
import {fetchPropertyOfUser} from '../redux/slices/userSlice';
import type {
  ItemCategory,
  QuestionItem,
  QuestionType,
} from '../typings/Category';
import {getPropertyKeyByReduxKey} from '../typings/CreateUser';
import Button from '../uikit/Button';
import {responsiveHeight} from '../utils/responsive-dimensions';
import sizes from '../utils/sizes';

type Props = {
  header: string;
  questions: QuestionType[];
  onFinished: () => void;
  isSkip?: boolean;
};

const hasValue = (value: QuestionItem | QuestionItem[] | null) => {
  if (Array.isArray(value)) {
    return value.length === 0;
  }
  return !value;
};
const QuestionsView = ({
  header,
  questions,
  onFinished,
  isSkip = true,
}: Props) => {
  const dispatch = useAppDispatch();
  const navigation = useAppNavigation();
  const [step, setStep] = React.useState(1);
  const refPrevStep = React.useRef(0);
  const {palette} = useTheme();
  const length = questions.length;
  const questionItem = questions[step - 1];
  const defaultValue = useSelector(
    QuestionsSelector.getData(questionItem.path),
  );
  const [localValue, setLocalValue] = React.useState<
    QuestionItem | QuestionItem[] | null
  >(defaultValue);

  useDidUpdateEffect(() => {
    console.log('defaultValue', defaultValue);

    setLocalValue(defaultValue);
  }, [questionItem]);

  return (
    <ScreenContainer
      style={[
        {
          backgroundColor: palette.background,
        },
        styles.con,
      ]}>
      <Header
        goBack={() => {
          setStep(() => {
            refPrevStep.current = step;
            if (step === 1) {
              navigation.goBack();
              return step;
            }
            return step - 1;
          });
        }}
        title={header}
        currentStep={step}
        length={length}
      />
      <Animated.ScrollView
        style={{height: responsiveHeight(72)}}
        exiting={FadeOut}
        entering={step > refPrevStep.current ? SlideInRight : SlideInLeft}
        key={step}>
        <Title title={questionItem.title} subtitle={questionItem.subtitle} />
        <Body
          options={questionItem.options}
          onChange={value => {
            setLocalValue(value);
          }}
          value={localValue}
        />
      </Animated.ScrollView>
      <View style={styles.bottomView}>
        {isSkip && (
          <Button
            variant="border"
            containerStyle={{
              width: '48%',
            }}
            onPress={() => {
              const item = getTreeCategoryByParentId(questionItem.parentId!);

              if (item) {
                const newItem: ItemCategory = {
                  ...item,
                  options: [questionItem],
                };
                console.log(newItem);
                dispatch(QuestionsActions.addOptionToSkipQuestions(newItem));
              }
              setStep(step => {
                if (step === length) {
                  onFinished();
                  return step;
                }
                return step + 1;
              });
            }}>
            Skip
          </Button>
        )}
        <Button
          containerStyle={{
            width: isSkip ? '48%' : '100%',
          }}
          disabled={hasValue(localValue)}
          onPress={() => {
            dispatch(
              QuestionsActions.removeOptionToSkipQuestions(questionItem),
            );
            const key = getPropertyKeyByReduxKey(questionItem.path);

            if (key) {
              const value = Array.isArray(localValue)
                ? localValue.map(item => item.id.toString())
                : localValue?.id.toString();

              if (value) {
                dispatch(
                  fetchPropertyOfUser({
                    type: key,
                    value,
                  }),
                );
              }
            }
            dispatch(
              QuestionsActions.setData({
                data: localValue,
                path: questionItem.path,
              }),
            );
            refPrevStep.current = step;
            setStep(step => {
              if (step === length) {
                onFinished();
                return step;
              }
              return step + 1;
            });
          }}>
          {step === length ? (isSkip ? 'Finish' : 'Save') : 'Next'}
        </Button>
      </View>
    </ScreenContainer>
  );
};

export default QuestionsView;

const styles = StyleSheet.create({
  con: {
    paddingHorizontal: sizes[16],
  },
  bottomView: {
    justifyContent: 'space-between',
    width: '100%',
    flexDirection: 'row',
  },
});
