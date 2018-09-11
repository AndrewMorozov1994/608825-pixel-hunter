import {questions} from '../data/data.js';
import {state, Timer} from '../game-count.js';
import createTimer from '../data/timer.js';

export default class GameModel {
  get stat() {
    return this._stat;
  }

  init() {
    this._stat = Object.assign({}, state, {
      question: [...questions]
    });
  }

  nextGame() {
    this._stat = Object.assign({}, this._stat, {
      question: questions[this._stat.currentQuestion + 1]
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
      timer: Timer.INITIAL
    });
  }
}
