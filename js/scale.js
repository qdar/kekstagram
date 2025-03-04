const scaleControlSmaller = document.querySelector('.scale__control--smaller');
const scaleControlBigger = document.querySelector('.scale__control--bigger');
const scaleInputValue = document.querySelector('.scale__control--value');
// const imagePreview = document.querySelector('.img-upload__preview');
const image = document.querySelector('.img-upload__preview img');

const STEP_SCALE = 25;
const MIN_SCALE = 25;
const MAX_SCALE = 100;
const DEFAULT_SCALE = 100;

scaleInputValue.value = `${DEFAULT_SCALE}%`;

const imageScale = (value) => {
  scaleInputValue.value = `${value}%`;
  image.style.transform = `scale(${value / 100})`;
};

function onScaleSmallerClick() {
  const currentValue = parseInt(scaleInputValue.value, 10);
  let newValue = currentValue - STEP_SCALE;
  if (currentValue === MIN_SCALE) {
    newValue = MIN_SCALE;
  } else {
    newValue = currentValue - STEP_SCALE;
  }
  imageScale(newValue);
}

function onScaleBiggerClick() {
  const currentValue = parseInt(scaleInputValue.value, 10);
  let newValue = currentValue + STEP_SCALE;
  if (currentValue === MAX_SCALE) {
    newValue = MAX_SCALE;
  } else {
    newValue = currentValue + STEP_SCALE;
  }
  imageScale(newValue);
}

const resetScale = () => {
  imageScale(DEFAULT_SCALE);
};

scaleControlSmaller.addEventListener('click', onScaleSmallerClick);
scaleControlBigger.addEventListener('click', onScaleBiggerClick);

export {resetScale};
