import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '54322887-b96a62a676a9ab44083e67caf';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data);
}
