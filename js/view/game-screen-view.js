import AbstractView from '../abstract-view.js';
import renderQuestion from '../tempates/render-question.js';
import renderStats from '../tempates/render-stats.js';
import {questionTypes} from '../data/data.js';
import {chooseAnswer} from '../data/answers.js';
import {loadedQuestions} from '../application.js';
const checkedInputQuantity = 2;

export default class GameView extends AbstractView {
  constructor(stat) {
    super();
    this._stat = stat;
  }

  get template() {
    const {currentQuestion, answersTextType} = this._stat;
    const question = loadedQuestions[currentQuestion];

    return `
    <section class="game">
       ${renderQuestion(question)}
       ${renderStats(answersTextType)}
     </section>
  `;
  }

  bind() {
    const gameTitle = this.element.querySelector(`.game__task`).innerHTML;
    const form = this.element.querySelector(`form`);
    const gameAnswers = this.element.querySelectorAll(`input`);

    switch (gameTitle) {

      case questionTypes.TWO_IMG:
        const seeGameTwo = (evt) => {
          if ([...gameAnswers].filter((el) => el.checked).length === checkedInputQuantity) {
            chooseAnswer(evt, this.element, this._stat);
            this.onAnswer();
          }
        };
        form.addEventListener(`click`, seeGameTwo);
        break;

      case questionTypes.PHOTO_OR_PAINT:
        for (let i = 0; i < gameAnswers.length; i++) {
          gameAnswers[i].addEventListener(`click`, (evt) => {
            chooseAnswer(evt, this.element, this._stat);
            this.onAnswer();
          });
        }
        break;

      case questionTypes.FIND_PAINT:
        for (let i = 0; i < gameAnswers.length; i++) {
          gameAnswers[i].addEventListener(`click`, (evt) => {
            chooseAnswer(evt, this.element, this._stat);
            this.onAnswer();
          });
        }
        break;

      case questionTypes.FIND_PHOTO:
        for (let i = 0; i < gameAnswers.length; i++) {
          gameAnswers[i].addEventListener(`click`, (evt) => {
            chooseAnswer(evt, this.element, this._stat);
            this.onAnswer();
          });
        }
        break;
    }
  }
  onAnswer() {}
}
