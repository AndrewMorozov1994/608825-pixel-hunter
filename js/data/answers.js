import {state} from '../game-count.js';

const Types = {
  WRONG: 0,
  CORRECT: 1
};

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

export const chooseAnswer = (evt, element, statistics, loadedQuestions) => {

  switch (loadedQuestions[statistics.currentQuestion].question) {
    case AnswersText.TWO_IMG:
      const quest = loadedQuestions[statistics.currentQuestion];
      const labelOptions = element.querySelectorAll(`input:checked`);

      if (labelOptions[0].value === quest.answers[0].type && labelOptions[1].value === quest.answers[1].type) {
        state.answers.push(Types.CORRECT);
      } else {
        state.answers.push(Types.WRONG);
      }

      break;

    case AnswersText.PHOTO_OR_PAINT:

      const question = loadedQuestions[statistics.currentQuestion];
      const label = evt.target.closest(`.game__answer`);
      if (label === null) {
        return;
      }
      const input = label.querySelector(`input`);

      if (input.value === question.answers[0].type) {
        state.answers.push(Types.CORRECT);
      } else {
        state.answers.push(Types.WRONG);
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
        state.answers.push(Types.CORRECT);
      } else {
        state.answers.push(Types.WRONG);
      }
      break;

    case AnswersText.FIND_PHOTO:

      const labelOrPhoto = evt.target.closest(`.game__option`);
      if (labelOrPhoto === null) {
        return;
      }
      const inputPhoto = labelOrPhoto.querySelector(`input`);
      if (inputPhoto.value === AnswersType.PHOTO) {
        state.answers.push(Types.CORRECT);
      } else {
        state.answers.push(Types.WRONG);
      }
      break;
  }
};
