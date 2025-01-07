import {AVATARS, MESSAGES, NAMES} from './imagesData.js';
import {getRandomArrayElement, rangeGenerator} from './functions.js';

const generateCommentId = rangeGenerator(1, 100);

const createComment = () => ({
  id: generateCommentId(),
  avatar: getRandomArrayElement(AVATARS),
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

export {createComment};
