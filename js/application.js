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
  }

  static async load(next) {
    const loader = new Loader();
    try {
      const questData = await loader.loadData();
      loadedQuestions.push(...questData);
      next();
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

  static showIntro() {
    const introScreen = new IntroScreen();
    const nextScreen = () => {
      introScreen.element.classList.add(`intro--next`);
      setTimeout(() => Router.showGreeting(), 500);
    };
    changeScreen(introScreen.element);
    Router.load(nextScreen);
  }

  static showGreeting() {
    const greetingScreen = new GreetingScreen();
    changeScreen(greetingScreen.element);
    setTimeout(() => greetingScreen.element.querySelector(`.greeting`).classList.add(`greeting--show`), 10);
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
