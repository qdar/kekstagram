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

// try {
//   const data = getData();
//   console.log(data);
//   // renderGallery(data);
// } catch (err) {
//   showAlert (err.message);
// }

// try {
//   const data = await getData();
//   renderGallery(data);
// } catch (err) {
//   showAlert (err.message);
// }


// fetch('https://28.javascript.htmlacademy.pro/kekstagram/data', {
//   method: 'GET', body: null
// })
//   .then((response) => {
//     if (!response.ok) {
//       throw new Error(errorText);
//     }
//     return response.json();
//   });
