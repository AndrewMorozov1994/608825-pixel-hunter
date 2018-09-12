import StatsView from '../view/stats-view.js';
import headerScreen from './header.js';

export default class StatsScreen {
  constructor(stat) {
    this.view = new StatsView(stat);
  }

  get element() {
    const element = this.view.element;
    element.prepend(headerScreen().element);
    return element;
  }
}

// const renderState = (stat) => {
//   const statsRender = new StatsView(stat);
//
//   statsRender.onBack = () => {
//     seeGreetingScreen();
//   };
//
//   return statsRender.element;
// };
//
// export default renderState;