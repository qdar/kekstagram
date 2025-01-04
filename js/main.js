import {PHOTO_COUNT} from './constants.js';
import {createPhoto} from './createPhoto.js';

const getPhotos = Array.from({length: PHOTO_COUNT}, createPhoto);
// eslint-disable-next-line no-console
console.log(getPhotos);

const pictures = document.querySelectorAll('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

const similarPictures = createPhoto();

similarPictures.forEach((item) => {
  const pictureLink = pictureTemplate.cloneNode(true);
  pictureLink.querySelector('.picture__likes').textContent = item.likes;
  pictures.appendChild(pictureLink);
});

const pictureListFragment = document.createDocumentFragment();
pictures.appendChild(pictureListFragment);


