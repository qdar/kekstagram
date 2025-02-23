import {closeModal} from './modal.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = bigPicture.querySelector('#picture-cancel');

const commentsLoader = bigPicture.querySelector('.comments-loader');
const commentList = bigPicture.querySelector('.social__comments');
const commentCount = bigPicture.querySelector('.social__comment-count');

function generateItemsComments(comments, start, end) {
  return comments.slice(start, end).map((comment) => `
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
  } else {
    commentsLoader.classList.remove('hidden');
  }

  commentsLoader.addEventListener('click', () => {
    commentsShow += 5;
    generateItemsComments(dataImage.comments, 5, commentsShow);

    if (commentsShow >= dataImage.comments.length) {
      commentsLoader.classList.add('hidden');
      commentsShow = dataImage.comments.length;
    } else {
      commentsLoader.classList.remove('hidden');
    }

    commentList.innerHTML = '';
    commentList.innerHTML = generateItemsComments(dataImage.comments, 0, commentsShow);
    commentCount.innerHTML = `${commentsShow} из <span class="comments-count">${dataImage.comments.length}</span> комментариев`;
  });

}

bigPictureClose.addEventListener('click', () => {
  bigPicture.classList.add('hidden');
  closeModal();
});

export {bigPicture, bigPictureClose, generateBigPicture};
