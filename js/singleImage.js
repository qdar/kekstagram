import {closeModal, onPopupEscKeydown} from './modal.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = bigPicture.querySelector('#picture-cancel');

const commentList = bigPicture.querySelector('.social__comments');
const commentsLoader = bigPicture.querySelector('.comments-loader');
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

function generateBigPicture(dataImage) {
  let commentsShow = 5;

  bigPicture.querySelector('.big-picture__img img').src = dataImage.url;
  bigPicture.querySelector('.likes-count').textContent = dataImage.likes;
  bigPicture.querySelector('.comments-count').textContent = dataImage.comments.length;
  bigPicture.querySelector('.social__caption').textContent = dataImage.description;
  // commentCount.innerHTML = `${commentsShow} из <span class="comments-count">${dataImage.comments.length}</span> комментариев`;

  const allComments = generateItemsComments(dataImage.comments, 0, commentsShow);
  commentList.innerHTML = allComments;

  commentsLoader.classList.toggle('hidden', commentsShow >= dataImage.comments.length);

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

  closeModal(bigPictureClose, bigPicture);
  document.addEventListener('keydown', (evt) => onPopupEscKeydown(evt, bigPicture));

}

export {bigPicture, bigPictureClose, generateBigPicture};
