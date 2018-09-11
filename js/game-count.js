import {answersTextTypeInitial} from './data/data.js';

const POINT_VALUE = 50;

const Answer = {
  timeType: {
    WRONG: 0,
    SLOW: 1,
    NORMAL: 2,
    FAST: 3
  },
  timing: {
    WRONG: 0,
    SLOW: 10,
    NORMAL: 20
  }
};

const Level = {
  INITIAL: 0,
  MAX: 10,
  SPECIAL: -1
};

const Initial = {
  LIVES: 3,
  CURRENT_QUESTION: 0,
};

const Timer = {
  INITIAL: 30,
  CRITICAL: 10,
  LEFT: 0,
  FREQUENCY: 1000
};

const state = {
  lives: 3,
  answers: [],
  currentQuestion: 0,
  answersTextType: answersTextTypeInitial.slice(),
  time: Timer.INITIAL
};

// На входе текущее количсевто оставшихся попыток и тип ответа
const calculateLives = (lifeValue, answerType) => {
  const newLifeValue = lifeValue - !answerType;
  return newLifeValue;
};

const calculateScores = (answers, lives) => {
  if (lives < 0) {
    return 0;
  }

  const result = (answers.reduce((accum, item) => accum + item) + lives) * POINT_VALUE;
  return result;
};

const calculateAnswerTimeType = (time) => {
  if (time <= Answer.timing.WRONG) {
    return Answer.timeType.WRONG;
  }

  if (time < Answer.timing.SLOW) {
    return Answer.timeType.SLOW;
  }

  if (time <= Answer.timing.NORMAL) {
    return Answer.timeType.NORMAL;
  }

  return Answer.timeType.FAST;
};

const changeLevel = (countLevel) => {
  return countLevel + 1;
};

export {state, Level, Initial, Timer, changeLevel, calculateAnswerTimeType, calculateScores, calculateLives};

