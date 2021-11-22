import addOnlineUser from './addOnlineUser';
import notification from 'toastr';

export default function logIn() {
  event.preventDefault();

  const localStorageData = JSON.parse(localStorage.getItem('users'));
  let userName = document.querySelector('.login-block__user-name').value;
  const userPass = document.querySelector('.login-block__password').value;

  userName = userName.toLowerCase();

  const haveUser = localStorageData.find(el => {
    if (userName === el.userName && userPass === el.userPass) {
      addOnlineUser(userName);
      el.isOnline = true;

      localStorage.setItem('users', JSON.stringify(localStorageData));
      localStorage.setItem('isOnline', userName);

      notification['success']('You entered', `Hello, ${userName}`);

      return true;
    } else if (userName === el.userName || userPass === el.userPass) {
      notification['error']('Wrong login or password', 'Error');

      return true;
    }

    return false;
  });

  if (!haveUser) {
    notification['error']('Wrong login or password', 'Error');
  }
}
