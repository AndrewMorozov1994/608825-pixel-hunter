import {changeScreen} from '../utils.js';
import {seeGreetingScreen} from '../rules.js';
import stats from '../stats.js';
import GameView from '../view/game-screen-view.js';

const updateGame = (stat) => {
  const gameView = new GameView(stat);
  const form = gameView.element.querySelector(`form`);
  const resetGame = () => {
    form.reset();
  };

  gameView.onAnswer = () => {
    if (stat.lives >= 0 && stat.currentQuestion <= 9) {
      changeScreen(updateGame(stat));
    } else {
      changeScreen(stats(stat));
    }
    resetGame();
  };

  gameView.onBack = () => {
    seeGreetingScreen();
  };

  return gameView.element;
};

export default updateGame;
