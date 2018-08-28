import renderGameScreen from './components/renderGameScreen.js';
import {STATE} from './gameCount.js';

const element = renderGameScreen(STATE);

export default element;
// const backButton = element.querySelector(`.back`);
// const gameOneForm = element.querySelector(`.game__content`);


// // SetTimeout временно для себя
// const seeGameTwo = () => {
//   setTimeout(() => {
//     const gameAnswers = gameOneForm.querySelectorAll(`input`);
//     if ([...gameAnswers].filter((el) => el.checked).length === 2) {
//       changeScreen(gameTwo);
//       resetGameOne();
//     }
//   }, 500);
// };
//
// // Сбрасываем чекнутые поля
// const resetGameOne = () => {
//   gameOneForm.reset();
// };
//
// gameOneForm.addEventListener(`click`, seeGameTwo);
//
// setTimeout(() => seeGreetingScreen(backButton, resetGameOne), 0);
//
