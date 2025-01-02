import {AVATARS, MESSAGES, NAMES} from './array.js';
import {getRandomArrayElement} from './getRandomArrayElement.js';
import {RangeGenerator} from './rangeGenerator.js';

const generateCommentId = RangeGenerator(1, 100);

const createComment = () => ({
  id: generateCommentId(),
  avatar: getRandomArrayElement(AVATARS),
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

export {createComment};
