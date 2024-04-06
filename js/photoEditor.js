// import { resetScale } from './scale.js';
import { Effects, ImgEffects } from './constants.js';

const photoEditor = document.querySelector('.img-upload__overlay');
const previewImageElement = document.querySelector('.img-upload__preview img');
const sliderElement = photoEditor.querySelector('.effect-level__slider');
const sliderValueElement = photoEditor.querySelector('.effect-level__value');
const effectsList = photoEditor.querySelector('.effects__list');

let selectedEffect = 'none';

noUiSlider.create(sliderElement, {
  range: {
    min: 0,
    max: 100,
  },
  start: 80,
  connect: 'lower'
});

sliderElement.noUiSlider.on('update', () => {
  sliderValueElement.value = sliderElement.noUiSlider.get();
  if (selectedEffect === 'none') {
    sliderElement.parentElement.classList.add('hidden');
  } else {
    sliderElement.parentElement.classList.remove('hidden');
    previewImageElement.style.filter = ImgEffects[selectedEffect](sliderValueElement.value);
  }
});

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

export {resetEffects};
