import refsButtons from './refs-buttons';
import refs from './refs';
import clearPage from './clearPage';
import { startFetch } from './startFetch';
import renderWithTimeout from './renderWithTimeout';
import getLocal from './getLocal';
import visibilityCloseBtnAndPag from './visibilityCloseBtnAndPag';

function openMyLibrary() {
  refsButtons.searchBox.classList.add('visually-hidden');
  refsButtons.error.classList.remove('error-visible');
  refsButtons.myWatched.classList.remove('visually-hidden');
  refsButtons.myQueue.classList.remove('visually-hidden');
  refsButtons.myWatched.classList.add('active');
  refsButtons.myQueue.classList.remove('active');
  refsButtons.homeBg.classList.add('section-top-lib');
  refsButtons.linkHome.classList.remove('active-menu');
  refsButtons.linkLib.classList.add('active-menu');
  refs.backBtn.classList.add('not-visible');

  // clear for UL and hidden pagination on click on my library
  document.querySelector('#pagination').classList.add('not-visible');
  clearPage();

  //! loading Watched default on click My-Library
  ClickW();
}

//! get User element
function getObjOnlineUser() {
  const arrData = getLocal('users');
  const whoOnline = localStorage.getItem('isOnline');

  const dataUser = arrData.find(el => {
    if (el.userName === whoOnline) {
      return el;
    }
  });

  return dataUser;
}

//! render Watched
function ClickW() {
  clearPage();
  refsButtons.homeBg.classList.add('section-top-lib');
  refsButtons.homeBg.classList.add('section-top');
  refsButtons.homeBg.classList.remove('section-top-details');
  refs.backBtn.classList.add('not-visible');

  const dataUser = getObjOnlineUser();
  renderWithTimeout(dataUser.lib.watched);
  visibilityCloseBtnAndPag();
}

//! render Queue
function ClickQ() {
  clearPage();
  refsButtons.homeBg.classList.add('section-top-lib');
  refsButtons.homeBg.classList.add('section-top');
  refsButtons.homeBg.classList.remove('section-top-details');
  refs.backBtn.classList.add('not-visible');

  const dataUser = getObjOnlineUser();
  renderWithTimeout(dataUser.lib.queue);
  visibilityCloseBtnAndPag();
}

function closeMyLibrary(e) {
  refsButtons.homeBg.classList.remove('section-top-details');
  refsButtons.sectionBg.classList.add('section-top');
  refsButtons.searchBox.classList.remove('visually-hidden');
  refsButtons.myWatched.classList.add('visually-hidden');
  refsButtons.myQueue.classList.add('visually-hidden');
  refsButtons.homeBg.classList.remove('section-top-lib');
  refsButtons.myWatched.classList.remove('active');
  refsButtons.myQueue.classList.remove('active');
  refsButtons.linkLib.classList.remove('active-menu');
  refsButtons.linkHome.classList.add('active-menu');
  refs.backBtn.classList.add('not-visible');

  //! render on click btn HOME
  startFetch().then(data => {
    clearPage();
    renderWithTimeout(data);

    document.querySelector('#pagination').classList.remove('not-visible');
  });
}

function openWatched() {
  refsButtons.myWatched.classList.add('active');
  refsButtons.myQueue.classList.remove('active');

  ClickW();
}

function openQueue() {
  refsButtons.myWatched.classList.remove('active');
  refsButtons.myQueue.classList.add('active');

  ClickQ();
}

export default { openMyLibrary, closeMyLibrary, openWatched, openQueue };
