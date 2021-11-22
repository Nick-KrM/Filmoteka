//! added visible close btn ( for film-card)
//! added not-visible pagination in My-Library
export default function visibilityCloseBtnAndPag() {
  setTimeout(() => {
    if (document.querySelector('.close-btn')) {
      const allCloseBtnArr = document.querySelectorAll('.close-btn');

      allCloseBtnArr.forEach(el => {
        el.classList.remove('not-visible');
      });
    }

    document.querySelector('#pagination').classList.add('not-visible');
  }, 1005);
}
