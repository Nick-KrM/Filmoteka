import User from './classUser';
import addOnlineUser from './addOnlineUser';
import { users } from './defaultLoadLocal';
import { v4 as uuidv4 } from 'uuid';
import notification from 'toastr';
import './toastrSetting';
import 'toastr/build/toastr.css';

export default function registration(event) {
  event.preventDefault();

  const localStorageData = JSON.parse(localStorage.getItem('users'));
  let userName = document.querySelector('.login-block__user-name').value;
  const userPass = document.querySelector('.login-block__password').value;
  let haveUser;

  userName = userName.toLowerCase();

  localStorageData.find(elem => {
    if (elem.userName === userName) {
      notification['info']('Come up with another name', 'This name is used');

      haveUser = elem.userName === userName;
      return haveUser;
    }
  });

  if (!haveUser) {
    const user = new User(uuidv4(), userName, userPass, true);

    users.push(user);

    localStorage.setItem('users', JSON.stringify(users));
    localStorage.setItem('isOnline', userName);

    addOnlineUser(userName);

    notification['success']('', 'Are you registered');
  }
}
