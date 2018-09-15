import AbstractView from '../abstract-view.js';
const ActionType = {
  OK: `ok`,
  CANCEL: `cancel`,
  CLOSE: `close`
};

export default class ConfirmView extends AbstractView {
  get template() {
    return `<section class="modal">
    <form class="modal__inner">
      <button class="modal__close" type="button" value="close">
        <span class="visually-hidden">Закрыть</span>
      </button>
      <h2 class="modal__title">Подтверждение</h2>
      <p class="modal__text">Вы уверены что хотите начать игру заново?</p>
      <div class="modal__button-wrapper">
        <button class="modal__btn" value="ok">Ок</button>
        <button class="modal__btn" value="cancel">Отмена</button>
      </div>
    </form>
  </section>
    `;
  }

  bind() {
    const modal = this.element.querySelector(`.modal`);
    modal.addEventListener(`click`, (evt) => {
      const action = evt.target.value;
      switch (action) {
        case ActionType.OK:
          this.onOk();
          break;

        case ActionType.CANCEL:
          this.onCancel();
          break;

        case ActionType.CLOSE:
          this.onClose();
          break;
      }
    });
  }
  onOk() {}
  onCancel() {}
  onClose() {}
}
