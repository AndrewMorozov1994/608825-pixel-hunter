const POINT_VALUE = 50;

const ANSWER = {
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

const LEVEL = {
  INITIAL: 0,
  MAX: 10,
  SPECIAL: -1
};

const LIVES = {
  INITIAL: 3
};

const STATE = {
  lives: 3,
  answers: [],
  currentQuestion: 0,
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
  if (time <= ANSWER.timing.WRONG) {
    return ANSWER.timeType.WRONG;
  }

  if (time < ANSWER.timing.SLOW) {
    return ANSWER.timeType.SLOW;
  }

  if (time <= ANSWER.timing.NORMAL) {
    return ANSWER.timeType.NORMAL;
  }

  return ANSWER.timeType.FAST;
};

const changeLevel = (countLevel) => {
  if (countLevel >= LEVEL.MAX) {
    return LEVEL.SPECIAL;
  }

  return countLevel + 1;
};

export {LIVES, STATE, LEVEL, changeLevel, calculateAnswerTimeType, calculateScores, calculateLives};

