import refs from './refs';
import clearPage from './clearPage';
import { doNotVisible, doVisible } from './visibleFunc';
import { searchFetch } from './searchFetch';
import renderWithTimeout from './renderWithTimeout';
import fetchSettings from './fetchSettings';
import whatsOnPage from './whatsOnPage';

export default function gallerySearch(event) {
  event.preventDefault();

  refs.activeMenu.classList.remove('active-menu');

  clearPage();

  // visible input value error
  if (event.currentTarget.elements.search.value === '') {
    doNotVisible(refs.errorWrong);
    doVisible(refs.errorNull);

    document.querySelector('#pagination').classList.add('not-visible');
  } else {
    doNotVisible(refs.errorNull);
    fetchSettings.inputValue = event.currentTarget.elements.search.value;

    searchFetch(fetchSettings.inputValue).then(data => {
      // not visible for back btn
      refs.backBtn.classList.add('not-visible');

      fetchSettings.totalPages = data.total_pages;
      fetchSettings.fetchType = 'search';

      if (data.results.length === 0) {
        document.querySelector('#pagination').classList.add('not-visible');

        doVisible(refs.errorWrong);
      } else {
        doNotVisible(refs.errorWrong);
        document.querySelector('#pagination').classList.add('not-visible');

        // timeout for spinner animation
        renderWithTimeout(data);
      }
    });
  }
}
