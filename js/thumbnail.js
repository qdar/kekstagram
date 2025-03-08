
// import {PHOTO_COUNT, DESCRIPTIONS, LIKE_MIN_COUNT, LIKE_MAX_COUNT, COMMENTS_MAX_COUNT} from './data.js';
// import {getRandomArrayElement, rangeGenerator, getRandomInteger} from './functions.js';
// import {createComment} from './comments.js';
import { generateModal } from './modal.js';
import { generateBigPicture, bigPicture } from './singleImage.js';
import { showAlert } from './functions.js';
import {getData} from './api.js';


// генерация демонстрационных данных
// const generatePhotoId = rangeGenerator(1, 100);
// const generatePhotoUrl = rangeGenerator(1, PHOTO_COUNT);

// const createThumbnail = () => ({
//   id: generatePhotoId(),
//   url: `photos/${generatePhotoUrl()}.jpg`,
//   description: getRandomArrayElement(DESCRIPTIONS),
//   likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
//   comments: Array.from({length: getRandomInteger(1, COMMENTS_MAX_COUNT)}, createComment),
// });
// const renderThumbnails = (count) => Array.from({length: count }, createThumbnail);
// const thumbnails = renderThumbnails(PHOTO_COUNT);

const renderGallery = (thumbnails) => {
  const thumbnailsSection = document.querySelector('.pictures');
  const thumbnailTemplate = document.querySelector('#picture').content.querySelector('.picture');

  thumbnails.forEach((photo) => {
    const pictureLink = thumbnailTemplate.cloneNode(true);
    pictureLink.querySelector('.picture__likes').textContent = photo.likes;
    pictureLink.querySelector('.picture__comments').textContent = photo.comments.length;
    pictureLink.querySelector('.picture__img').src = photo.url;
    thumbnailsSection.appendChild(pictureLink);

    pictureLink.addEventListener('click', () => {
      generateModal(bigPicture);
      generateBigPicture(photo);
    });

    const pictureListFragment = document.createDocumentFragment();
    thumbnailsSection.appendChild(pictureListFragment);
  });
};

try {
  const data = await getData();
  renderGallery(data);
} catch (err) {
  showAlert (err.message);
}

// получение данных
// fetch('https://28.javascript.htmlacademy.pro/kekstagram/data', {
//   method: 'GET', body: null
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log(data);
//     renderGallery(data);
//   })
//   .catch(() => {
//     showAlert (ErrorText.GET_DATA);
//   });
