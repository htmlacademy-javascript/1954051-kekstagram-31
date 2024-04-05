import './form.js';

import { createPhotoDescriptions } from './data.js';
createPhotoDescriptions();

import { photoDescriptions } from './thumbnails.js';
const photo = createPhotoDescriptions();
photoDescriptions(photo);




// import { openUserModal } from './modal.js';

// photoDescriptions.addEventListener('click', (evt) => {
//   const currentPicture = evt.target.closest('.picture');
//   if (currentPicture) {
//     openUserModal(pictureClone.dataset.pictureID);
//   }
// });
