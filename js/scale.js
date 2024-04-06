const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');
const previewImageElement = document.querySelector('.img-upload__preview img');

const SCALE_STEP = 25;
const SCALE_MAX = 100;
const SCALE_MIN = 25;

let currentScale = SCALE_MAX;

const renderScale = () => {
  scaleValueElement.value = `${currentScale}%`;
  previewImageElement.style.transform = `scale(${currentScale / 100})`;
};

const resetScale = () => {
  currentScale = SCALE_MAX;
  renderScale();
};

scaleSmallerButton.addEventListener('click', () => {
  currentScale = (currentScale > SCALE_MIN) ? currentScale - SCALE_STEP : SCALE_MIN;
  renderScale();
});

scaleBiggerButton.addEventListener('click', () => {
  currentScale = (currentScale < SCALE_MAX) ? currentScale + SCALE_STEP : SCALE_MAX;
  renderScale();
});

export { resetScale };
