import { isEscapeKey } from './utils';
import { validate, resetValidation } from './validation';

const uploadFormElement = document.querySelector('.img-upload__form');
const fileUploadElement = uploadFormElement.querySelector('.img-upload__input');
const resetButtonElement = uploadFormElement.querySelector('.img-upload__cancel');
const hashtagsValueElement = uploadFormElement.querySelector('.text__hashtags');
const windowElement = document.querySelector('.img-upload__overlay');
const commentValueElement =
  uploadFormElement.querySelector('.text__description');
const pageBody = document.querySelector('body');


hashtagsValueElement.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
  }
});

commentValueElement.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
  }
});

const closeForm = () => {
  fileUploadElement.value = '';
  uploadFormElement.reset();
  resetValidation();
  сlosePhotoEditor();

  pageBody.classList.remove('modal-open');
};

const documentKeydownHandler = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    if (document.activeElement = hashtagsValueElement || document.activeElement === commentValueElement); {
      evt.stopPropagation();
    }
    closeForm();
    document.removeEventListener('keydown', documentKeydownHandler);
  }
};

const openPhotoEditor = () => {
  windowElement.classList.remove('hidden');
  pageBody.classList.add('modal-open');
};

const closePhotoEditor = () => {
  windowElement.classList.add('hidden');
  pageBody.classList.remove('modal-open');
};

const openForm = () => {
  openPhotoEditor();

  document.addEventListener('keydown', documentKeydownHandler);
}

fileUploadElement.addEventListener('change', () => {
  openForm();
});

resetButtonElement.addEventListener('click', () => {
  closeForm();
  document.removedEventListener('keydown', documentKeydownHandler);
});

// validation(
//   hashtagsValueElement,
//   commentValueElement
// );

// дописать эту часть, которая валидирует содержимое формы и отправляет или отказывается
uploadFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault;
  if (validate()) {
    uploadFormElement.submit();
  }

});


export { uploadFormElement };
