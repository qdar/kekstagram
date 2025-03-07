const EFFECTS = [
  {
    name: 'none',
    effect: 'none',
    min: 0,
    max: 100,
    step: 1,
    unit: '',
  },
  {
    name: 'chrome',
    effect: 'grayscale',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'sepia',
    effect: 'sepia',
    min: 0,
    max: 1,
    step: 0.1,
    unit: '',
  },
  {
    name: 'marvin',
    effect: 'invert',
    min: 0,
    max: 100,
    step: 1,
    unit: '%',
  },
  {
    name: 'phobos',
    effect: 'blur',
    min: 0,
    max: 3,
    step: 0.1,
    unit: 'px',
  },
  {
    name: 'heat',
    effect: 'brightness',
    min: 1,
    max: 3,
    step: 0.1,
    unit: '',
  }
];

let currentEffect = EFFECTS[0];

const imgPreview = document.querySelector('.img-upload__preview');
const effectLevel = document.querySelector('.img-upload__effect-level');
const sliderElement = document.querySelector('.effect-level__slider');
const effectsSection = document.querySelector('.img-upload__effects');

effectLevel.classList.add('hidden');

noUiSlider.create(sliderElement, {
  range: {
    min: EFFECTS[0].min,
    max: EFFECTS[0].max,
  },
  start: EFFECTS[0].max,
  step: EFFECTS[0].step,
  connect: 'lower',
});

const updateSlider = () => {
  sliderElement.noUiSlider.updateOptions({
    range: {
      min: currentEffect.min,
      max: currentEffect.max,
    },
    start: currentEffect.max,
    step: currentEffect.step,
  });
};

const onChangeEffect = (effect) => {
  currentEffect = EFFECTS.find((item) => item.name === effect.target.value);
  imgPreview.className = `img-upload__preview effects__preview--${effect.target.value}`;

  if (effect.target.value === 'none') {
    effectLevel.classList.add('hidden');
  } else {
    effectLevel.classList.remove('hidden');
  }

  updateSlider();
};

const onSliderUpdate = () => currentEffect.effect === 'none' ? (imgPreview.style.filter = `${currentEffect.effect}`) : (imgPreview.style.filter = `${currentEffect.effect}(${sliderElement.noUiSlider.get()}${currentEffect.unit})`);


effectsSection.addEventListener('change', onChangeEffect);
sliderElement.noUiSlider.on('update', onSliderUpdate);

const resetEffects = () => {
  effectLevel.classList.add('hidden');
  imgPreview.className = 'img-upload__preview';
  currentEffect = EFFECTS[0];
  updateSlider();
};

export { resetEffects };
