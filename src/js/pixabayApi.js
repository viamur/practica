const API_KEY = '13965574-3ae6669f35304ffc6cddc1b72';
const BASE_URL = 'https://pixabay.com/api/';

export const fetchImages = value => {
  return fetch(`${BASE_URL}?key=${API_KEY}&q=${value}&page=2&per_page=12&lang=ru`)
    .then(response => {
      if (!response.ok) {
        throw new Error('Error message');
      }
      return response.json();
    })
    .then(data => {
      if (data.hits.length === 0) throw new Error('No images');
      return data.hits;
    })
    .catch(error => {
      console.log(error.message);
    });
};
