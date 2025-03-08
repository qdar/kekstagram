import './thumbnail.js';
import './upload.js';
import './scale.js';
import './effects.js';
import './form.js';

import {sendData} from './api.js';
import {showAlert} from './functions.js';
import {setOnFormSubmit} from './form.js';

setOnFormSubmit(async (data) => {
  try {
    sendData(data);
    showAlert('Данные успешно отправлены');
  } catch (err) {
    showAlert (err.message);
  }
});
