import StatsView from '../view/stats-view.js';
import headerScreen from './header.js';

export default class StatsScreen {
  constructor(state) {
    this.view = new StatsView(state);
  }

  get element() {
    const element = this.view.element;
    element.prepend(headerScreen().element);
    return element;
  }
}
