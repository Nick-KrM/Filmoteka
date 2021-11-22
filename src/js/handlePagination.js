import { searchFetch } from './searchFetch';
import { startFetch } from './startFetch';
import clearPage from './clearPage';

import fetchSettings from './fetchSettings';
import renderWithTimeout from './renderWithTimeout';

function handlePagination(event) {
  const currentPageNum = Number(
    event.currentTarget.querySelector('.current').textContent,
  );

  if (event.target.textContent !== '') {
    const targetNum = event.target.textContent;

    startFetch(targetNum).then(data => {
      fetchSettings.totalPages = data.total_pages;
      clearPage();
      renderWithTimeout(data, Number(targetNum));
    });
  } else if (event.target.classList.contains('arrow-left')) {
    startFetch(changeNumPage('minus', currentPageNum)).then(data => {
      fetchSettings.totalPages = data.total_pages;
      clearPage();
      renderWithTimeout(data, currentPageNum);
    });
  } else if (event.target.classList.contains('arrow-right')) {
    startFetch(changeNumPage('plus', currentPageNum)).then(data => {
      fetchSettings.totalPages = data.total_pages;
      clearPage();
      renderWithTimeout(data, currentPageNum);
    });
  }
}

function handleSearchPagination(event) {
  const currentPageNum = Number(
    event.currentTarget.querySelector('.current').textContent,
  );

  if (event.target.textContent !== '') {
    const targetNum = event.target.textContent;

    searchFetch(fetchSettings.inputValue, targetNum).then(data => {
      fetchSettings.totalPages = data.total_pages;
      clearPage();
      renderWithTimeout(data, Number(targetNum));
    });
  } else if (event.target.classList.contains('arrow-left')) {
    searchFetch(
      fetchSettings.inputValue,
      changeNumPage('minus', currentPageNum),
    ).then(data => {
      fetchSettings.totalPages = data.total_pages;
      fetchSettings.fetchType = 'search';
      clearPage();
      renderWithTimeout(data, currentPageNum);
    });
  } else if (event.target.classList.contains('arrow-right')) {
    searchFetch(
      fetchSettings.inputValue,
      changeNumPage('plus', currentPageNum),
    ).then(data => {
      fetchSettings.totalPages = data.total_pages;
      fetchSettings.fetchType = 'search';
      clearPage();
      renderWithTimeout(data, currentPageNum);
    });
  }
}

function changeNumPage(sign, num) {
  if (num === 1) {
    return;
  } else if (sign === 'minus') {
    return num;
  } else if (sign === 'plus') {
    return num;
  }
}

export { handlePagination, handleSearchPagination };
