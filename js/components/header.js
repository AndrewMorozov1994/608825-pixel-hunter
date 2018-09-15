import HeaderView from '../view/header-view.js';
import Router from '../application.js';
import {state, Level, Initial} from '../game-count.js';
import {answersTextTypeInitial} from '../data/data.js';
import Confirm from './modal-confirm.js';

export default (stat) => {
  const headerScreen = new HeaderView(stat);

  headerScreen.goBack = () => {
    if (!stat) {
      Router.showGreeting();
      return;
    }

    const confirm = new Confirm();
    confirm.isOk = () => {
      Router.showGreeting();
    };
    state.currentQuestion = Level.INITIAL;
    state.lives = Initial.LIVES;
    state.answers = [];
    state.answersTextType = answersTextTypeInitial.slice();
  };
  return headerScreen;

};
