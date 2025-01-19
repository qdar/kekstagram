// import { createComment } from './createComment.js';

const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = document.querySelector('#picture-cancel');

const commentsLoader = document.querySelector('.comments-loader');
const commentList = document.querySelector('.social__comments');
const commentCount = document.querySelector('.social__comment-count');

let commentsShow = 0;
commentsShow += 5;

function generatebigPicture(e, item) {
  const allComments = item.comments.map((comment) => `
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

  bigPicture.querySelector('.big-picture__img img').src = item.url;
  bigPicture.querySelector('.likes-count').textContent = item.likes;
  bigPicture.querySelector('.comments-count').textContent = item.comments.length;
  bigPicture.querySelector('.social__caption').textContent = item.description;
  bigPicture.querySelector('.social__comments').innerHTML = allComments;

  // item.comments.slice(0, 5).forEach((comment) => {
  //   console.log(comment);
  //   bigPicture.querySelector('.social__comments').innerHTML = allComments;
  // });

  if (commentsShow >= item.comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShow = item.comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  // const fragment = document.createDocumentFragment();

  // for (let i = 0; i < commentsShow; i++) {
  //   const commentElement = [i];
  //   fragment.appendChild(commentElement);
  // }

  // commentList.innerHTML = '';
  // commentList.appendChild(fragment);
  // commentCount.innerHTML = `${commentsShow} из <span class="comments-count">${item.comments.length}</span> комментариев`;


  // if(item.comments.length < 5) {
  //   commentsLoader.classList.add('hidden');
  // }


  // const fragment = document.createDocumentFragment();

  // for (let i = 0; item.comments.length <= 5; i++) {
  //   const commentElement = createComment.comments[i];
  //   fragment.appendChild(commentElement);
  // }

  commentsLoader.addEventListener('click', () => {
    // let commentsShow = 0;
    commentsShow += 5;

    if (commentsShow >= item.comments.length) {
      commentsLoader.classList.add('hidden');
      commentsShow = item.comments.length;
    } else {
      commentsLoader.classList.remove('hidden');
    }

    // const fragment = document.createDocumentFragment();

    // for (let i = 0; item.comments.length <= 5; i++) {
    //   console.log('345');
    //   fragment.appendChild(commentElement);
    // }

    commentList.innerHTML = '';
    // commentList.appendChild(fragment);
    commentCount.innerHTML = `${commentsShow} из <span class="comments-count">${item.comments.length}</span> комментариев`;
  });

}


export {bigPicture, bigPictureClose, generatebigPicture, commentsLoader};
