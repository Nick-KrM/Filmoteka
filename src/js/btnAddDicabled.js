import { oneCardObj } from './renderSingleCard';
import getLocal from './getLocal';

export function btnAddDicabledWatched() {
  const whoOnline = localStorage.getItem('isOnline');
  const allUsers = getLocal('users');

  const elUser = allUsers.find(el => {
    if (el.userName === whoOnline) {
      return el;
    }
  });

  const btnW = document.querySelector('.add_watched');

  if (whoOnline === 'no one is online') {
    return;
  } else {
    elUser.lib.watched.results.find(el => {
      if (el.id === oneCardObj.id) {
        btnW.classList.add('active');
        btnW.setAttribute('disabled', true);
      }
    });

    if (btnW.getAttribute('disabled')) {
      btnW.textContent = 'Added in Watched';
    }
  }
}

export function btnAddDicabledQueue() {
  const whoOnline = localStorage.getItem('isOnline');
  const allUsers = getLocal('users');

  const elUser = allUsers.find(el => {
    if (el.userName === whoOnline) {
      return el;
    }
  });

  const btnQ = document.querySelector('.add_queue');

  if (whoOnline === 'no one is online') {
    return;
  } else {
    elUser.lib.queue.results.find(el => {
      if (el.id === oneCardObj.id) {
        btnQ.classList.add('active');
        btnQ.setAttribute('disabled', true);
      }
    });

    if (btnQ.getAttribute('disabled')) {
      btnQ.textContent = 'Added in Queue';
    }
  }
}

// -------------------------------- added now
export function addNowWatched() {
  const btnW = document.querySelector('.add_watched');

  btnW.classList.add('active');
  btnW.setAttribute('disabled', true);

  if (btnW.getAttribute('disabled')) {
    btnW.textContent = 'Added in Watched';
  }
}

// -------------------------------- added now
export function addNowQueue() {
  const btnW = document.querySelector('.add_queue');

  btnW.classList.add('active');
  btnW.setAttribute('disabled', true);

  if (btnW.getAttribute('disabled')) {
    btnW.textContent = 'Added in Queue';
  }
}
