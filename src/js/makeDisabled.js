import fetchSettings from './fetchSettings';

export default function makeDisabled() {
  const currentPageNum = Number(document.querySelector('.current').textContent);

  if (currentPageNum === 1) {
    document.querySelector('.arrow-left').setAttribute('disabled', 'true');
  } else if (currentPageNum === fetchSettings.totalPages) {
    document.querySelector('.arrow-right').setAttribute('disabled', 'true');
  }
}
