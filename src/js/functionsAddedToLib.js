import notification from 'toastr';
import { oneCardObj } from './renderSingleCard';
import {
  btnAddDicabledWatched,
  btnAddDicabledQueue,
  addNowWatched,
  addNowQueue,
} from './btnAddDicabled';
import {
  checksAnotherArrForWatched,
  checksAnotherArrForQueue,
} from './checksAnotherArr';

// watched
// ==================
export function addToWatched(whoOnline, localUsers) {
  if (event.target.classList.contains('add_watched')) {
    const userElement = localUsers.find(el => {
      if (el.userName === whoOnline) {
        return el;
      }
    });

    checksAnotherArrForWatched(userElement, oneCardObj, localUsers);

    if (userElement.lib.watched.results.length === 0) {
      userElement.lib.watched.results.push(oneCardObj);

      btnAddDicabledWatched();
      addNowWatched();

      localStorage.setItem('users', JSON.stringify(localUsers));

      notification['success']('You added a movie to Watched', 'Great');
    } else {
      const isFilm = userElement.lib.watched.results.find(el => {
        if (el.id === oneCardObj.id) {
          return true;
        }
      });

      if (!isFilm) {
        userElement.lib.watched.results.push(oneCardObj);

        btnAddDicabledWatched();
        addNowWatched();

        localStorage.setItem('users', JSON.stringify(localUsers));

        notification['success']('Great', 'You added a movie to Watched');
      }
    }
  }
}

// queue
// ==================
export function addToQueue(whoOnline, localUsers) {
  if (event.target.classList.contains('add_queue')) {
    const userElement = localUsers.find(el => {
      if (el.userName === whoOnline) {
        return el;
      }
    });

    checksAnotherArrForQueue(userElement, oneCardObj, localUsers);

    if (userElement.lib.queue.results.length === 0) {
      userElement.lib.queue.results.push(oneCardObj);

      btnAddDicabledQueue();
      addNowQueue();

      localStorage.setItem('users', JSON.stringify(localUsers));

      notification['success']('You added a movie to Queue', 'Great');
    } else {
      const isFilm = userElement.lib.queue.results.find(el => {
        if (el.id === oneCardObj.id) {
          return true;
        }
      });

      if (!isFilm) {
        userElement.lib.queue.results.push(oneCardObj);

        btnAddDicabledQueue();
        addNowQueue();

        localStorage.setItem('users', JSON.stringify(localUsers));

        notification['success']('Great', 'You added a movie to Queue');
      }
    }
  }
}
