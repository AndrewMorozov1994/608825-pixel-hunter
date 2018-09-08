import {changeScreen} from './utils.js';
import greeting from './greeting.js';
import {state, Level, Initial} from './game-count.js';
import renderGameScreen from './components/render-game-screen.js';
import {answersTextTypeInitial} from './data/data.js';
import RulesView from './view/rules-view.js';

export default () => {
  const rulesScreen = new RulesView();
  rulesScreen.onClickNext = () => {
    changeScreen(renderGameScreen(state));
  };

  return rulesScreen.element;
};

export const seeGreetingScreen = (callback) => {
  if (callback) {
    callback();
  }
  changeScreen(greeting);
  state.currentQuestion = Level.INITIAL;
  state.lives = Initial.LIVES;
  state.answers = [];
  state.answersTextType = answersTextTypeInitial.slice();
};
