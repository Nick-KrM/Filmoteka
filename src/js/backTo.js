import refs from './refs';
import refsButtons from './refs-buttons';
import whatsOnPage from './whatsOnPage';
import renderWithTimeout from './renderWithTimeout';
import clearPage from './clearPage';
import allLocalData from './allLocalData';
import visibilityCloseBtnAndPag from './visibilityCloseBtnAndPag';

function checkLib() {
  if (refsButtons.myWatched.classList.contains('active')) {
    return true;
  } else if (refsButtons.myQueue.classList.contains('active')) {
    return false;
  }
}

//! back button
export default function backTo() {
  const allData = allLocalData();
  const whoOnline = allData.whoOnline;
  const userData = allData.localUsers.find(user => {
    if (user.userName === whoOnline) {
      return user;
    }
  });

  refs.backBtn.classList.add('not-visible');

  clearPage();

  //? true = watched // false = queue
  const whichLib = checkLib();

  //? render by selected Library
  //? if it is not selected then simple render
  if (!refsButtons.myWatched.classList.contains('visually-hidden')) {
    if (whichLib) {
      loadBgLib();
      renderWithTimeout(userData.lib.watched);
      visibilityCloseBtnAndPag();
    } else if (!whichLib) {
      loadBgLib();
      renderWithTimeout(userData.lib.queue);
      visibilityCloseBtnAndPag();
    }
  } else {
    loadBgHome();
    renderWithTimeout(whatsOnPage.data);
  }
}

function loadBgLib() {
  refsButtons.homeBg.classList.remove('section-top-details');
  refsButtons.homeBg.classList.add('section-top-lib');
}

function loadBgHome() {
  refsButtons.homeBg.classList.remove('section-top-details');
  refsButtons.homeBg.classList.add('section-top');
}
