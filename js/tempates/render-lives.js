const renderLives = (lives) => {
  const template = `
  <div class="game__lives">
  ${new Array(3 - lives)
    .fill(`<img src="img/heart__empty.svg" class="game__heart" alt="Life" width="31" height="27">`)
    .join(``)}
  ${new Array(lives)
    .fill(`<img src="img/heart__full.svg" class="game__heart" alt="Life" width="31" height="27">`)
    .join(``)}
  </div>`;

  return template;
};

export default renderLives;
