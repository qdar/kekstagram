import {PHOTO_COUNT} from './constants.js';
import {createPhoto} from './createPhoto.js';

const getPhotos = (count) => Array.from({length: count }, createPhoto);

const picturesSection = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const allPictures = getPhotos(PHOTO_COUNT);

const pictureListFragment = document.createDocumentFragment();

allPictures.forEach((item) => {
  const pictureLink = pictureTemplate.cloneNode(true);
  pictureLink.querySelector('.picture__likes').textContent = item.likes;
  pictureLink.querySelector('.picture__comments').textContent = item.comments.length;
  pictureLink.querySelector('.picture__img').src = item.url;
  picturesSection.appendChild(pictureLink);
});


picturesSection.appendChild(pictureListFragment);


