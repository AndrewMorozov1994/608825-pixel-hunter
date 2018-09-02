import {render} from './utils.js';
import {seeGreetingScreen, answersTextType} from './rules.js';
import button from './tempates/backbutton.js';
import renderStats from './tempates/renderStats.js';
import {calculateScores} from './gameCount.js';

const renderState = (stat) => {
  const template = `
<header class="header">
  ${button}
  </header>
  <section class="result">
    <h2 class="result__title">${stat.lives >= 0 ? `Победа!` : `Поражение`}</h2>
    <table class="result__table">
      <tr>
        <td class="result__number">1.</td>
        <td colspan="2">
          ${renderStats(answersTextType)}
        </td>
        <td class="result__points">× 100</td>
        <td class="result__total">${calculateScores(stat.answers, stat.lives) - stat.lives * 50}</td>
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Бонус за скорость:</td>
        <td class="result__extra">1 <span class="stats__result stats__result--fast"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">50</td>
      </tr>
      <tr>
        <td></td>
        ${stat.lives >= 0 ? `<td class="result__extra">Бонус за жизни:</td>
        <td class="result__extra">${stat.lives} <span class="stats__result stats__result--alive"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">${stat.lives * 50}</td>` : ``}
      </tr>
      <tr>
        <td></td>
        <td class="result__extra">Штраф за медлительность:</td>
        <td class="result__extra">2 <span class="stats__result stats__result--slow"></span></td>
        <td class="result__points">× 50</td>
        <td class="result__total">-100</td>
      </tr>
      <tr>
        <td colspan="5" class="result__total  result__total--final">${stat.lives >= 0 ? calculateScores(stat.answers, stat.lives) : `fail`}</td>
      </tr>
    </table>
  </section>`;

  const element = render(template);
  const backButton = element.querySelector(`.back`);

  setTimeout(() => seeGreetingScreen(backButton), 0);

  return element;
};

export default renderState;
