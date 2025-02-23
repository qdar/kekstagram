import {AVATARS_MAX_COUNT, MESSAGES, NAMES} from './data.js';
import {getRandomArrayElement, rangeGenerator} from './functions.js';

const generateCommentId = rangeGenerator(1, 100);
const avatarUrl = rangeGenerator(1, AVATARS_MAX_COUNT);

const createComment = () => ({
  id: generateCommentId(),
  avatar: `img/avatar-${avatarUrl()}.svg`,
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

export {createComment};
