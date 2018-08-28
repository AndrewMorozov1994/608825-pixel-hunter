import {questions} from '../data/data.js';
import renderHeader from '../tempates/renderHeader.js';
import renderQuestion from '../tempates/renderQuestion.js';
import {render} from '../utils.js';
import {questionTypes} from '../data/data.js';
import {changeScreen} from '../utils.js';
import {STATE, changeLevel} from '../gameCount.js';
import {seeGreetingScreen} from '../rules.js';
import stats from '../stats.js';

const renderGameScreen = (state) => {
  const {lives, currentQuestion} = state;
  const question = questions[currentQuestion];

  STATE.currentQuestion = changeLevel(STATE.currentQuestion);

  const template = `
  ${renderHeader(lives)}
    ${renderQuestion(question)}
  `;

  const element = render(template);

  const gameTitle = element.querySelector(`.game__task`).innerHTML;
  const form = element.querySelector(`form`);
  const gameAnswers = element.querySelectorAll(`input`);

  switch (gameTitle) {
    case questionTypes.TWO_IMG:
      const seeGameTwo = () => {
        if ([...gameAnswers].filter((el) => el.checked).length === 2) {
          seeNextSlide();
        }
      };
      form.addEventListener(`click`, seeGameTwo);
      break;
    case questionTypes.PHOTO_OR_PAINT:
      for (let i = 0; i < gameAnswers.length; i++) {
        gameAnswers[i].addEventListener(`click`, () => {
          seeNextSlide();
        });
      }
      break;
    case questionTypes.FIND_PAINT:
      for (let i = 0; i < gameAnswers.length; i++) {
        gameAnswers[i].addEventListener(`click`, () => {
          seeNextSlide();
        });
      }
      break;
    default:
      return ``;
  }

  const seeNextSlide = () => {
    if (STATE.currentQuestion <= questions.length -1) {
      changeScreen(renderGameScreen(STATE));
    } else {
      changeScreen(stats);
    }
    resetGame();
  };

  const backButton = element.querySelector(`.back`);
  setTimeout(() => seeGreetingScreen(backButton), 0);

  const resetGame = () => {
    form.reset();
  };

  return element;
};

export default renderGameScreen;
