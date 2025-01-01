const AVATARS = [
  'img/avatar-1.svg',
  'img/avatar-2.svg',
  'img/avatar-3.svg',
  'img/avatar-4.svg',
  'img/avatar-5.svg',
  'img/avatar-6.svg',
];

const MESSAGE = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец от света.',
  'Моя бабушка случайно чихнула с фотоаппаратом в воде и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекрасились и они стали красивыми.',
];

const NAMES = [
  'Иван',
  'Хуан Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Жан',
  'Ли',
];

const DESCRIPTION = [
  'Очень красивая фотография',
  'Приятная фотография',
  'Потрясающая фотография',
  'Очень красивая фотография',
  'Приятная фотография',
  'Потрясающая фотография',
];

const SIMILAR_PHOTO_COUNT = 25;

const getRandomInteger = (a, b) => {
  const lower = Math.ceil(Math.min(a, b));
  const upper = Math.floor(Math.max(a, b));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// function createIdGenerator () {
//   let lastGeneratedId = 0;

//   return function () {
//     lastGeneratedId += 1;
//     return lastGeneratedId;
//   };
// }

// const generatePhotoId = createIdGenerator();

function createRandomIdFromRangeGenerator(min, max) {
  const previousValues = [];

  return function () {
    let currentValue = getRandomInteger(min, max);
    if (previousValues.length >= (max - min + 1)) {
      return null;
    }
    while (previousValues.includes(currentValue)) {
      currentValue = getRandomInteger(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
}

const generateCommentId = createRandomIdFromRangeGenerator(1, 100);
const generatePhotoId = createRandomIdFromRangeGenerator(1, 25);
const generatePhotoUrl = createRandomIdFromRangeGenerator(1, 25);

const getRandomArrayElement = (elements) => elements[getRandomInteger(0, elements.length - 1)];

const createComment = () => ({
  id: generateCommentId(),
  avatar: getRandomArrayElement(AVATARS),
  message: getRandomArrayElement(MESSAGE),
  name: getRandomArrayElement(NAMES),
});

function createComments() {
  return Array.from({length: getRandomInteger(2, 6)}, createComment);
}

const createPhoto = () => ({
  id: generatePhotoId(),
  url: `photos/${generatePhotoUrl()}.jpg`,
  description: getRandomArrayElement(DESCRIPTION),
  likes: getRandomInteger(15, 200),
  comments: createComments(),
});

const similarPhotos = Array.from({length: SIMILAR_PHOTO_COUNT}, createPhoto);
console.log(similarPhotos);

// const photo = {
//   id: 1,
//   url: 'photos/{{i}}.jpg',
//   description: 'Описание фото',
//   likes: getRandomInteger(15, 200),
//   comments: [
//     {
//       id: 1,
//       avatar: AVATARS[getRandomInteger(0, AVATARS.length - 1)],
//       message: MESSAGE[getRandomInteger(0, MESSAGE.length - 1)],
//       name: 'Иван',
//     },
//     {
//       id: 2,
//       avatar: AVATARS[getRandomInteger(0, AVATARS.length - 1)],
//       message: MESSAGE[getRandomInteger(0, MESSAGE.length - 1)],
//       name: 'Андрей',
//     },
//   ],
// };

// console.log(similarPhotos);
// console.log(similarComment);


