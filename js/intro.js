import {changeScreen, render} from './utils.js';
import greeting from './greeting.js';

const template = `
  <section class="intro">
    <button class="intro__asterisk asterisk" type="button"><span class="visually-hidden">Продолжить</span>*</button>
    <p class="intro__motto"><sup>*</sup> Это не фото. Это рисунок маслом нидерландского художника-фотореалиста Tjalf Sparnaay.</p>
  </section>
`;

const element = render(template);

const startButton = element.querySelector(`.intro__asterisk`);

startButton.addEventListener(`click`, () => {
  changeScreen(greeting);
});

export default element;
