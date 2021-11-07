// header Navigator
const btnMenu = document.querySelector('.btn--menu');
const headerMenu = document.querySelector('.header__menu');
const headerList = document.querySelector('.header__list');
const btnIcon = document.querySelector('.btn__icon');
const headerLogo = document.querySelector('.header__logo');
const overlay = document.querySelector('.overlay');
const body = document.querySelector('body');
const headerContainer = document.querySelector('.header__container');
const header = document.querySelector('.header');

const navShow = function () {
   if (headerMenu.classList.contains('is-active')) {
      headerMenu.classList.remove('is-active');
      body.classList.remove('no-scroll');
      headerLogo.classList.remove('active-color');
      overlay.classList.remove('overlay-active');
      btnMenu.setAttribute('aria-expanded', false);
      btnIcon.src = './images/icon-hamburger.svg';
   } else {
      headerMenu.classList.add('is-active');
      body.classList.add('no-scroll');
      headerLogo.classList.add('active-color');
      overlay.classList.add('overlay-active');
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

/*
const headerScroll = function () {
   if (
      document.body.scrollTop > 10 ||
      document.documentElement.scrollTop > 10
   ) {
      header.classList.add('header--scroll');
   } else {
      header.classList.remove('header--scroll');
   }
};

const mobileScroll = function () {
   if (window.innerWidth <= 768) {
      headerScroll();
   } else {
      header.classList.remove('header--scroll');
   }
}; */

// window.addEventListener('scroll', mobileScroll);

const hideMobileMenu = function () {
   const menu = document.querySelector('.is-active');

   if (window.innerWidth <= 768 && headerMenu) {
      menu.classList.remove('is-active');
      body.classList.remove('no-scroll');
      headerLogo.classList.remove('active-color');
      overlay.classList.remove('overlay-active');
      btnIcon.src = './images/icon-hamburger.svg';
   }
};

headerList.addEventListener('click', hideMobileMenu);
headerLogo.addEventListener('click', hideMobileMenu);

// Smooth Behavior
const smoothScroll = function (e) {
   e.preventDefault();

   if (e.target.classList.contains('header__link')) {
      const id = e.target.getAttribute('href');
      document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
   }
};
document
   .querySelector('.btn--blue')
   .addEventListener('click', () =>
      document.querySelector('#about').scrollIntoView({ behavior: 'smooth' })
   );
headerMenu.addEventListener('click', smoothScroll);

const sectionSelect = document.querySelectorAll('.section__select');

const animationIn = function (entries, observer) {
   const [entry] = entries;
   if (!entry.isIntersecting) return;
   entry.target.classList.remove('section__hidden');

   observer.unobserve(entry.target);
};

const sectionAnimation = new IntersectionObserver(animationIn, {
   root: null,
   threshold: 0,
});

sectionSelect.forEach(section => {
   sectionAnimation.observe(section);
   section.classList.add('section__hidden');
});

// Menu animation

const hero = document.querySelector('#hero');
const headerHeight = header.getBoundingClientRect().height;

const stickyNav = function (entries, observer) {
   const [entry] = entries;

   if (!entry.isIntersecting) {
      header.classList.add('header--in');
   } else {
      header.classList.remove('header--in');
   }
};

const heroObserver = new IntersectionObserver(stickyNav, {
   root: null,
   threshold: 0,
   rootMargin: `-${headerHeight}px`,
});
heroObserver.observe(hero);
