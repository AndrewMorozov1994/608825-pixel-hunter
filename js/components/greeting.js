import GreetingView from '../view/greeting-view.js';
import Router from '../application.js';

export default class GreetingScreen {
  constructor() {
    this.view = new GreetingView();
    this.view.onClickNext = () => {
      Router.showRules();
    };
  }

  get element() {
    return this.view.element;
  }
}
