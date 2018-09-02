import answersTypes from '../data/answersTypes.js';

const func = (answers) => `<ul class="stats">
    ${answers.map((answer) => `<li class="stats__result stats__result--${answer || answersTypes.UNKNOWN}"></li>`).join(``)}
  </ul>`;

export default func;
