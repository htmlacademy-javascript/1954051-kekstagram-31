import { uploadFormElement } from './form';
import { isEscapeKey } from './utils';
import { MAX_COMMENT_LENGTH } from './constants';

const commentTextArea = document.querySelector('.text__description');
const hashtagInput = document.querySelector('.text__hashtags');

pristine.addValidator(
  hashtagInput;
  validateHashtags;
  getErrorMessage;
);

pristine.addValidator(
commentTextArea;
validateComment;
getErrorMessage;
);

const errorMessage = {
hashtag: {
  INVALID_HASHTAG: 'введён невалидный хэштег',
  INCORRECT_QUANTITY: 'превышено количество хэштегов',
  NOT_UNIQUE_HASHTAG:  'хэштеги повторяются',
},
comment: {
  MAX_COMMENT_LENGTH: `длина комментария больше ${MAX_COMMENT_LENGTH} символов`,
}
};


const pristine = new Pristine(
  uploadFormElement,
   {
    classTo: 'img-upload__field-wrapper',
    errorClass: 'img-upload__field-wrapper-erroor',
    errorTextParrent: 'img-upload__field-wrapper',

});



commentTextArea.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
  }
});

const validate = () => pristine.validate();
const resetValidation = () => pristine.reset();
export {validate, resetValidation};
