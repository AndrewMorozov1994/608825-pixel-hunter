const ANIMATION_DURATION = 3;

const render = (template) => {
  const wrapper = document.createElement(`div`);
  wrapper.innerHTML = template.trim();
  return wrapper;
};

const mainElement = document.querySelector(`#main`);

const changeScreen = (element) => {
  mainElement.innerHTML = ``;
  mainElement.appendChild(element);
};

const crossFade = (outElement, inElement) => {

  outElement.style.position = `absolute`;
  inElement.style.display = `none`;

  const fragment = document.createDocumentFragment();
  fragment.appendChild(outElement);
  fragment.appendChild(inElement);
  changeScreen(fragment);

  return () => {

    outElement.style.animationName = `fadeOut`;
    outElement.style.animationDuration = `${ANIMATION_DURATION}s`;

    inElement.style.animationName = `fadeIn`;
    inElement.style.animationDuration = `${ANIMATION_DURATION}s`;
    inElement.style.display = ``;

    outElement.addEventListener(`animationend`, () => {
      outElement.remove();
    });
  };
};

export {render, changeScreen, crossFade};
