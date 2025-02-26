import {onPopupEscKeydown} from './functions.js';

const body = document.querySelector('body');

function generateModal() {
  body.classList.add('modal-open');
  document.addEventListener('keydown', onPopupEscKeydown);
}

function closeModal() {
  body.classList.remove('modal-open');
  document.removeEventListener('keydown', onPopupEscKeydown);
}

export {generateModal, closeModal};
