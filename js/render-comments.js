const commentsContainerElement = document.querySelector('.social__comments');
const commentTemplate = document.querySelector('.social__comment');
const statisticShownElement = document.querySelector('.social__comment-shown-count');
const statisticTotalElement = document.querySelector('.social__comment-total-count');
const loaderButton = document.querySelector('.comments-loader');

const COMMENT_STEPS = 5;

const localComments = [];
let renderedComments = 0;
let totalComments = 0;

const renderComment = (comment) => {
  const commentElement = commentTemplate.cloneNode(true);
  commentElement.querySelector('.social__picture').src = comment.avatar;
  commentElement.querySelector('.social__text').textContent = comment.message;
  renderedComments++;
  return commentElement;
};

const renderLoader = () => {
  if (renderedComments < totalComments) {
    loaderButton.classList.remove('hidden');
  } else {
    loaderButton.classList.add('hidden');
  }
};

const renderStatistic = () => {
  statisticShownElement.textContent = renderedComments;
  statisticTotalElement.textContent = totalComments;
};

const renderComments = () => {
  const fragment = document.createDocumentFragment();
  localComments.splice(0, COMMENT_STEPS).forEach((comment) => {
    fragment.append(renderComment(comment));
  });
  commentsContainerElement.append(fragment);
  renderStatistic();
  renderLoader();
};

loaderButton.addEventListener('click', () => {
  renderComments();
});

const commentsInit = (data) => {
  localComments.length = 0;
  localComments.push(...data.slice());
  renderedComments = 0;
  totalComments = localComments.length;
  commentsContainerElement.innerHTML = '';
  renderComments();
};

export { commentsInit };
