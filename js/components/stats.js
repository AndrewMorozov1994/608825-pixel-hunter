import StatsView from '../view/stats-view.js';
import Router from '../application.js';

export default class StatsScreen {
  constructor(stat) {
    this.view = new StatsView(stat);
    this.view.onBack = () => {
      Router.showGreeting();
    };
  }

  get element() {
    return this.view.element;
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
