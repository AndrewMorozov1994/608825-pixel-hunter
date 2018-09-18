const renderOptionSelect = ({image: {url, width, height}, type}) => {

  return `<label class="game__option">
    <img src="${url}" alt="Игровое изображение" width="${width}" height="${height}">
     <input type="radio" name="question" name="Игровое изображение" value="${type}" class="visually-hidden">
  </label>`;
};

export default renderOptionSelect;
