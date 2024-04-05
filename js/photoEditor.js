import { resetScale } from './scale.js';
import { EFFECTS } from './constants.js';

const photoEditor = document.querySelector('.img-upload__overlay');
const previewImageElement = document.querySelector('.img-upload__preview img');
const sliderElement = photoEditor.querySelector('.effect-level__slider');
const sliderValueElement = photoEditor.querySelector('.effect-level__value');
const effectsList = photoEditor.querySelector('.effects__list');

let selectedEffect = 'none';


// записываем начальное значение слайдера
sliderValueElement.value = 1;

noUiSlider.create(sliderElement, {
  ...Effects.DEFAULT,
  connect: 'lower',
  format:
  {
    to: function (value) {
      return Number.isInteger(value)
        ? value.toFixed(0)
        : value.toFixed(1);
    },
    from: function (value) {
      return parseFloat(value);
    }
  }
});

sliderElement.noUiSlider.on('update', () => {
  sliderValueElement.value = sliderElement.noUiSlider.get();
  if (selectedEffect === 'none') {
    sliderElement.parentElement.classList.add('hidden');
  } else {
    sliderElement.parentElement.classList.remove('hidden');
    previewImageElement.style.filter = InlineStyles[selectedEffect].replace('value', sliderValueElement.value);
  };

  const resetEffects = () => {
    previewImageElement.style.filter = '';
    sliderElement.parentElement.classList.add('hidden');
  };

  effectsList.addEventListener('change', (evt) => {
    selectedEffect = evt.target.value;
    if (selectedEffect === 'none') {
      resetEffects();
    } else {
      sliderElement.noUiSlider.updateOptions(Effects[selectedEffect.toUpperCase()]);
    }
  });


const openPhotoEditor = () => {
  photoEditor.classList.remove('hidden');
  pageBody.classList.add('modal-open');
};

const closePhotoEditor = () => {
  photoEditor.classList.add('hidden');
  pageBody.classList.remove('modal-open');
  resetScale();
  resetEffects();
};
