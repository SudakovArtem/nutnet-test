const breakpointLg = window.matchMedia('(min-width: 1024px)');

const header = document.querySelector('.header');
const toggle = header ? header.querySelector('.main-nav__toggle') : null;
const menu = header ? header.querySelector('.main-nav__post-wrapper') : null;
let pageYPos;

const isHeaderOpened = () => {
  return header.classList.contains('header--opened');
};

const closeMenu = () => {
  header.classList.remove('header--opened');
  window.enableBodyScroll(menu);
  setTimeout(() => {
    document.activeElement.blur();
  }, 300);

  if (breakpointLg.matches) {
    toggle.style.marginRight = null;
  }
};

const scrollHeader = () => {
  pageYPos = window.pageYOffset;

  if (pageYPos < (window.innerHeight / 2)) {
    toggle.classList.remove('burger--filled');
  } else {
    toggle.classList.add('burger--filled');
  }
};


const initHeader = () => {

  if (!header) {
    return;
  }

  toggle.addEventListener('click', () => {
    if (isHeaderOpened()) {
      closeMenu();
    } else {
      header.classList.add('header--opened');
      window.disableBodyScroll(menu);

      setTimeout(() => {
        document.activeElement.blur();
      }, 300);
    }
  });

  window.addEventListener('scroll', scrollHeader);
};


export {initHeader};
