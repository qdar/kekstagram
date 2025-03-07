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
    await sendData(data);
  } catch (err) {
    showAlert (err.message);
  }
});

// try {
//   const data = await getData();
//   renderGallery(data);
// } catch (err) {
//   showAlert (err.message);
// }
