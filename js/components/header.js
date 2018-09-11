import HeaderView from '../view/header-view.js';
import Router from '../application.js';
import {state, Level, Initial} from '../game-count.js';
import {answersTextTypeInitial} from '../data/data.js';

export default (stat) => {
  const headerScreen = new HeaderView(stat);

  headerScreen.goBack = () => {
    Router.showIntro();
    state.currentQuestion = Level.INITIAL;
    state.lives = Initial.LIVES;
    state.answers = [];
    state.answersTextType = answersTextTypeInitial.slice();
  };
  return headerScreen;

};
