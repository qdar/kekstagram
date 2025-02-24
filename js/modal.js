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
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeModal() {
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
}

export {generateModal, closeModal};
