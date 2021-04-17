const initReviews = () => {
  const reviewBlock = document.querySelector('.review__block');

  if (!reviewBlock) {
    return;
  }

  const reviewItems = document.querySelectorAll('.review__item');
  const reviewText = reviewBlock.querySelector('.review__text');
  const reviewName = reviewBlock.querySelector('.review__name');
  const reviewPosition = reviewBlock.querySelector('.review__position');
  let activeItem = document.querySelector('.review__item--active');

  reviewItems.forEach((item) => {
    item.addEventListener('click', ((evt) => {
      evt.preventDefault();
      if (!item.classList.contains('review__item--active')) {
        activeItem.classList.remove('review__item--active');
        item.classList.add('review__item--active');
        activeItem = item;
        reviewBlock.style.opacity = '0';
        reviewBlock.addEventListener('transitionend', () => {
          reviewText.innerText = item.dataset.text;
          reviewName.innerText = item.dataset.name;
          reviewPosition.innerText = item.dataset.position;
          reviewBlock.style.opacity = '1';
        }, {once: true});
      }
    }));
  });
};

export {initReviews};
