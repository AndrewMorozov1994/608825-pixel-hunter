import {state, Timer} from '../game-count.js';
import createTimer from '../data/timer.js';
import {loadedQuestions} from '../application.js';

export default class GameModel {
  constructor(playerName) {
    this._playerName = playerName;
  }

  get stat() {
    return this._stat;
  }

  get player() {
    return this._playerName;
  }

  init() {
    this._stat = Object.assign({}, state, {
      question: [...loadedQuestions]
    });
  }

  nextGame() {
    this._stat = Object.assign({}, this._stat, {
      question: loadedQuestions[this._stat.currentQuestion + 1]
    });
    this._resetTime();
    this._timer = createTimer(this._stat.time);

  }

  tick() {
    const result = this._timer.tick();

    this._stat = Object.assign({}, this._stat, {
      time: result.time
    });

    return result;
  }

  _resetTime() {
    this._stat = Object.assign({}, this._stat, {
      time: Timer.INITIAL
    });
  }
}
