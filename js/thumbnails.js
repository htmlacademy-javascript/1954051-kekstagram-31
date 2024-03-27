// import { openUserModal } from "./modal";
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture'); //шаблон

const picturesArea = document.querySelector('.pictures'); // место, куда записываем сгенерированные фото

const photoDescriptions = (photo) => {
  const picturesFragment = document.createDocumentFragment();
  photo.forEach(({ url, description, likes, comments }) => {
    const pictureClone = pictureTemplate.cloneNode(true);
    // pictureClone.dataset.pictureId = id; // добавляет id миниатюрам
    pictureClone.querySelector('.picture__img').src = url;
    pictureClone.querySelector('.picture__img').alt = description;
    pictureClone.querySelector('.picture__likes').textContent = likes;
    pictureClone.querySelector('.picture__comments').textContent = comments.length;
    picturesFragment.appendChild(pictureClone);
    picturesArea.appendChild(pictureClone);
  });

};
export { photoDescriptions};

picturesArea.addEventListener('click', (evt) => {
  const currentPicture = evt.target.closest('.picture');
  if (currentPicture) {
    evt.preventDefault(); // предотвращаем открытие в новом окне
    // тут мы должны сопоставить в переменной id фото c id, добавленным через dataset
    // const currentPhoto =
    openUserModal(pictureClone.dataset.pictureID);
  }
});
