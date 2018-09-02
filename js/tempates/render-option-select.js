const renderOptionSelect = ({image: {url, title, width, height}, isSelected}) => `<label class="game__option${isSelected ? ` game__option--selected` : ``}">
    <img src="${url}" alt="${title}" width="${width}" height="${height}">
     <input type="radio" name="question" value="${title}" name="${title}" class="visually-hidden">
  </label>`;

export default renderOptionSelect;
