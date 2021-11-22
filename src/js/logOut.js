document.querySelector('.btn-logout').addEventListener('click', logOut);

function logOut() {
  const localStorageData = JSON.parse(localStorage.getItem('users'));
  const btnAuthorisationLogin = document.querySelector('.wrapper-btn');
  const regBlock = document.querySelector('.authorization-block__data');

  const updateIsOnline = localStorageData.map(item => {
    if (item.isOnline) {
      btnAuthorisationLogin.classList.add('isonline-active');
      regBlock.classList.remove('isonline-active');

      item.isOnline = false;

      return item;
    }

    return item;
  });

  localStorage.setItem('users', JSON.stringify(updateIsOnline));
  localStorage.setItem('isOnline', 'no one is online');

  window.location.reload();
}
