import {state} from '../game-count.js';
import {loadQuestions} from '../application.js';

const WRONG = 0;
const CORRECT = 1;

const AnswersText = {
  TWO_IMG: `Угадайте для каждого изображения фото или рисунок?`,
  PHOTO_OR_PAINT: `Угадай, фото или рисунок?`,
  FIND_PAINT: `Найдите рисунок среди изображений`,
  FIND_PHOTO: `Найдите фото среди изображений`
};

const AnswersType = {
  PAINT: `painting`,
  PHOTO: `photo`
};

export const chooseAnswer = (evt, element, stat) => {

  switch (loadQuestions[stat.currentQuestion].question) {
    case AnswersText.TWO_IMG:
      const quest = loadQuestions[stat.currentQuestion];
      const labelOptions = element.querySelectorAll(`input:checked`);

      if (labelOptions[0].value === quest.answers[0].type && labelOptions[1].value === quest.answers[1].type) {
        state.answers.push(CORRECT);
      } else {
        state.answers.push(WRONG);
      }

      break;

    case AnswersText.PHOTO_OR_PAINT:

      const question = loadQuestions[stat.currentQuestion];
      const label = evt.target.closest(`.game__answer`);
      if (label === null) {
        return;
      }
      const input = label.querySelector(`input`);

      if (input.value === question.answers[0].type) {
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
      const inputPainting = labelOp.querySelector(`input`);
      if (inputPainting.value === AnswersType.PAINT) {
        state.answers.push(CORRECT);
      } else {
        state.answers.push(WRONG);
      }
      break;

    case AnswersText.FIND_PHOTO:

      const labelOpPhoto = evt.target.closest(`.game__option`);
      if (labelOpPhoto === null) {
        return;
      }
      const inputPhoto = labelOpPhoto.querySelector(`input`);
      if (inputPhoto.value === AnswersType.PHOTO) {
        state.answers.push(CORRECT);
      } else {
        state.answers.push(WRONG);
      }
      break;
  }
};
