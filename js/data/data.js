import answersTypes from './answers-types.js';

export const questionTypes = {
  TWO_IMG: `Угадайте для каждого изображения фото или рисунок?`,
  PHOTO_OR_PAINT: `Угадай, фото или рисунок?`,
  FIND_PAINT: `Найдите рисунок среди изображений`,
  FIND_PHOTO: `Найдите фото среди изображений`
};

export const answersTextTypeInitial = new Array(10).fill(answersTypes.UNKNOWN);
