import HeaderView from '../view/header-view.js';
import Router from '../application.js';
import {state, Level, Initial} from '../game-count.js';
import {answersTextTypeInitial} from '../data/data.js';
import Confirm from './modal-confirm.js';

const resetSettings = () => {
  state.currentQuestion = Level.INITIAL;
  state.lives = Initial.LIVES;
  state.answers = [];
  state.answersTextType = answersTextTypeInitial.slice();
};

export default (stat) => {
  const headerScreen = new HeaderView(stat);

  headerScreen.goBack = () => {
    if (!stat) {
      Router.showGreeting();
      resetSettings();
      return;
    }

    const confirm = new Confirm();
    confirm.isOk = () => {
      Router.showGreeting();
    };
    resetSettings();
  };
  return headerScreen;

};
