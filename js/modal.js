import {bigPicture} from './bigPicture.js';
import {bigPictureClose} from './bigPicture.js';
import {isEscapeKey} from './functions.js';

const body = document.querySelector('body');

const onPopupEscKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeModal();
  }
};

function generateModal() {
  body.classList.add('modal-open');
  bigPicture.classList.remove('hidden');
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeModal() {
  body.classList.remove('modal-open');
  bigPicture.classList.add('hidden');
  document.removeEventListener('keydown', onPopupEscKeydown);
}

bigPictureClose.addEventListener('click', () => {
  closeModal();
});


export {generateModal};
