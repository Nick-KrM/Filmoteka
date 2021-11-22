import axios from 'axios';
const api_key = 'cc24e28d216ef164940b9fd9893ff62a';
const baseUrl = `https://api.themoviedb.org/3/movie`;

export default function cardFetch(id) {
  return axios(`${baseUrl}/${id}?api_key=${api_key}`)
    .then(data => {
      return data.data;
    })
    .catch(error => {
      throw error;
    });
}
