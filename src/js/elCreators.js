const createImage = ({ src, alt }) => {
  const imageEl = document.createElement('img');
  imageEl.src = src;
  imageEl.alt = alt;
  return imageEl;
};

const createItem = content => {
  const itemEl = document.createElement('li');
  itemEl.textContent = content;
  return itemEl;
};

export { createImage, createItem };