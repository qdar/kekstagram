import { onPopupEscKeydown, generateModal, closeModal } from './modal.js';
import { TAG_ERROR_TEXT, MAX_HASHTAGS_COUNT, VALID_HASHTAGS } from './data.js';

const uploadButton = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('.img-upload__cancel');

const form = document.querySelector('.img-upload__form');
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

// const fileField = document.querySelector('#upload-file');
const hashtagField = document.querySelector('text__hashtags');
// const commentField = document.querySelector('text__description');

uploadButton.addEventListener('change', () => {
  generateModal(uploadOverlay);
  document.addEventListener('keydown', (evt) => onPopupEscKeydown(evt, uploadOverlay));
});

closeModal(uploadCancel, uploadOverlay);

const isValidTag = (tag) => VALID_HASHTAGS.test(tag);

const hasValidCount = (tags) => tags.length <= MAX_HASHTAGS_COUNT;

const hasUniqueTags = (tags) => {
  const lowerCaseTags = tags.map((tag) => tag.toLowerCase());
  return lowerCaseTags.length === new Set(lowerCaseTags).size;
};
const validateTags = (value) => {
  const tags = value.trim().split(' ').filter((tag) => tag.trim().length);
  return hasValidCount(tags) && hasUniqueTags(tags) && tags.every(isValidTag);
};

console.log(validateTags('#900 #903 #904'));

pristine.addValidator(
  hashtagField,
  validateTags,
  TAG_ERROR_TEXT
);

export {uploadOverlay};
