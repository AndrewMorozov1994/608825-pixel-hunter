import {changeScreen, crossFade} from './utils.js';
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
    const introScreen = new IntroScreen();
    const greetingScreen = new GreetingScreen();
    const runCrossFade = crossFade(introScreen.element, greetingScreen.element);
    Router.load();
    runCrossFade();
  }

  static async load() {
    const loader = new Loader();
    try {
      const questData = await loader.loadData();
      loadedQuestions.push(...questData);
    } catch (err) {
      Router.showError(err);
    }
  }

  static async finish(state, player) {
    const loader = new Loader();
    try {
      await loader.saveResults(state, player);
      const result = await loader.loadResults(player);
      Router.showStats(result);
    } catch (err) {
      Router.showError(err);
    }
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
    const gameScreen = new GameScreen(name, loadedQuestions);
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
