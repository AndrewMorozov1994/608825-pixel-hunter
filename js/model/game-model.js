import {state, Timer} from '../game-count.js';
import createTimer from '../data/timer.js';
import {loadedQuestions} from '../application.js';

export default class GameModel {
  constructor(playerName) {
    this._playerName = playerName;
  }

  get state() {
    return this._state;
  }

  get player() {
    return this._playerName;
  }

  init() {
    this._state = Object.assign({}, state, {
      question: [...loadedQuestions]
    });
  }

  nextGame() {
    this._state = Object.assign({}, this._state, {
      question: loadedQuestions[this._state.currentQuestion + 1]
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
