import allLocalData from './allLocalData';

export default function removeFilm(event) {
  const allLocal = allLocalData();

  if (event.target.classList.contains('close-btn')) {
    const elUser = allLocal.localUsers.find(el => {
      if (el.userName === allLocal.whoOnline) {
        return el;
      }
    });

    const xId = event.target.dataset.id;

    const deleteElWatched = elUser.lib.watched.results.find(el => {
      if (String(el.id) === xId) {
        return el;
      } else {
        return false;
      }
    });

    const deleteElQueue = elUser.lib.queue.results.find(el => {
      if (String(el.id) === xId) {
        return el;
      } else {
        return false;
      }
    });

    if (deleteElWatched) {
      const idx = elUser.lib.watched.results.indexOf(deleteElWatched);

      elUser.lib.watched.results.splice(idx, 1);
    } else if (deleteElQueue) {
      const idx = elUser.lib.queue.results.indexOf(deleteElQueue);

      elUser.lib.queue.results.splice(idx, 1);
    }

    event.target.parentElement.classList.add('not-visible');

    localStorage.setItem('users', JSON.stringify(allLocal.localUsers));
  }
}
