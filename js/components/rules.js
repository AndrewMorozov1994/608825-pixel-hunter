import {state, Level, Initial} from '../game-count.js';
import {answersTextTypeInitial} from '../data/data.js';
import RulesView from '../view/rules-view.js';
import Router from '../application.js';
import headerScreen from './header.js';

export default class RulesScreen {
  constructor() {
    this.view = new RulesView();
    this.view.onClickNext = () => {
      Router.showGame();
    };
  }

  get element() {
    const element = this.view.element;
    element.prepend(headerScreen().element);
    return element;
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
