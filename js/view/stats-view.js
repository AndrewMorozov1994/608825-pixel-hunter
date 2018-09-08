import AbstractView from '../abstract-view.js';
import {calculateScores} from '../game-count.js';
import backButtonTemplate from '../tempates/backbutton.js';
import renderStats from '../tempates/render-stats.js';

export default class StatsView extends AbstractView {
  constructor(stat) {
    super();
    this.stat = stat;
  }

  get template() {
    return `
      <header class="header">
        ${backButtonTemplate}
      </header>
      <section class="result">
          <h2 class="result__title">${this.stat.lives >= 0 ? `Победа!` : `Поражение`}</h2>
          <table class="result__table">
            <tr>
              <td class="result__number"></td>
              <td colspan="2">
                ${renderStats(this.stat.answersTextType)}
              </td>
              <td class="result__points">× 100</td>
              <td class="result__total">${calculateScores(this.stat.answers, this.stat.lives) - this.stat.lives * 50}</td>
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
              ${this.stat.lives >= 0 ? `<td class="result__extra">Бонус за жизни:</td>
              <td class="result__extra">${this.stat.lives} <span class="stats__result stats__result--alive"></span></td>
              <td class="result__points">× 50</td>
              <td class="result__total">${this.stat.lives * 50}</td>` : ``}
            </tr>
            <tr>
              <td></td>
              <td class="result__extra">Штраф за медлительность:</td>
              <td class="result__extra">2 <span class="stats__result stats__result--slow"></span></td>
              <td class="result__points">× 50</td>
              <td class="result__total">-100</td>
            </tr>
            <tr>
              <td colspan="5" class="result__total  result__total--final">${this.stat.lives >= 0 ? calculateScores(this.stat.answers, this.stat.lives) : `fail`}</td>
            </tr>
          </table>
        </section>`;
  }

  bind() {
    const backButton = this.element.querySelector(`.back`);

    backButton.addEventListener(`click`, () => {
      this.onBack();
    });
  }

  onBack() {}
}
