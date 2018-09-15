import AbstractView from '../abstract-view.js';
import {calculateScores} from '../game-count.js';
import renderStats from '../tempates/render-stats.js';

export default class StatsView extends AbstractView {
  constructor(stat) {
    super();
    this._stat = stat[stat.length - 1];
    this._prevState = stat[stat.length - 2];
  }

  get template() {
    return `
      <section class="result">
          <h2 class="result__title">${this._stat.lives >= 0 ? `Победа!` : `Поражение`}</h2>
          <table class="result__table">
            <tr>
              <td class="result__number"></td>
              <td colspan="2">
                ${renderStats(this._stat.answersTextType)}
              </td>
              <td class="result__points">× 100</td>
              <td class="result__total">${this._stat.answers.filter((el) => el > 0).length > 0 ? this._stat.answers.filter((el) => el > 0).length * 100 : 0}</td>
            </tr>
            <tr>
              <td></td>
              ${this._stat.answers.filter((el) => el === 3).length > 0 && this._stat.lives >= 0 ? `<td class="result__extra">Бонус за скорость:</td>
                <td class="result__extra">${this._stat.answers.filter((el) => el === 3).length} <span class="stats__result stats__result--fast"></span></td>
                <td class="result__points">× 50</td>
                <td class="result__total">${this._stat.answers.filter((el) => el === 3).length * 50}</td>` : ``}
            </tr>
            <tr>
              <td></td>
              ${this._stat.lives >= 0 ? `<td class="result__extra">Бонус за жизни:</td>
              <td class="result__extra">${this._stat.lives} <span class="stats__result stats__result--alive"></span></td>
              <td class="result__points">× 50</td>
              <td class="result__total">${this._stat.lives * 50}</td>` : ``}
            </tr>
            <tr>
              <td></td>
              ${this._stat.answers.filter((el) => el === 1).length > 0 ? `<td class="result__extra">Штраф за медлительность:</td>
              <td class="result__extra">${this._stat.answers.filter((el) => el === 1).length} <span class="stats__result stats__result--slow"></span></td>
              <td class="result__points">× 50</td>
              <td class="result__total">${this._stat.answers.filter((el) => el === 1).length * -50}</td>` : ``}
            </tr>
            <tr>
              <td colspan="5" class="result__total  result__total--final">${this._stat.lives >= 0 ? calculateScores(this._stat.answers, this._stat.lives) : `fail`}</td>
            </tr>
          </table>
          
          ${this._prevState ? `<table class="result__table">
            <tr>
              <td class="result__number"></td>
              <td colspan="2">
                ${renderStats(this._prevState.answersTextType)}
              </td>
              <td class="result__points">× 100</td>
              <td class="result__total">${this._prevState.answers.filter((el) => el > 0).length > 0 ? this._prevState.answers.filter((el) => el > 0).length * 100 : 0}</td>
            </tr>
            <tr>
              <td></td>
              ${this._prevState.answers.filter((el) => el === 3).length > 0 && this._prevState.lives >= 0 ? `<td class="result__extra">Бонус за скорость:</td>
                <td class="result__extra">${this._prevState.answers.filter((el) => el === 3).length} <span class="stats__result stats__result--fast"></span></td>
                <td class="result__points">× 50</td>
                <td class="result__total">${this._prevState.answers.filter((el) => el === 3).length * 50}</td>` : ``}
            </tr>
            <tr>
              <td></td>
              ${this._prevState.lives >= 0 ? `<td class="result__extra">Бонус за жизни:</td>
              <td class="result__extra">${this._prevState.lives} <span class="stats__result stats__result--alive"></span></td>
              <td class="result__points">× 50</td>
              <td class="result__total">${this._prevState.lives * 50}</td>` : ``}
            </tr>
            <tr>
              <td></td>
              ${this._prevState.answers.filter((el) => el === 1).length > 0 ? `<td class="result__extra">Штраф за медлительность:</td>
              <td class="result__extra">${this._prevState.answers.filter((el) => el === 1).length} <span class="stats__result stats__result--slow"></span></td>
              <td class="result__points">× 50</td>
              <td class="result__total">${this._prevState.answers.filter((el) => el === 1).length * -50}</td>` : ``}
            </tr>
            <tr>
              <td colspan="5" class="result__total  result__total--final">${this._prevState.lives >= 0 ? calculateScores(this._prevState.answers, this._prevState.lives) : `fail`}</td>
            </tr>
          </table>` : ``}
        </section>`;
  }

  bind() {
  }
}
