import { uploadOverlay, pristine } from './upload.js';
import { hideModal } from './modal.js';
// import { sendData } from './api.js';
// import { showAlert } from './functions.js';

const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};

const form = document.querySelector('.img-upload__form');
const submitForm = document.querySelector('.img-upload__submit');

const blockSubmitButton = () => {
  submitForm.disabled = true;
  submitForm.textContent = SubmitButtonText.SENDING;
};

const unblockSubmitButton = () => {
  submitForm.disabled = false;
  submitForm.textContent = SubmitButtonText.IDLE;
};

const setOnFormSubmit = (cb) => {
  form.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      await cb(new FormData(form));
      hideModal(uploadOverlay);
      unblockSubmitButton();
    }
  });
};


// const OnFormSubmit = new Promise(function (resolve, reject) {
//   resolve(sendData(data));
// });

// const OnFormSubmit = new Promise(function (resolve, reject) {
//   reject(
//     new Error('Не удалось отправить форму. Попробуйте еще раз')
//   );
// });

// OnFormSubmit.then(() => {}).catch(() => {});


export {setOnFormSubmit};
