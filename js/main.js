import {PHOTO_COUNT} from './data.js';
import {createPhoto} from './createPhoto.js';

const getPhotos = Array.from({length: PHOTO_COUNT}, createPhoto);
// console.log(getPhotos);
