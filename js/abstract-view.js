import {render} from './utils.js';

export default class AbstractView {

  get template() {}

  render() {
    return render(this.template);
  }

  bind() {}

  get element() {
    if (!this._element) {
      this._element = this.render();
      this.bind();
    }
    return this._element;
  }
}
