import {seeGreetingScreen} from './rules.js';

import StatsView from './view/stats-view.js';

const renderState = (stat) => {
  const statsRender = new StatsView(stat);

  statsRender.onBack = () => {
    seeGreetingScreen();
  };

  return statsRender.element;
};

export default renderState;
