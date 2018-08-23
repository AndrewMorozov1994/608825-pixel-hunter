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
  MAX: 9
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
  if (countLevel <= LEVEL.INITIAL) {
    return LEVEL.INITIAL;
  }

  if (countLevel >= LEVEL.MAX) {
    return LEVEL.MAX;
  }

  return countLevel;
};

export {changeLevel, calculateAnswerTimeType, calculateScores, calculateLives};
