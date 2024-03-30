import { createPhotoDescriptions } from './data.js';
createPhotoDescriptions();

import { photoDescriptions } from './thumbnails.js';
const photos = createPhotoDescriptions();
photoDescriptions(photos);


// import { openUserModal } from './modal.js';

// photoDescriptions.addEventListener('click', (evt) => {
//   const currentPicture = evt.target.closest('.picture');
//   if (currentPicture) {
//     openUserModal(pictureClone.dataset.pictureID);
//   }
// });
