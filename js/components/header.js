import HeaderView from '../view/header-view.js';
import Router from '../application.js';

export default (stat) => {
  const headerScreen = new HeaderView(stat);

  headerScreen.goBack = () => {
    if (!stat) {
      Router.showIntro();
      return;
    }

    const back = document.confirm(`Хотите вернуться на экран приветствия? Все ваши ответы будут потеряны`);

    if (back) {
      Router.showIntro();
    }
  };
  return headerScreen;

};
