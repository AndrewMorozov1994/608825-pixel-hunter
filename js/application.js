import {changeScreen} from './utils.js';
import IntroScreen from './components/intro.js';
import GreetingScreen from './components/greeting.js';
import RulesScreen from './components/rules.js';
import StatsScreen from './components/stats.js';
import GameScreen from './components/render-game-screen.js';
import ErrorScreen from './components/error.js';
import Loader from './data/load.js';

export const loadedQuestions = [];
export default class Router {
  static start() {
    Router.showIntro();
    Loader.loadData()
      .then((it) => loadedQuestions.push(...it))
      .then(Router.showGreeting)
      .catch((error) => {
        Router.showError(error);
      });
  }

  static finish(state, player) {
    Loader.saveResults(state, player)
      .then(() => Loader.loadResults(player))
      .then((result) => {
        Router.showStats(result);
      })
      .catch((error) => {
        Router.showError(error);
      });
  }

  static showIntro() {
    const introScreen = new IntroScreen();
    changeScreen(introScreen.element);
  }

  static showGreeting() {
    const greetingScreen = new GreetingScreen();
    changeScreen(greetingScreen.element);
  }

  static showRules() {
    const rulesScreen = new RulesScreen();
    changeScreen(rulesScreen.element);
  }

  static showGame(name) {
    const gameScreen = new GameScreen(name);
    gameScreen.startGame();
    changeScreen(gameScreen.element);
  }

  static showStats(result) {
    const statsScreen = new StatsScreen(result);
    changeScreen(statsScreen.element);
  }

  static showError(error) {
    const errorScreen = new ErrorScreen(error);
    changeScreen(errorScreen.element);
  }
}
