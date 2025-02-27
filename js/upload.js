import { onPopupEscKeydown, generateModal, closeModal } from './modal.js';

const uploadButton = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('.img-upload__cancel');

const form = document.querySelector('.img-upload__form');
const fileField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('text__hashtags');
const commentField = document.querySelector('text__description');

const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

uploadButton.addEventListener('change', () => {
  generateModal(uploadOverlay);
  document.addEventListener('keydown', (evt) => onPopupEscKeydown(evt, uploadOverlay));
});

closeModal(uploadCancel, uploadOverlay);

export {uploadOverlay};
