import { openUserModal } from './modal.js';
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture'); //шаблон

const picturesArea = document.querySelector('.pictures'); // место, куда записываем сгенерированные фото

const localPhotos = [];

const clearLocalPhotos = () => {
  localPhotos.length = 0;
};

const photoDescriptions = (photos) => {
  clearLocalPhotos();
  localPhotos.push(...photos.slice());
  const picturesFragment = document.createDocumentFragment();
  photos.forEach(({ id, url, description, likes, comments }) => {
    const pictureClone = pictureTemplate.cloneNode(true);
    pictureClone.dataset.pictureId = id; // добавляет id миниатюрам
    pictureClone.querySelector('.picture__img').src = url;
    pictureClone.querySelector('.picture__img').alt = description;
    pictureClone.querySelector('.picture__likes').textContent = likes;
    pictureClone.querySelector('.picture__comments').textContent = comments.length;
    picturesFragment.appendChild(pictureClone);
  });
  picturesArea.appendChild(picturesFragment);
};


picturesArea.addEventListener('click', (evt) => {
  const currentPictureElement = evt.target.closest('.picture');
  if (currentPictureElement) {
    evt.preventDefault(); // предотвращаем открытие в новом окне
    const currentId = Number(currentPictureElement.dataset.pictureId);
    const currentPhotoData = localPhotos.find((item) => item.id === currentId);
    openUserModal(currentPhotoData);
  }
});


export { photoDescriptions };
