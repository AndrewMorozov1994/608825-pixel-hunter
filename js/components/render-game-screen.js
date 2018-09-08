// import {questions} from '../data/data.js';
// import renderHeader from '../tempates/render-header.js';
// import renderQuestion from '../tempates/render-question.js';
// import {render} from '../utils.js';
// import {questionTypes} from '../data/data.js';
import {changeScreen} from '../utils.js';
import {state} from '../game-count.js';
// import {seeGreetingScreen} from '../rules.js';
import stats from '../stats.js';
// import {chooseAnswer} from '../data/answers.js';
// import renderStats from '../tempates/render-stats.js';
import GameView from '../view/game-screen-view.js';

const updateGame = (stat) => {
  const gameView = new GameView(stat);

  gameView.onAnswer = () => {
    if (stat.lives >= 0 && stat.currentQuestion <= 9) {
      changeScreen(updateGame(state));
    } else {
      changeScreen(stats(state));
    }
    // resetGame();
  };
  // const resetGame = () => {
  //   form.reset();
  // };

  return gameView.element;
};

export default updateGame;
