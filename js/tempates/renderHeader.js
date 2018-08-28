import backButtont from './backbutton.js';

const func = (lives) => {
  const template = `<header class="header">
  ${backButtont}
  <div class="game__timer">NN</div>
  <div class="game__lives">
  ${new Array(3 - lives)
    .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="31" height="27">`)
    .join(``)}
  ${new Array(lives)
    .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
    .join(``)}
  </div>
  </header>`;
  return template;
};

export default func;
