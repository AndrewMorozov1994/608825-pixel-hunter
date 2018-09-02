import {changeScreen, render} from './utils.js';
import greeting from './greeting.js';
import backButtonTemplate from './tempates/backbutton.js';
import {state, Level, Initial} from './game-count.js';
import renderGameScreen from './components/render-game-screen.js';
import {answersTextTypeInitial} from './data/data.js';

const template = `
<header class="header">
    ${backButtonTemplate}
  </header>
  <section class="rules">
    <h2 class="rules__title">Правила</h2>
    <ul class="rules__description">
      <li>Угадай 10 раз для каждого изображения фото
        <img class="rules__icon" src="img/icon-photo.png" width="32" height="31" alt="Фото"> или рисунок
        <img class="rules__icon" src="img/icon-paint.png" width="32" height="31" alt="Рисунок"></li>
      <li>Фотографиями или рисунками могут быть оба изображения.</li>
      <li>На каждую попытку отводится 30 секунд.</li>
      <li>Ошибиться можно не более 3 раз.</li>
    </ul>
    <p class="rules__ready">Готовы?</p>
    <form class="rules__form">
      <input class="rules__input" type="text" placeholder="Ваше Имя">
      <button class="rules__button  continue" type="submit" disabled>Go!</button>
    </form>
  </section>`;

const element = render(template);

const inputName = element.querySelector(`.rules__input`);
const continueButton = element.querySelector(`.rules__button`);
const backButton = element.querySelector(`.back`);


inputName.addEventListener(`input`, () => {
  let name = inputName.value;
  continueButton.disabled = !name.length;
});

export const seeGreetingScreen = (backBtn, callback) => {
  backBtn.addEventListener(`click`, ()=> {
    if (callback) {
      callback();
    }
    changeScreen(greeting);
    state.currentQuestion = Level.INITIAL;
    state.lives = Initial.LIVES;
    state.answers = [];
    state.answersTextType = answersTextTypeInitial.slice();
  });
};

seeGreetingScreen(backButton);
continueButton.addEventListener(`click`, () => {
  changeScreen(renderGameScreen(state));
});

export default element;
