const bigPicture = document.querySelector('.big-picture');
const bigPictureClose = document.querySelector('#picture-cancel');

const commentsLoader = document.querySelector('.comments-loader');
const commentList = document.querySelector('.social__comments');
const commentCount = document.querySelector('.social__comment-count');

function generatebigPicture(e, item) {
  let commentsShow = 5;

  let allComments = item.comments.slice(0, commentsShow).map((comment) => `
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

  if (commentsShow >= item.comments.length) {
    commentsLoader.classList.add('hidden');
    commentsShow = item.comments.length;
  } else {
    commentsLoader.classList.remove('hidden');
  }

  commentsLoader.addEventListener('click', () => {
    commentsShow += 5;
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
    } else {
      commentsLoader.classList.remove('hidden');
    }

    commentList.innerHTML = '';
    bigPicture.querySelector('.social__comments').innerHTML = allComments;
    commentCount.innerHTML = `${commentsShow} из <span class="comments-count">${item.comments.length}</span> комментариев`;
  });
}


export {bigPicture, bigPictureClose, generatebigPicture, commentsLoader};
