import {questions, answersTextTypeInitial} from '../data/data.js';
import renderHeader from '../tempates/render-header.js';
import renderQuestion from '../tempates/render-question.js';
import {render} from '../utils.js';
import {questionTypes} from '../data/data.js';
import {changeScreen} from '../utils.js';
import {state, changeLevel} from '../game-count.js';
import {seeGreetingScreen} from '../rules.js';
import stats from '../stats.js';
import {chooseAnswer} from '../data/answers.js';
import renderStats from '../tempates/render-stats.js';

const renderGameScreen = (stat) => {
  const {lives, currentQuestion, answersTextType} = stat;
  const question = questions[currentQuestion];

  const template = `
  ${renderHeader(lives)}
  <section class="game">
    ${renderQuestion(question)}
        ${renderStats(answersTextType)}
      </section>
  `;

  const element = render(template);

  const gameTitle = element.querySelector(`.game__task`).innerHTML;
  const form = element.querySelector(`form`);
  const gameAnswers = element.querySelectorAll(`input`);

  switch (gameTitle) {

    case questionTypes.TWO_IMG:
      const seeGameTwo = (evt) => {
        if ([...gameAnswers].filter((el) => el.checked).length === 2) {
          chooseAnswer(evt, element);
          seeNextSlide();
        }
      };
      form.addEventListener(`click`, seeGameTwo);
      break;

    case questionTypes.PHOTO_OR_PAINT:
      for (let i = 0; i < gameAnswers.length; i++) {
        gameAnswers[i].addEventListener(`click`, (evt) => {
          chooseAnswer(evt, element);
          seeNextSlide();
        });
      }
      break;

    case questionTypes.FIND_PAINT:
      for (let i = 0; i < gameAnswers.length; i++) {
        gameAnswers[i].addEventListener(`click`, (evt) => {
          chooseAnswer(evt, element);
          seeNextSlide();
        });
      }
      break;
    default:
      return ``;
  }

  const seeNextSlide = () => {
    if (state.lives >= 0 && state.currentQuestion <= 9) {
      changeScreen(renderGameScreen(state));
    } else {
      changeScreen(stats(state));
    }
    resetGame();
  };

  const backButton = element.querySelector(`.back`);
  setTimeout(() => seeGreetingScreen(backButton), 0);

  const resetGame = () => {
    form.reset();
  };
console.log(answersTextType);
console.log(answersTextTypeInitial);
  state.currentQuestion = changeLevel(state.currentQuestion);

  return element;
};

export default renderGameScreen;
