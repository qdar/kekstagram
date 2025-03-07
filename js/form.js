import { showAlert } from './functions.js';
import { pristine } from './upload.js';

const SubmitButtonText = {
  IDLE: 'Сохранить',
  SENDING: 'Сохраняю...'
};

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
  submitForm.addEventListener('submit', async (evt) => {
    evt.preventDefault();

    const isValid = pristine.validate();

    if (isValid) {
      blockSubmitButton();
      await cb(new FormData(submitForm));
      unblockSubmitButton();
    }

    // if (isValid) {
    //   blockSubmitButton();
    //   await cb(new FormData(evt.target))
    //     .then(() => {
    //       showAlert('Данные успешно отправлены');
    //     })
    //     .catch(
    //       (err) => {
    //         showAlert(err.message);
    //       }
    //     )
    //     .finally(unblockSubmitButton);
    // }
  });
};


export {setOnFormSubmit};
