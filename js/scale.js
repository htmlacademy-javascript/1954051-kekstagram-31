const scaleSmallerButton = document.querySelector('.scale__control--smaller');
const scaleBiggerButton = document.querySelector('.scale__control--bigger');
const scaleValueElement = document.querySelector('.scale__control--value');
const previewImageElement = document.querySelector('.img-upload__preview img');


// const SCALE_STEP = 25;
// const SCALE_MAX = 100;
// const SCALE_MIN = 25;

const resetScale = () => {
  scaleValueElement.value = `${100}%`;
  previewImageElement.style.transform = 'none';
};

const renderScale = (value) => {
  scaleValueElement.value = `${parseInt(value, 10)}%`;
  const resultForScale = `${(parseInt(value, 10) / 100)}`;
  previewImageElement.style.transform = `scale(${resultForScale})`;
};

scaleSmallerButton.addEventListener('click', () => {
  const value = parseInt(scaleInput.value, 10);
  const newValue = (value > 25) ? value - 25 : value;
  renderScale(newValue);
});

scaleBiggerButton.addEventListener('click', () => {
  const value = parseInt(scaleInput.value, 10);
  const newValue = (value < 100) ? value + 25 : value;
  renderScale(newValue);
});

export { resetScale };
