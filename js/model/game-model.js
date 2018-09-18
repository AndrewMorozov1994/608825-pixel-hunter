import {state, Timer} from '../game-count.js';
import createTimer from '../data/timer.js';

export default class GameModel {
  constructor(playerName, loadedQuestions) {
    this._playerName = playerName;
    this._loaded = loadedQuestions;
  }

  get state() {
    return this._state;
  }

  get player() {
    return this._playerName;
  }

  init() {
    this._state = Object.assign({}, state, {
      question: [...this._loaded]
    });
  }

  nextGame() {
    this._state = Object.assign({}, this._state, {
      question: this._loaded[this._state.currentQuestion + 1]
    });
    this._resetTime();
    this._timer = createTimer(this._state.time);

  }

  tick() {
    const result = this._timer.tick();

    this._state = Object.assign({}, this._state, {
      time: result.time
    });

    return result;
  }

  _resetTime() {
    this._state = Object.assign({}, this._state, {
      time: Timer.INITIAL
    });
  }
}
