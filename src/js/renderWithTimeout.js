import refs from './refs';
import renderCard from './renderManyCards';
import paginationLogic from './paginationLogic';
import fetchSettings from './fetchSettings';
import { handlePagination, handleSearchPagination } from './handlePagination';
import makeDisabled from './makeDisabled';
import whatsOnPage from './whatsOnPage';

export default function renderWithTimeout(data, currentPage) {
  // timeout for spinner animation
  refs.spinnerLoader.classList.remove('not-visible');

  currentPage = whatsOnPage.data.page;

  setTimeout(() => {
    renderCard(data.results);
    paginationLogic(data.total_pages, currentPage);

    const paginatRef = document.querySelector('#pagination');

    paginatRef.classList.remove('not-visible');

    if (fetchSettings.fetchType === 'search') {
      paginatRef.removeEventListener('click', handlePagination);
      paginatRef.addEventListener('click', handleSearchPagination);

      // rules for disabled arrows
      makeDisabled();
    } else if (fetchSettings.fetchType === 'start') {
      paginatRef.removeEventListener('click', handleSearchPagination);
      paginatRef.addEventListener('click', handlePagination);

      // rules for disabled arrows
      makeDisabled();
    }

    refs.spinnerLoader.classList.add('not-visible');
  }, 1000);
}
