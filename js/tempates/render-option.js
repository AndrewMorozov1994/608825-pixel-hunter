const renderOption = ({image: {url, width, height}}) => `<div class="game__option">
      <img src="${url}" alt="Игровое изображение" width="${width}" height="${height}">
      <label class="game__answer game__answer--photo">
        <input class="visually-hidden" name=${url} type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input class="visually-hidden" name=${url} type="radio" value="painting">
        <span>Рисунок</span>
      </label>
    </div>`;

export default renderOption;
