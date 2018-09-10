import {changeScreen} from '../utils.js';
import {state, Level, Initial} from '../game-count.js';
import renderGameScreen from './render-game-screen.js';
import {answersTextTypeInitial} from '../data/data.js';
import RulesView from '../view/rules-view.js';
import Router from '../application.js';

export default class RulesScreen {
  constructor() {
    this.view = new RulesView();
    this.view.onClickNext = () => {
      changeScreen(renderGameScreen(state));
    };
  }

  get element() {
    return this.view.element;
  }
}

export const seeGreetingScreen = (callback) => {
  if (callback) {
    callback();
  }
  Router.showGreeting();
  state.currentQuestion = Level.INITIAL;
  state.lives = Initial.LIVES;
  state.answers = [];
  state.answersTextType = answersTextTypeInitial.slice();
};
