// header Navigator
const btnMenu = document.querySelector('.btn--menu');
const headerMenu = document.querySelector('.header__menu');
const btnIcon = document.querySelector('.btn__icon');

btnMenu.addEventListener('click', function () {
   if (headerMenu.classList.contains('is-active')) {
      headerMenu.classList.remove('is-active');
      btnMenu.setAttribute('aria-expanded', false);
      btnIcon.src = './images/icon-hamburger.svg';
   } else {
      headerMenu.classList.add('is-active');
      btnMenu.setAttribute('aria-expanded', true);
      btnIcon.src = './images/icon-close.svg';
   }
});
