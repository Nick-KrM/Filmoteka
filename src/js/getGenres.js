import genre_names from './genre_ids';

export default function getGenreNames(arrIds) {
  const findId = arrIds.map(id => {
    return genre_names.find(el => {
      if (el.id === id) {
        return el.name;
      }
    });
  });

  const getName = findId.map(elem => {
    return elem.name;
  });

  return getName;
}
