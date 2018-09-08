import AbstractView from '../abstract-view.js';
import {questions} from '../data/data.js';
import renderHeader from '../tempates/render-header.js';
import renderQuestion from '../tempates/render-question.js';
import renderStats from '../tempates/render-stats.js';
import {questionTypes} from '../data/data.js';
import {chooseAnswer} from '../data/answers.js';

export default class GameView extends AbstractView {
  constructor(stat) {
    super();
    this.stat = stat;
  }

  get template() {
    const {lives, currentQuestion, answersTextType} = this.stat;
    const question = questions[currentQuestion];

    return `
    ${renderHeader(lives)}
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
    const backButton = this.element.querySelector(`.back`);

    switch (gameTitle) {

      case questionTypes.TWO_IMG:
        const seeGameTwo = (evt) => {
          if ([...gameAnswers].filter((el) => el.checked).length === 2) {
            chooseAnswer(evt, this.element);
            this.onAnswer();
          }
        };
        form.addEventListener(`click`, seeGameTwo);
        break;

      case questionTypes.PHOTO_OR_PAINT:
        for (let i = 0; i < gameAnswers.length; i++) {
          gameAnswers[i].addEventListener(`click`, (evt) => {
            chooseAnswer(evt, this.element);
            this.onAnswer();
          });
        }
        break;

      case questionTypes.FIND_PAINT:
        for (let i = 0; i < gameAnswers.length; i++) {
          gameAnswers[i].addEventListener(`click`, (evt) => {
            chooseAnswer(evt, this.element);
            this.onAnswer();
          });
        }
        break;
    }

    backButton.addEventListener(`click`, () => {
      this.onBack();
    });
  }
  onAnswer() {}
  onBack() {}
}
