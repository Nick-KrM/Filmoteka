import getLocal from './getLocal';

export default function allLocalData() {
  return {
    whoOnline: localStorage.getItem('isOnline'),
    localUsers: getLocal('users'),
  };
}
