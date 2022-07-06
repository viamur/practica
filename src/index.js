import debounce from 'lodash.debounce';
import { refs } from './js/refs.js';
import { createImage, createItem } from './js/elCreators.js';
import gallery from './js/gallery.js';
import mod from './partials/menu.hbs';
import modJSON from './partials/name.JSON';

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

const data = new Date(1994, 8, 10, 10, 30, 25, 35);

// const makePromise = (text, delay) => {
//   return new Promise(resolve => {
//     setTimeout(() => resolve(text), delay);
//   });
// };

// const promiseA = makePromise('promiseA value', 1000);
// const promiseB = makePromise('promiseB value', 3000);

// Promise.race([promiseA, promiseB])
//   .then(value => console.log(value))
//   .catch(error => console.log(error));

const makeGreeting = guestName => {
  if (guestName === '' || guestName === undefined) {
    return Promise.reject('Guest name must not be empty');
  }

  return Promise.resolve(`Welcome ${guestName}`);
};

makeGreeting('Mn')
  .then(greeting => console.log(greeting))
  .catch(error => console.error(error));
