import RulesView from '../view/rules-view.js';
import Router from '../application.js';
import headerScreen from './header.js';

export default class RulesScreen {
  constructor() {
    this.view = new RulesView();
    this.view.onClickNext = (name) => {
      Router.showGame(name);
    };
  }

  get element() {
    const element = this.view.element;
    element.prepend(headerScreen().element);
    return element;
  }
}
