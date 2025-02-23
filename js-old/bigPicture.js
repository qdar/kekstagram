<<<<<<< Updated upstream
const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = document.querySelector('#picture-cancel');

const commentsLoader = document.querySelector('.comments-loader');
const commentList = document.querySelector('.social__comments');
const commentCount = document.querySelector('.social__comment-count');

function generatebigPicture(e, item) {
  let commentsShow = 5;

  let allComments = item.comments.slice(0, commentsShow).map((comment) => `
=======
import {closeModal} from './modal.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = bigPicture.querySelector('#picture-cancel');

const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentList = bigPicture.querySelector('.social__comments');
const commentCount = bigPicture.querySelector('.social__comment-count');

function generateItemsComments(comments, start, end) {
  return comments.slice(start, end).map((comment) => `
>>>>>>> Stashed changes
    <li class="social__comment">
      <img
        class="social__picture"
        src="${comment.avatar}"
        alt="${comment.name}"
        width="35"
        height="35"
      >
      <p class="social__text">${comment.message}</p>
    </li>
  `).join('');
<<<<<<< Updated upstream

  bigPicture.querySelector('.big-picture__img img').src = item.url;
  bigPicture.querySelector('.likes-count').textContent = item.likes;
  bigPicture.querySelector('.comments-count').textContent = item.comments.length;
  bigPicture.querySelector('.social__caption').textContent = item.description;
  bigPicture.querySelector('.social__comments').innerHTML = allComments;

  if (commentsShow >= item.comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShow = item.comments.length;
=======
}

function generateBigPicture(e, dataImage) {
  let commentsShow = 5;

  generateItemsComments(dataImage.comments, 0, commentsShow);
  bigPicture.querySelector('.big-picture__img img').src = dataImage.url;
  bigPicture.querySelector('.likes-count').textContent = dataImage.likes;
  bigPicture.querySelector('.comments-count').textContent = dataImage.comments.length;
  bigPicture.querySelector('.social__caption').textContent = dataImage.description;

  const allComments = generateItemsComments(dataImage.comments, 0, commentsShow);
  commentList.innerHTML = allComments;

  if (commentsShow >= dataImage.comments.length) {
    commentsLoader.classList.add('hidden');
>>>>>>> Stashed changes
  } else {
    commentsLoader.classList.remove('hidden');
  }

  commentsLoader.addEventListener('click', () => {
    commentsShow += 5;
<<<<<<< Updated upstream
    allComments = item.comments.slice(0, commentsShow).map((comment) => `
    <li class="social__comment">
      <img
        class="social__picture"
        src="${comment.avatar}"
        alt="${comment.name}"
        width="35"
        height="35"
      >
      <p class="social__text">${comment.message}</p>
    </li>
  `).join('');

    if (commentsShow >= item.comments.length) {
      commentsLoader.classList.add('hidden');
      commentsShow = item.comments.length;
=======
    generateItemsComments(dataImage.comments, 5, commentsShow);

    if (commentsShow >= dataImage.comments.length) {
      commentsLoader.classList.add('hidden');
      commentsShow = dataImage.comments.length;
>>>>>>> Stashed changes
    } else {
      commentsLoader.classList.remove('hidden');
    }

    commentList.innerHTML = '';
<<<<<<< Updated upstream
    bigPicture.querySelector('.social__comments').innerHTML = allComments;
    commentCount.innerHTML = `${commentsShow} из <span class="comments-count">${item.comments.length}</span> комментариев`;
  });
}


export {bigPicture, bigPictureClose, generatebigPicture, commentsLoader};
=======
    commentList.innerHTML = generateItemsComments(dataImage.comments, 0, commentsShow);
    commentCount.innerHTML = `${commentsShow} из <span class="comments-count">${dataImage.comments.length}</span> комментариев`;
  });

}

bigPictureClose.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  closeModal();
});

export {bigPicture, bigPictureClose, generateBigPicture};
>>>>>>> Stashed changes
