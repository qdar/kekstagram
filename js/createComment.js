import {AVATARS, MESSAGES, NAMES} from './imagesData.js';
import {getRandomArrayElement, rangeGenerator} from './functions.js';
// import {commentsLoader} from './bigPicture.js';

const generateCommentId = rangeGenerator(1, 100);

const createComment = () => ({
  id: generateCommentId(),
  avatar: getRandomArrayElement(AVATARS),
  message: getRandomArrayElement(MESSAGES),
  name: getRandomArrayElement(NAMES),
});

// function renderComments(item) {
//   let commentsShow = 0;
//   commentsShow += 5;

//   if (commentsShow >= item.comments.length) {
//     commentsLoader.classList.add('hidden');
//     commentsShow = item.comments.length;
//   } else {
//     commentsLoader.classList.remove('hidden');
//   }

//   const fragment = document.createDocumentFragment();
//   for (let i = 0; i < commentsShow; i++) {
//     const commentElement = createComment.comments[i];
//     fragment.appendChild(commentElement);
//   }

//   commentList.innerHTML = '';
//   commentList.appendChild(fragment);
//   commentCount.innerHTML = `${commentsShow} из <span class="comments-count">${item.comments.length}</span> комментариев`;
// }

export {createComment};
