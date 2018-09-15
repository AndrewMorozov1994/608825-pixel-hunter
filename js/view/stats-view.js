import AbstractView from '../abstract-view.js';
import {calculateScores} from '../game-count.js';
import renderStats from '../tempates/render-stats.js';

export default class StatsView extends AbstractView {
  constructor(stat) {
    super();
    this._stat = stat; // [stat.length - 1];
    // this._prevState = stat[stat.length - 2];
  }

  get template() {
    return this._stat.map((it) => {
      return `
      <section class="result">
          <h2 class="result__title">${it.lives >= 0 ? `Победа!` : `Поражение`}</h2>
          <table class="result__table">
            <tr>
              <td class="result__number"></td>
              <td colspan="2">
                ${renderStats(it.answersTextType)}
              </td>
              <td class="result__points">× 100</td>
              <td class="result__total">${it.answers.filter((el) => el > 0).length > 0 ? it.answers.filter((el) => el > 0).length * 100 : 0}</td>
            </tr>
            <tr>
              <td></td>
              ${it.answers.filter((el) => el === 3).length > 0 && it.lives >= 0 ? `<td class="result__extra">Бонус за скорость:</td>
                <td class="result__extra">${it.answers.filter((el) => el === 3).length} <span class="stats__result stats__result--fast"></span></td>
                <td class="result__points">× 50</td>
                <td class="result__total">${it.answers.filter((el) => el === 3).length * 50}</td>` : ``}
            </tr>
            <tr>
              <td></td>
              ${it.lives >= 0 ? `<td class="result__extra">Бонус за жизни:</td>
              <td class="result__extra">${it.lives} <span class="stats__result stats__result--alive"></span></td>
              <td class="result__points">× 50</td>
              <td class="result__total">${it.lives * 50}</td>` : ``}
            </tr>
            <tr>
              <td></td>
              ${it.answers.filter((el) => el === 1).length > 0 ? `<td class="result__extra">Штраф за медлительность:</td>
              <td class="result__extra">${it.answers.filter((el) => el === 1).length} <span class="stats__result stats__result--slow"></span></td>
              <td class="result__points">× 50</td>
              <td class="result__total">${it.answers.filter((el) => el === 1).length * -50}</td>` : ``}
            </tr>
            <tr>
              <td colspan="5" class="result__total  result__total--final">${it.lives >= 0 ? calculateScores(it.answers, it.lives) : `fail`}</td>
            </tr>
          </table>
          
    
        </section>`;
    });
  }

  bind() {
  }
}
