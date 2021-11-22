import refs from './refs';
import { startFetch } from './startFetch';
import gallerySearch from './gallerySearch';
import fetchSettings from './fetchSettings';
import renderWithTimeout from './renderWithTimeout';
import whatsOnPage from './whatsOnPage';
import backTo from './backTo';

refs.backBtn.addEventListener('click', backTo);

// on submit
refs.form.addEventListener('submit', gallerySearch);

//  loading first page - popular films
startFetch().then(data => {
  fetchSettings.totalPages = data.total_pages;
  fetchSettings.fetchType = 'start';

  renderWithTimeout(data);
});
