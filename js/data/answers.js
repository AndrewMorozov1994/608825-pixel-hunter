import {questions, answerss} from '../data/data.js';
import {STATE, calculateLives} from '../gameCount.js';
import {questionTypes} from './data.js';
import answersTypes from '../data/answersTypes.js';

export const chooseAnswer = (evt, element) => {
  const gameTitle = element.querySelector(`.game__task`).innerHTML;

  switch (gameTitle) {
    case questionTypes.TWO_IMG:
      const quest = questions[STATE.currentQuestion - 1];
      const labelOptions = element.querySelectorAll(`input:checked`);

      if (labelOptions[0].value === quest.options[0].type && labelOptions[1].value === quest.options[1].type) {
        STATE.answers.push(2);
      } else {
        STATE.answers.push(0);
      }

      break;

    case questionTypes.PHOTO_OR_PAINT:

      const question = questions[STATE.currentQuestion - 1];
      const label = evt.target.closest(`.game__answer`);
      if (label === null) {
        return;
      }
      const input = label.querySelector(`input`);

      if (input.value === question.option.type) {
        STATE.answers.push(2);
      } else {
        STATE.answers.push(0);
      }

      break;
      // Найти Изображение

    case questionTypes.FIND_PAINT:

      const labelOp = evt.target.closest(`.game__option`);
      if (labelOp === null) {
        return;
      }
      if (labelOp.classList.contains(`game__option--selected`)) {
        STATE.answers.push(2);
      } else {
        STATE.answers.push(0);
      }
      break;
  }

  const getTypeAnswer = (state) => {
    switch (state.answers[state.answers.length - 1]) {
      case 0:
        return answersTypes.WRONG;
      case 1:
        return answersTypes.SLOW;
      case 2:
        return answersTypes.CORRECT;
      case 3:
        return answersTypes.FAST;
    }
  };

  answerss[STATE.currentQuestion - 1] = getTypeAnswer(STATE);

  STATE.lives = calculateLives(STATE.lives, STATE.answers[STATE.answers.length - 1]);
};
