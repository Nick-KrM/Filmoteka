import refs from './refs-buttons.js';
import buttonFn from './top-button-functions.js';

refs.myLibrary.addEventListener('click', buttonFn.openMyLibrary);
refs.home.addEventListener('click', buttonFn.closeMyLibrary);

refs.myWatched.addEventListener('click', buttonFn.openWatched);
refs.myQueue.addEventListener('click', buttonFn.openQueue);
