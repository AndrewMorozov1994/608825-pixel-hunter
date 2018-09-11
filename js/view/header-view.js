import AbstractView from '../abstract-view.js';
import renderLives from '../tempates/render-lives.js';
import backButtonTemplate from '../tempates/backbutton.js';
import {Timer} from '../game-count.js';

const renderHeaderContent = ({time, lives}) => {
  return `<h1 class='game__timer'>${time}</h1>
          ${renderLives(lives)}
          `;
};
export default class HeaderView extends AbstractView {
  constructor(stat) {
    super();
    this._stat = stat;
  }

  get template() {
    return `<header class='header'>
      ${backButtonTemplate}
      ${this._stat ? renderHeaderContent(this._stat) : ``}
    </header>`;
  }

  changeTime({time}) {
    if (time <= Timer.CRITICAL) {
      this._timer.style.color = `red`;
    } else {
      this._timer.style.color = `black`;
    }

    this._timer.textContent = time;
  }

  bind() {
    const {element} = this;

    this._timer = element.querySelector(`.game__timer`);
    this._lives = element.querySelector(`.game__lives`);
    const backButton = element.querySelector(`.back`);

    backButton.addEventListener(`click`, () => {
      this.goBack();
    });
  }
}
