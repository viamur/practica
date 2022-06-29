import debounce from 'lodash.debounce';
import { refs } from './js/refs.js';
import { createImage, createItem } from './js/elCreators.js';
import gallery from './js/gallery.js';

const onSearchInput = e => {
  const inputEl = e.target;

  const filteredGallery = gallery.filter(element => {
    return element.tags.toLowerCase().includes(inputEl.value.toLowerCase());
  });

  const filteredItems = filteredGallery.map(element => {
    return createItem(element.tags);
  });

  refs.list.innerHTML = '';

  refs.list.append(...filteredItems);
  console.log(filteredGallery);
};

const onListItemCkick = e => {
  const itemEl = e.target;
  if (itemEl.nodeName !== 'LI') {
    return;
  }
  refs.input.value = itemEl.textContent;
  refs.list.innerHTML = '';
  console.log(itemEl);
};

const onFormSubmit = e => {
  e.preventDefault();
  const inputValue = refs.input.value;

  const foundData = gallery.find(element => {
    if (element.tags === inputValue) {
      return true;
    }
  });
  console.dir(foundData);

  const imgData = { src: foundData.previewURL, alt: foundData.tags };
  refs.imageContainer.innerHTML = '';
  refs.imageContainer.append(createImage(imgData));
};

refs.input.addEventListener('input', debounce(onSearchInput, 300));
refs.list.addEventListener('click', onListItemCkick);
refs.form.addEventListener('submit', onFormSubmit);
