import {LIKE_MIN_COUNT, LIKE_MAX_COUNT, COMMENTS_MAX_COUNT, PHOTO_COUNT} from './constants.js';
import {DESCRIPTIONS} from './imagesData.js';
import {getRandomInteger, getRandomArrayElement, rangeGenerator} from './functions.js';
import {createComment} from './createComment.js';

const generatePhotoId = rangeGenerator(1, PHOTO_COUNT);
const generatePhotoUrl = rangeGenerator(1, PHOTO_COUNT);

const createThumbnail = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from({length: getRandomInteger(1, COMMENTS_MAX_COUNT)}, createComment),
});
const renderThumbnails = (count) => Array.from({length: count }, createThumbnail);

const picturesSection = document.querySelector('.pictures');
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture');
const Thumbnails = renderThumbnails(PHOTO_COUNT);

Thumbnails.forEach((item) => {
  const pictureLink = pictureTemplate.cloneNode(true);
  pictureLink.querySelector('.picture__likes').textContent = item.likes;
  pictureLink.querySelector('.picture__comments').textContent = item.comments.length;
  pictureLink.querySelector('.picture__img').src = item.url;
  pictureLink.dataset.thumbnailsID = item.id;
  picturesSection.appendChild(pictureLink);
});

const pictureListFragment = document.createDocumentFragment();
picturesSection.appendChild(pictureListFragment);

export {createThumbnail, picturesSection, renderThumbnails};
