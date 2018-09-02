import answersTypes from '../data/answers-types.js';

const renderStats = (answers) => `<ul class="stats">
    ${answers.map((answer) => `<li class="stats__result stats__result--${answer || answersTypes.UNKNOWN}"></li>`).join(``)}
  </ul>`;

export default renderStats;
