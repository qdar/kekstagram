import {createPhoto} from './createPhoto.js';

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
