import {changeScreen} from '../utils.js';
import {seeGreetingScreen} from '../rules.js';
import stats from '../stats.js';
import GameView from '../view/game-screen-view.js';
import answersTypes from '../data/answers-types.js';
import {calculateLives, changeLevel} from '../game-count.js';

const updateGame = (stat) => {
  const gameView = new GameView(stat);
  const form = gameView.element.querySelector(`form`);
  const resetGame = () => {
    form.reset();
  };
  const getTypeAnswer = (st) => {
    switch (st.answers[st.answers.length - 1]) {
      case 0:
        return answersTypes.WRONG;
      case 1:
        return answersTypes.SLOW;
      case 2:
        return answersTypes.CORRECT;
      case 3:
        return answersTypes.FAST;
      default:
        return ``;
    }
  };

  gameView.onAnswer = () => {
    stat.answersTextType[stat.currentQuestion] = getTypeAnswer(stat);

    stat.lives = calculateLives(stat.lives, stat.answers[stat.answers.length - 1]);
    stat.currentQuestion = changeLevel(stat.currentQuestion);

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
