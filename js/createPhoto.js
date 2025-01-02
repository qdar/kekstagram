import {LIKE_MIN_COUNT, LIKE_MAX_COUNT, COMMENTS_MAX_COUNT, PHOTO_COUNT} from './data.js';
import {DESCRIPTIONS} from './array.js';
import {getRandomInteger} from './getRandomInteger.js';
import {getRandomArrayElement} from './getRandomArrayElement.js';
import {RangeGenerator} from './rangeGenerator.js';

import {createComment} from './createComment.js';

const generatePhotoId = RangeGenerator(1, PHOTO_COUNT);
const generatePhotoUrl = RangeGenerator(1, PHOTO_COUNT);

const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTIONS),
  likes: getRandomInteger(LIKE_MIN_COUNT, LIKE_MAX_COUNT),
  comments: Array.from({length: getRandomInteger(1, COMMENTS_MAX_COUNT)}, createComment),
});

export {createPhoto};
