import ConfirmView from '../view/modal-confirm-view.js';

export default class Confirm {
  constructor() {
    this._view = new ConfirmView();
    this._view.onOk = this.onOk.bind(this);
    this._view.onCancel = this.onCancel.bind(this);
    this._view.onClose = this.onCancel.bind(this);
    this._element = this._view.element.children[0];
    document.body.append(this._element);
  }

  onOk() {
    this.isOk();
    this.onCancel();
  }

  onCancel() {
    document.body.removeChild(this._element);
  }

  isOk() {}
}
