import {PHOTO_COUNT} from './constants.js';
import {createPhoto} from './createPhoto.js';

const getPhotos = Array.from({length: PHOTO_COUNT}, createPhoto);
// eslint-disable-next-line no-console
console.log(getPhotos);
