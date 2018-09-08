import {questions} from '../data/data.js';
import {state, calculateLives, changeLevel} from '../game-count.js';
import {questionTypes} from './data.js';
import answersTypes from './answers-types.js';

const WRONG = 0;
const CORRECT = 2;

export const chooseAnswer = (evt, element) => {
  const gameTitle = element.querySelector(`.game__task`).innerHTML;

  switch (gameTitle) {
    case questionTypes.TWO_IMG:
      const quest = questions[state.currentQuestion];
      console.log(quest);
      const labelOptions = element.querySelectorAll(`input:checked`);

      if (labelOptions[0].value === quest.options[0].type && labelOptions[1].value === quest.options[1].type) {
        state.answers.push(CORRECT);
      } else {
        state.answers.push(WRONG);
      }

      break;

    case questionTypes.PHOTO_OR_PAINT:

      const question = questions[state.currentQuestion];
      const label = evt.target.closest(`.game__answer`);
      if (label === null) {
        return;
      }
      const input = label.querySelector(`input`);

      if (input.value === question.option.type) {
        state.answers.push(CORRECT);
      } else {
        state.answers.push(WRONG);
      }

      break;
      // Найти Изображение

    case questionTypes.FIND_PAINT:

      const labelOp = evt.target.closest(`.game__option`);
      if (labelOp === null) {
        return;
      }
      if (labelOp.classList.contains(`game__option--selected`)) {
        state.answers.push(CORRECT);
      } else {
        state.answers.push(WRONG);
      }
      break;
  }

  const getTypeAnswer = (stat) => {
    switch (stat.answers[stat.answers.length - 1]) {
      case 0:
        return answersTypes.WRONG;
      case 1:
        return answersTypes.SLOW;
      case 2:
        return answersTypes.CORRECT;
      case 3:
        return answersTypes.FAST;
      default:
        return ``;
    }
  };

  state.answersTextType[state.currentQuestion] = getTypeAnswer(state);

  state.lives = calculateLives(state.lives, state.answers[state.answers.length - 1]);
  state.currentQuestion = changeLevel(state.currentQuestion);
};
