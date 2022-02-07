const navMain = document.querySelector('.page-header__main-nav');
const navToggle = document.querySelector('.page-header__toggle');
const pageHeader = document.querySelector('.page-header');

  pageHeader.classList.remove('page-header--nojs');
  navMain.classList.remove('page-header--nojs');
  navMain.classList.add('main-nav--closed');

  navToggle.addEventListener('click', function() {
    if (navMain.classList.contains('main-nav--closed')) {
      navMain.classList.remove('main-nav--closed');
      navMain.classList.add('main-nav--opened');
    } else {
      navMain.classList.add('main-nav--closed');
      navMain.classList.remove('main-nav--opened');
    }
  });

