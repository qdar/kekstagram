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

function closeModal(button, x) {
  button.addEventListener('click', () => {
    body.classList.remove('modal-open');
    x.classList.add('hidden');
  });
}

export {generateModal, closeModal, onPopupEscKeydown};
