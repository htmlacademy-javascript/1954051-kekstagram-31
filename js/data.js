import {
  getRandomInteger,
  createRandomElement,
  getUniqueNumber
} from './utils.js';

const NAMES = [
  'Анастасия',
  'Виктория',
  'Дарина',
  'Ева',
  'Злата',
  'Катерина',
  'Мирослава',
  'Мария',
  'София',
  'Соломия',
  'Дарья',
  'Полина',
  'Анна',
  'Андрей',
  'Богдан',
  'Владимир',
  'Василий',
  'Данило',
  'Иван',
  'Матвей',
  'Николай',
  'Александр',
  'Ярослав',
  'Тимофей',
  'Дмитрий'
];

const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
];

const DESCRIPTIONS = [
  'что-то на белом фоне',
  'что-то на сером фоне',
  'просто изображение',
];

const MIN_COMMENTS = 0;
const MAX_COMMENTS = 30;
const MIN_LIKES = 15;
const MAX_LIKES = 200;


const createComments = () => ({
  id: getRandomInteger(0, 500),
  name: createRandomElement(NAMES),
  message: createRandomElement(MESSAGES),
  avatar: `img/avatar-${getRandomInteger(1, 6)}.svg`,
});

//console.log(createComments());
createComments();

const createPhotoDescriptions = () => {
  const uniqueIdPhoto = getUniqueNumber(1, 25);
  const photos = [];
  for (let i = 1; i <= 25; i++) {
    const photo = {
      id: uniqueIdPhoto(),
      url: `photos/${i}.jpg`,
      description: DESCRIPTIONS[getRandomInteger(0, DESCRIPTIONS.length - 1)],
      likes: getRandomInteger(MIN_LIKES, MAX_LIKES),
      comments: Array.from({ length: getRandomInteger(MIN_COMMENTS, MAX_COMMENTS) }, createComments),
    };
    photos.push(photo);
  }
  return photos;
};

export {
  createPhotoDescriptions};
