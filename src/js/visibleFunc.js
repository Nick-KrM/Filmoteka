function doVisible(item) {
  item.classList.add('error-visible');
}

function doNotVisible(item) {
  item.classList.remove('error-visible');
}

export { doNotVisible, doVisible };
