// import {changeScreen} from '../utils.js';
import GameView from '../view/game-screen-view.js';
import answersTypes from '../data/answers-types.js';
import {Timer, changeLevel, calculateLives} from '../game-count.js';
import Router from '../application.js';
import GameModel from '../model/game-model.js';
import headerScreen from './header.js';

export default class GameScreen {
  constructor() {
    this._model = new GameModel();
  }

  get element() {
    return this._root;
  }

  startGame() {
    this._model.init();

    this._root = document.createElement(`div`);
    this._header = headerScreen(this._model.stat);
    this._root.appendChild(this._header.element);

    this._updateGame();
  }

  _runTimer() {
    this._interval = setInterval(() => {
      if (this._model.tick().done) {
        this._answer();
      }
      this._updateTimer();
    }, Timer.FREQUENCY);
  }

  _stopTimer() {
    clearInterval(this._interval);
  }

  _updateTimer() {
    this._header.changeTime(this._model.stat);
  }

  _updateGame() {
    this._model.nextGame();
    console.log(this._model.stat.currentQuestion);
    this._runTimer();
    this._updateTimer();
    const game = new GameView(this._model.stat);

    const gameElement = game.element.children[0];
    if (this._game) {
      this._root.replaceChild(gameElement, this._game);
    } else {
      this._root.appendChild(gameElement);
    }

    this._game = gameElement;
    game.onAnswer = this._answer.bind(this);

    return game.element;
  }

  _answer() {
    this._stopTimer();

    const form = this.element.querySelector(`form`);

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
    this._model.stat.answersTextType[this._model.stat.currentQuestion] = getTypeAnswer(this._model.stat);
    this._model.stat.lives = calculateLives(this._model.stat.lives, this._model.stat.answers[this._model.stat.answers.length - 1]);
    this._model.stat.currentQuestion = changeLevel(this._model.stat.currentQuestion);

    if (this._model.stat.lives >= 0 && this._model.stat.currentQuestion <= 9) {
      this._updateGame();
    } else {
      Router.showStats(this._model.stat);
    }
    resetGame();
  }
}

// const updateGame = (stat) => {
//   const gameView = new GameView(stat);
//   const form = gameView.element.querySelector(`form`);
//   const resetGame = () => {
//     form.reset();
//   };
//   const getTypeAnswer = (st) => {
//     switch (st.answers[st.answers.length - 1]) {
//       case 0:
//         return answersTypes.WRONG;
//       case 1:
//         return answersTypes.SLOW;
//       case 2:
//         return answersTypes.CORRECT;
//       case 3:
//         return answersTypes.FAST;
//       default:
//         return ``;
//     }
//   };
//
//   gameView.onAnswer = () => {
//     stat.answersTextType[stat.currentQuestion] = getTypeAnswer(stat);
//
//     stat.lives = calculateLives(stat.lives, stat.answers[stat.answers.length - 1]);
//     stat.currentQuestion = changeLevel(stat.currentQuestion);
//
//     if (stat.lives >= 0 && stat.currentQuestion <= 9) {
//       changeScreen(updateGame(stat));
//     } else {
//       Router.showStats(stat);
//     }
//     resetGame();
//   };
//
//   return gameView.element;
// };
//
// export default updateGame;
