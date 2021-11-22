export default function getLocal(key) {
  return JSON.parse(localStorage.getItem(key));
}
