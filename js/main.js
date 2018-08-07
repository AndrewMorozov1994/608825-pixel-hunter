'use strict';

const RIGHT_ARROW = 39;
const LEFT_ARROW = 37;

const mainElement = document.querySelector(`#main`);

// Добавляем кнопки переключения
document.querySelector(`body`).insertAdjacentHTML(`beforeEnd`, `
  <div class="arrows__wrap">
  <style>
    .arrows__wrap {
      position: absolute;
      top: 95px;
      left: 50%;
      margin-left: -56px;
    }
    .arrows__btn {
      background: none;
      border: 2px solid black;
      padding: 5px 20px;
    }
  </style>
  <button class="arrows__btn arrows__btn--back"><-</button>
  <button class="arrows__btn arrows__btn--next">-></button>
</div>`);

// Находим кнопки переключения
const arrowWrapper = document.querySelector(`.arrows__wrap`);
const nextSlide = arrowWrapper.querySelector(`.arrows__btn--next`);
const backSlide = arrowWrapper.querySelector(`.arrows__btn--back`);
//

const selectSlide = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element.cloneNode(true));
};

const screens = Array.from(document.querySelectorAll(`template`)).map((it) => it.content);

let current = 0;
const select = (index) => {
  index = index < 0 ? screens.length - 1 : index;
  index = index >= screens.length ? 0 : index;
  current = index;
  selectSlide(screens[current]);
};

document.addEventListener(`keydown`, (evt) => {
  switch (evt.keyCode) {
    case RIGHT_ARROW:
      select(current + 1);
      break;
    case LEFT_ARROW:
      select(current - 1);
      break;
  }
});

nextSlide.addEventListener(`click`, () => {
  select(current + 1);
});

backSlide.addEventListener(`click`, () => {
  select(current - 1);
});

select(1);

