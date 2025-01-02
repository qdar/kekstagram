import {LIKE_MIN_COUNT, LIKE_MAX_COUNT, COMMENTS_MAX_COUNT, PHOTO_COUNT} from './constants.js';
import {DESCRIPTIONS} from './imagesData.js';
import {getRandomInteger, getRandomArrayElement} from './getRandomInteger.js';
import {rangeGenerator} from './rangeGenerator.js';

import {createComment} from './createComment.js';

const generatePhotoId = rangeGenerator(1, PHOTO_COUNT);
const generatePhotoUrl = rangeGenerator(1, PHOTO_COUNT);

const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from({length: getRandomInteger(1, COMMENTS_MAX_COUNT)}, createComment),
});

export {createPhoto};
