import GameView from '../view/game-screen-view.js';
import {Timer, changeLevel, calculateLives, calculateAnswerTimeType, getTypeAnswer} from '../game-count.js';
import Router from '../application.js';
import GameModel from '../model/game-model.js';
import headerScreen from './header.js';

export default class GameScreen {
  constructor(name) {
    this._model = new GameModel(name);
  }

  get element() {
    return this._root;
  }

  _stopTimer() {
    clearInterval(this._interval);
  }

  startGame() {
    this._model.init();

    this._root = document.createElement(`div`);
    this._header = headerScreen(this._model.state);
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

    if (this._model.tick().time === 0) {
      this._updateGame();
    }
  }

  _updateTimer() {
    this._header.changeTime(this._model.state);
  }

  _updateLives() {
    this._header.changeLives(this._model.state);
  }

  _updateGame() {
    this._model.nextGame();
    this._runTimer();
    this._updateTimer();
    this._updateLives();
    const game = new GameView(this._model.state);

    if (this._game) {
      this._root.replaceChild(game.element, this._game.element);
    } else {
      this._root.appendChild(game.element);
    }
    this._game = game;

    game.onAnswer = this._answer.bind(this);
  }

  _answer() {
    this._stopTimer();
    const form = this.element.querySelector(`form`);

    const resetGame = () => {
      form.reset();
    };

    const answer = this._model.state.answers[this._model.state.answers.length - 1];

    if (answer === 1) {
      this._model.state.answers[this._model.state.answers.length - 1] = calculateAnswerTimeType(this._model.tick().time);
    } else {
      this._model.state.answers[this._model.state.answers.length - 1] = 0;
    }

    this._model.state.answersTextType[this._model.state.currentQuestion] = getTypeAnswer(this._model.state);
    this._model.state.lives = calculateLives(this._model.state.lives, answer);
    this._model.state.currentQuestion = changeLevel(this._model.state.currentQuestion);

    if (this._model.state.lives >= 0 && this._model.state.currentQuestion <= 9) {
      this._updateGame();
    } else {
      Router.finish(this._model.state, this._model._playerName);
    }
    resetGame();
  }
}
