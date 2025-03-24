import {pictures, removeThumbnails, renderGallery} from './thumbnail.js';
import {debounce} from './functions.js';

const filtersButton = document.querySelectorAll('.img-filters__button');

const onFilterClick = (evt) => {
  const target = evt.target;
  const activeClass = 'img-filters__button--active';

  filtersButton.forEach((button) => {
    button.classList.remove(activeClass);
  });
  target.classList.add(activeClass);

  removeThumbnails();

  const result = target.dataset.filter;

  if (result === 'filter-default') {
    renderGallery(pictures);
  }

  if (result === 'filter-random') {
    const random = pictures.slice(0, 10).toSorted(() => 0.5 - Math.random());
    debounce(renderGallery, 500)(random);
  }

  if (result === 'filter-discussed') {
    const discussed = pictures.toSorted((a, b) => b.comments.length - a.comments.length);
    debounce(renderGallery, 500)(discussed);
  }
};

filtersButton.forEach((button) => {
  button.addEventListener('click', onFilterClick);
});
