import { fetchImages } from './js/pixabayApi';
import galleryCard from './partials/galleryCard.hbs';

const formEl = document.querySelector('.js-search-form');
const galleryEl = document.querySelector('.gallery');

const onSearchImage = e => {
  e.preventDefault();
  const { search } = e.currentTarget.elements;

  fetchImages(search.value).then(images => (galleryEl.innerHTML = galleryCard(images)));
};

formEl.addEventListener('submit', onSearchImage);
