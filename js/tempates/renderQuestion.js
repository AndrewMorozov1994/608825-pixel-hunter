import {questionTypes} from '../data/data.js';
import renderOption from './renderOption.js';
import renderOptionSelect from './renderOptionSelect.js';

const func = (question) => {
  switch (question.type) {
    case questionTypes.TWO_IMG:
      return `
          <p class="game__task">${questionTypes.TWO_IMG}</p>
          <form class="game__content">
            ${[...question.options].map(renderOption).join(``)}
          </form>
        `;

    case questionTypes.PHOTO_OR_PAINT:
      return `
        <p class="game__task">${questionTypes.PHOTO_OR_PAINT}</p>
        <form class="game__content game__content--wide">
          ${renderOption(question.option)}
        </form>`;

    case questionTypes.FIND_PAINT:
      return `
        <p class="game__task">${questionTypes.FIND_PAINT}</p>
        <form class="game__content game__content--triple">
           ${[...question.options].map(renderOptionSelect).join(``)}
        </form>`;
    default:
      return ``;
  }
};

export default func;
