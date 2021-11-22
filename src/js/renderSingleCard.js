import refs from './refs';
import cardFetch from './oneCardFetch';
import onefilmCard from '../templates/onefilmCard.hbs';
import allLocalData from './allLocalData';
import clearPage from './clearPage';
import removeFilm from './removeFilm';
import notification from 'toastr';
import refsButton from './refs-buttons';
import { addToWatched, addToQueue } from './functionsAddedToLib';
import { btnAddDicabledWatched, btnAddDicabledQueue } from './btnAddDicabled';
import refsButtons from './refs-buttons';

export let oneCardObj = {};

function addToLocal() {
  const allData = allLocalData();

  if (allData.whoOnline === 'no one is online') {
    notification['info']('You are not registred', 'Info');
  } else {
    addToWatched(allData.whoOnline, allData.localUsers);
    addToQueue(allData.whoOnline, allData.localUsers);
  }
}

refs.listFilms.addEventListener('click', openOneFilm);

function openOneFilm(event) {
  removeFilm(event);

  if (event.target.nodeName === 'IMG' || event.target.nodeName === 'H3') {
    if (event.target.dataset.id !== undefined) {
      cardFetch(event.target.dataset.id).then(obj => {
        // get object
        oneCardObj = obj;

        //!
        refs.backBtn.classList.remove('not-visible');
        //!
        refsButtons.linkHome.classList.remove('active-menu');

        if (obj.poster_path === null) {
          obj.poster_path =
            'https://www.indulgemassager.com/assets/frontend/indulge/images/no-profile-pic.jpg';
        } else {
          obj.poster_path = `https://image.tmdb.org/t/p/w500${obj.poster_path}`;
        }

        if (obj.genres.length === 0) {
          obj.genres = [{ name: 'no genres' }];
        }
        clearPage();

        refsButton.homeBg.classList.remove('section-top-lib');
        refsButton.homeBg.classList.remove('section-top');
        refsButton.homeBg.classList.add('section-top-details');

        refs.pagination.classList.add('not-visible');
        refs.listFilms.insertAdjacentHTML('beforeend', onefilmCard(obj));

        btnAddDicabledWatched();
        btnAddDicabledQueue();

        document
          .querySelector('.buttons__block')
          .addEventListener('click', addToLocal);
      });
    }
  }
}
