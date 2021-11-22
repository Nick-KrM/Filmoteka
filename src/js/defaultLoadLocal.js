import addOnlineUser from './addOnlineUser';

export let users = [
  {
    userId: 0,
    userName: 'admin',
    userPass: 'admin',
    isOnline: false,
    lib: {
      watched: { results: [] },
      queue: { results: [] },
    },
  },
];

try {
  localStorage.setItem('isOnline', 'no one is online');

  if (!localStorage.getItem('users')) {
    localStorage.setItem('users', JSON.stringify(users));
  } else {
    users = [...JSON.parse(localStorage.getItem('users'))];

    users.forEach(el => {
      if (el.isOnline === true) {
        el.userName;
        localStorage.setItem('isOnline', el.userName);
        addOnlineUser(el.userName);
      }
    });
  }
} catch (error) {
  console.log('Что-то пошло не так', error);
}
