import { isEscapeKey } from "./utils";
import { pictureId } from "./thumbnails";
import { renderComments, clearComments, commentsLoaderElement } from "./render-comments";


//ищем, откуда берем модалку
const picturesArea = document.querySelector('.pictures'); // место, куда мы положили сгенерированные миниатюры
const userModalElement = document.querySelector('.big-picture'); // модальное окно с полноразмерным фото
const userModalCloseElement = document.querySelector('big-picture__cancel'); // кнопка закрытия модального окна
const likesCount = userModalElement.querySelector('.likes-count');
const comments = [];


const onDocumentKeydown = (evt) => {
  if (isEscapeKey(evt)) {
    evt.preventDefault();
    closeUserModal();
  }
};

// функция открывает модальное окно
const openUserModal = (pictureId) => {

// вынести эти элементы в константы наверх, как у Веры?
  userModalElement.querySelector('.big-picture__img img').src = url;
  userModalElement.querySelector('.social__comment-shown-count').textContent = comments.length;
  // userModalElement.querySelector('.social__comment-total-count').textContent = comments.length;
  userModalElement.querySelector('.likes-count').textContent = likes

  renderComments(comments);

  userModalElement.classList.remove('hidden');
  commentsLoaderElement.classList.remove('hidden');
  document.body.classList.add('modal-open');
  document.addEventListener('keydown', onDocumentKeydown);

};


// функция закрывает модальное окно
const closeUserModal = function () {
  clearComments();

  userModalElement.classList.add('hidden');
  document.removeEventListener('keydown', onDocumentKeydown);
};

userModalCloseElement.addEventListener('click', (evt) => {
  document.body.classList.remove('modal-open');
  closeUserModal();
});

export {openUserModal};
