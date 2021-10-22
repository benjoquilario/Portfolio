// header Navigator
const btnMenu = document.querySelector('.btn--menu');
const headerMenu = document.querySelector('.header__menu');
const headerList = document.querySelector('.header__list');
const btnIcon = document.querySelector('.btn__icon');
const headerLogo = document.querySelector('.header__logo');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const headerContainer = document.querySelector('.header__container');

const navShow = function () {
   if (headerMenu.classList.contains('is-active')) {
      headerMenu.classList.remove('is-active');
      body.classList.remove('no-scroll');
      overlay.classList.remove('overlay-active');
      headerLogo.classList.remove('active-color');
      btnMenu.setAttribute('aria-expanded', false);
      btnIcon.src = './images/icon-hamburger.svg';
   } else {
      headerMenu.classList.add('is-active');
      body.classList.add('no-scroll');
      overlay.classList.add('overlay-active');
      headerLogo.classList.add('active-color');
      btnMenu.setAttribute('aria-expanded', true);
      btnIcon.src = './images/icon-close.svg';
   }
};

btnMenu.addEventListener('click', navShow);
window.addEventListener('keydown', function (e) {
   console.log(e.key);
   if (e.key === 'Escape') {
      navShow();
   }
});

const headerScroll = function () {
   if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
   ) {
      headerContainer.classList.add('header--scroll');
      headerLogo.classList.add('active-color');
      btnIcon.src = './images/icon-hamburger-white.svg';
   } else {
      headerContainer.classList.remove('header--scroll');
      headerLogo.classList.remove('active-color');
      btnIcon.src = './images/icon-hamburger.svg';
   }
};

const mobileScroll = function () {
   if (window.innerWidth <= 768) {
      headerScroll();
   } else {
      headerContainer.classList.remove('header--scroll');
   }
};

const desktopScroll = function () {
   // if(window.innerHeight <= )
};

window.addEventListener('scroll', mobileScroll);

const hideMobileMenu = function () {
   const menu = document.querySelector('.is-active');
   if (window.innerWidth <= 768 && headerMenu) {
      menu.classList.remove('is-active');
      body.classList.remove('no-scroll');
      overlay.classList.remove('overlay-active');
   }
};

headerList.addEventListener('click', hideMobileMenu);
headerLogo.addEventListener('click', hideMobileMenu);
