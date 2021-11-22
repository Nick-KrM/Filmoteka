import refs from './refs';

export default function addOnlineUser(userName) {
  const btnAuthorisationLogin = document.querySelector('.wrapper-btn');
  const regBlock = document.querySelector('.authorization-block__data');
  const userNameOnPage = document.querySelector('.username');
  refs.libraryBtn.classList.remove('not-visible');

  btnAuthorisationLogin.classList.remove('isonline-active');
  regBlock.classList.add('isonline-active');
  userNameOnPage.textContent = userName;
}
