import axios from 'axios';
import { api_key } from './startFetch';
import whatsOnPage from './whatsOnPage';

export function searchFetch(inputValue, pageNumber = 1) {
  return axios(
    `https://api.themoviedb.org/3/search/movie?api_key=${api_key}&query=${inputValue}&page=${pageNumber}`,
  )
    .then(data => {
      whatsOnPage.data = data.data;

      return data.data;
    })
    .catch(error => {
      throw error;
    });
}
