import IntroView from '../view/intro-view.js';
import Router from '../application.js';

export default class IntroScreen {
  constructor() {
    this.view = new IntroView();
    this.view.onClickNext = () => {
      Router.showGreeting();
    };
  }

  get element() {
    return this.view.element;
  }
}
