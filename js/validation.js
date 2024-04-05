// import { uploadFormElement } from './form.js';
import { isEscapeKey } from './utils';
import { MAX_COMMENT_LENGTH } from './constants';
const uploadFormElement = document.querySelector('.img-upload__form');
const commentTextArea = document.querySelector('.text__description');
const hashtagInput = document.querySelector('.text__hashtags');

const errorMessage = {
  hashtag: {
    INVALID_HASHTAG: 'введён невалидный хэштег',
    INCORRECT_QUANTITY: 'превышено количество хэштегов',
    NOT_UNIQUE_HASHTAG: 'хэштеги повторяются',
  },
  comment: {
    MAX_COMMENT_LENGTH: `длина комментария больше ${MAX_COMMENT_LENGTH} символов`,
  }
};

const pristine = new Pristine(
  uploadFormElement,
  {
    classTo: 'img-upload__field-wrapper',
    errorClass: 'img-upload__field-wrapper--error',
    errorTextParent: 'img-upload__field-wrapper',

  });


const getHashtagsArray = (value) => value.trim().replace(/\s+/g, ' ').toLowerCase().split(' ');

const validateCountHashtags = (value) => getHashtagsArray(value).length <= 5;

const validateUniqueHashtags = (value) => {
  const hashtags = getHashtagsArray(value);
  const uniqueArray = [...new Set(hashtags)];
  return hashtags.length === uniqueArray.length;
};

const validateHashtags = (value) => {
  const hashtags = getHashtagsArray(value);
  return hashtags.every((item) => /^#[a-zа-яё0-9]{1,20}$/i.test(item));
};


const validateComment = (value) => value.length <= 20;


pristine.addValidator(
  hashtagInput,
  validateCountHashtags,
  errorMessage.hashtag.INCORRECT_QUANTITY,
  3,
  true
);

pristine.addValidator(
  hashtagInput,
  validateUniqueHashtags,
  errorMessage.hashtag.NOT_UNIQUE_HASHTAG,
  2,
  true
);

pristine.addValidator(
  hashtagInput,
  validateHashtags,
  errorMessage.hashtag.INVALID_HASHTAG,
  1,
  true
);

pristine.addValidator(
  commentTextArea,
  validateComment,
  errorMessage.comment.MAX_COMMENT_LENGTH
);


commentTextArea.addEventListener('keydown', (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    evt.stopPropagation();
  }
});

const validate = () => pristine.validate();
const resetValidation = () => pristine.reset();
export { validate, resetValidation };
