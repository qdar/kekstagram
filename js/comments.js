import {AVATARS_MAX_COUNT, MESSAGES, NAMES, COMMENTS_MAX_COUNT} from './data.js';
import {getRandomArrayElement, rangeGenerator, getRandomInteger} from './functions.js';

const generateCommentId = rangeGenerator(1, COMMENTS_MAX_COUNT);

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${getRandomInteger(1, AVATARS_MAX_COUNT)}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

export {createComment};
