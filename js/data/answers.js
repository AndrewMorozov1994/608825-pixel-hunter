import {questions} from '../data/data.js';
import {state} from '../game-count.js';

const WRONG = 0;
const CORRECT = 2;

const AnswersText = {
  TWO_IMG: `Угадайте для каждого изображения фото или рисунок?`,
  PHOTO_OR_PAINT: `Угадай, фото или рисунок?`,
  FIND_PAINT: `Найдите рисунок среди изображений?`
};

export const chooseAnswer = (evt, element) => {

  switch (questions[state.currentQuestion].type) {
    case AnswersText.TWO_IMG:
      const quest = questions[state.currentQuestion];
      const labelOptions = element.querySelectorAll(`input:checked`);

      if (labelOptions[0].value === quest.options[0].type && labelOptions[1].value === quest.options[1].type) {
        state.answers.push(CORRECT);
      } else {
        state.answers.push(WRONG);
      }

      break;

    case AnswersText.PHOTO_OR_PAINT:

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

    case AnswersText.FIND_PAINT:

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
};
