const COUNT_STEP = 5;
let currentCount = 0;
let comments = [];

const userModalElement = document.querySelector('.big-picture');
const socialCommentsElement = userModalElement.querySelector('social__comments');
const socialCommentTemplate = socialCommentsElement.querySelector('social__comment');
const commentsCountElement = userModalElement.querySelector('social__comment-count');
const commentsLoaderElement = userModalElement.querySelector('social__comments-loader');
socialCommentsElement.innerHTML = '';

const renderNextComments = () => {
  const socialCommentsFramgent = document.createDocumentFragment();
  const renderedComments = comments.slice(currentCount, currentCount + COUNT_STEP);
  const renderedCommentsLength = renderedComments.length + currentCount;

  renderedComments.forEach((comment) => {
    const socialCommmentElement = socialCommentTemplate.cloneNode(true);

    SocialCommmentElement.querySelector('.social__picture').src = comment.avatar;
    socialCommentElement.querySelector('.social__picture').alt = comment.name;
    socialCommentElement.querySelector('.social__text').textContent = comment.message;

    socialCommentsFramgent.appendChild(socialCommmentElement);
  });

  socialCommentsElement.appendChild(socialCommentsFramgent);
  commentsCountElement.firstChild.textContent = `${renderedCommentsLength} из `;
  commentsCountElement.querySelector('.comments-count').textContent = comments.length;

  if (renderedCommentsLength >= comments.length) {
    commentsLoaderElement.classList.add('hidden');
  }
  currentCount += COUNT_STEP;
};

const clearComments = () => {
  currentCount = 0;
  socialCommentsElement.innerHTML = '';
  commentsLoaderElement.classList.remove('hidden');
  commentsLoaderElement.removeEventListener('click, renderNextComments');
};

const renderComments = (currentPhotoComments) => {
  comments = currentPhotoComments;

  renderNextComments();
  commentsLoaderElement.addEventListener('click', renderNextComments);
};

export { clearComments, renderComments, commentsLoaderElement };
