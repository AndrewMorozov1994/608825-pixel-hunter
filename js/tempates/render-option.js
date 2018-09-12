const renderOption = ({image: {url, title, width, height}, type}) => `<div class="game__option">
      <img src="${url}" alt="${title}" width="${width}" height="${height}">
      <label class="game__answer game__answer--photo">
        <input class="visually-hidden" name=${type} type="radio" value="photo">
        <span>Фото</span>
      </label>
      <label class="game__answer game__answer--paint">
        <input class="visually-hidden" name=${type} type="radio" value="paint">
        <span>Рисунок</span>
      </label>
    </div>`;

export default renderOption;
