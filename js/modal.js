import { isEscapeKey } from './utils';
import { commentsInit } from './render-comments.js';

//ищем, откуда берем модалку
// const picturesArea = document.querySelector('.pictures'); // место, куда мы положили сгенерированные миниатюры
const userModalElement = document.querySelector('.big-picture'); // модальное окно с полноразмерным фото
const userModalCloseElement = document.querySelector('.big-picture__cancel'); // кнопка закрытия модального окна
// const likesCount = userModalElement.querySelector('.likes-count');

const showModal = () => {
  userModalElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
};

const hideModal = () => {
  userModalElement.classList.add('hidden');
  document.body.classList.remove('modal-open');
};

const renderModal = (photo) => {
  userModalElement.querySelector('.big-picture__img img').src = photo.url;
  userModalElement.querySelector('.social__comment-shown-count').textContent = photo.comments.length;
  userModalElement.querySelector('.likes-count').textContent = photo.likes;
};

// функция открывает модальное окно
const openUserModal = (photo) => {
  showModal();
  renderModal(photo);
  commentsInit(photo.comments);
  document.addEventListener('keydown', onDocumentKeydown);
};

// функция закрывает модальное окно
const closeUserModal = function () {
  hideModal();
  document.removeEventListener('keydown', onDocumentKeydown);
};

userModalCloseElement.addEventListener('click', (evt) => {
  closeUserModal();
});

const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

export { openUserModal };
