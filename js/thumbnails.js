
// На основе временных данных для разработки и шаблона #picture создайте DOM-элементы, соответствующие фотографиям, и заполните их данными:

// Адрес изображения url подставьте как атрибут src изображения.
// Описание изображения description подставьте в атрибут alt изображения.
// Количество лайков likes выведите в блок .picture__likes.
// Количество комментариев comments выведите в блок .picture__comments.
// Отрисуйте сгенерированные DOM-элементы в блок .pictures. Для вставки элементов используйте DocumentFragment.

// import {createPhotoDescriptions} from './data.js';

const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture'); //шаблон

const picturesArea = document.querySelector('.pictures'); // место, куда записываем сгенерированные фото

const photoDescriptions = (photo) => {
  const picturesFragment = document.createDocumentFragment();
  photo.forEach(({url, description, likes, comments}) => {
    const pictureClone = pictureTemplate.cloneNode(true);
    pictureClone.querySelector('.picture__img').src = url;
    pictureClone.querySelector('.picture__img').alt = description;
    pictureClone.querySelector('.picture__likes').textContent = likes;
    pictureClone.querySelector('.picture__comments').textContent = comments.length;
    picturesFragment.appendChild(pictureClone);
    picturesArea.appendChild(pictureClone);
  });
};
export { photoDescriptions };


