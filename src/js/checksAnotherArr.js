import notification from 'toastr';
import {
  btnAddDicabledWatched,
  btnAddDicabledQueue,
  addNowWatched,
  addNowQueue,
} from './btnAddDicabled';

export function checksAnotherArrForWatched(
  userElement,
  oneCardObj,
  localUsers,
) {
  if (userElement.lib.queue.results.length === 0) {
    userElement.lib.watched.results.push(oneCardObj);

    btnAddDicabledWatched();
    addNowWatched();

    localStorage.setItem('users', JSON.stringify(localUsers));
  }

  const elemenOfArr = userElement.lib.queue.results.find(el => {
    if (el.id === oneCardObj.id) {
      const btnW = document.querySelector('.add_queue');

      btnW.removeAttribute('disabled');
      btnW.textContent = ' Add to Queue';

      return el;
    } else {
      return false;
    }
  });

  //* get idx of element
  const idx = userElement.lib.queue.results.indexOf(elemenOfArr);

  if (idx === -1) {
  } else {
    //* delete element
    userElement.lib.queue.results.splice(idx, 1);
  }
}

export function checksAnotherArrForQueue(userElement, oneCardObj, localUsers) {
  if (userElement.lib.watched.results.length === 0) {
    userElement.lib.queue.results.push(oneCardObj);

    btnAddDicabledQueue();
    addNowQueue();

    localStorage.setItem('users', JSON.stringify(localUsers));

    notification['success']('You added a movie to Queue', 'Great');
  }

  const elemenOfArr = userElement.lib.watched.results.find(el => {
    if (el.id === oneCardObj.id) {
      const btnQ = document.querySelector('.add_watched');

      btnQ.removeAttribute('disabled');
      btnQ.textContent = ' Add to Watched';

      return el;
    } else {
      return false;
    }
  });

  //* get idx of element
  const idx = userElement.lib.watched.results.indexOf(elemenOfArr);

  if (idx === -1) {
  } else {
    //* delete element
    userElement.lib.watched.results.splice(idx, 1);
  }
}
