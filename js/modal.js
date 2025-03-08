import {isEscapeKey} from './functions.js';

const body = document.querySelector('body');

const onPopupEscKeydown = (evt, x) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    body.classList.remove('modal-open');
    x.classList.add('hidden');
  }
};

function generateModal(x) {
  body.classList.add('modal-open');
  x.classList.remove('hidden');
}

const hideModal = (x) => {
  body.classList.remove('modal-open');
  x.classList.add('hidden');
};

function closeModal(button, x) {
  button.addEventListener('click', () => {
    hideModal(x);
  });
}

export {generateModal, closeModal, onPopupEscKeydown, hideModal};
