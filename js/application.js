import {changeScreen} from './utils.js';
import IntroScreen from './components/intro.js';
import GreetingScreen from './components/greeting.js';
import RulesScreen from './components/rules.js';
import StatsScreen from './components/stats.js';

export default class Router {
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

  static showStats(stat) {
    const statsScreen = new StatsScreen(stat);
    changeScreen(statsScreen.element);
  }
}
