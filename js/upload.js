import { onPopupEscKeydown, generateModal, closeModal } from './modal.js';
import { TAG_ERROR_TEXT, MAX_HASHTAGS_COUNT, VALID_HASHTAGS } from './data.js';
import { resetEffects } from './effects.js';
import { resetScale } from './scale.js';
import { isAtiveElement } from './functions.js';

const uploadButton = document.querySelector('.img-upload__input');
const uploadOverlay = document.querySelector('.img-upload__overlay');
const uploadCancel = document.querySelector('.img-upload__cancel');
const hashtagField = document.querySelector('.text__hashtags');
const descriptionField = document.querySelector('.text__description');

const form = document.querySelector('.img-upload__form');
const pristine = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextClass: 'img-upload__field-wrapper__error',
});

function resetForm() {
  hashtagField.value = '';
  descriptionField.value = '';
  pristine.reset();
}

uploadButton.addEventListener('change', () => {
  generateModal(uploadOverlay);
  document.addEventListener('keydown', (evt) => onPopupEscKeydown(evt, uploadOverlay));
  resetScale();
  resetEffects();
  resetForm();
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

pristine.addValidator(
  hashtagField,
  validateTags,
  TAG_ERROR_TEXT
);

isAtiveElement(hashtagField);
isAtiveElement(descriptionField);

export {uploadOverlay, pristine, uploadCancel};
