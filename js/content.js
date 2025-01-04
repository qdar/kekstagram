import {createPhoto} from './createPhoto.js';

const pictures = document.querySelectorAll('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');

console.log('rr');

const similarPictures = createPhoto();

similarPictures.forEach((item) => {
  const pictureLink = pictureTemplate.cloneNode(true);
  pictureLink.querySelector('.picture__likes').textContent = item.likes;
  pictureLink.querySelector('.picture__comments').textContent = item.comments;
  pictureLink.querySelector('.picture__img').textContent = item.likes;
  pictures.appendChild(pictureLink);
});

const pictureListFragment = document.createDocumentFragment();
pictures.appendChild(pictureListFragment);
