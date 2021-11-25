// header Navigator
class App {
   constructor() {
      this.vars();
      this.setupEvents();
   }

   vars() {
      this.selectors = {
         btnMenu: '.btn--menu',
         headerMenu: '.header__menu',
         headerList: '.header__list',
         btnIcon: '.btn__icon',
         headerLogo: '.header__logo',
         overlay: '.overlay',
         body: 'body',
         headerContainer: '.header__container',
         header: '.header',
         menu: '.is-active',
         btnBlue: '.btn--blue',
         section: '.section__select',
      };

      this.btnMenu = document.querySelector(this.selectors.btnMenu);
      this.btnBlue = document.querySelector(this.selectors.btnBlue);
      this.headerMenu = document.querySelector(this.selectors.headerMenu);
      this.headerList = document.querySelector(this.selectors.headerList);
      this.btnIcon = document.querySelector(this.selectors.btnIcon);
      this.headerLogo = document.querySelector(this.selectors.headerLogo);
      this.overlay = document.querySelector(this.selectors.overlay);
      this.body = document.querySelector(this.selectors.body);
      this.headerContainer = document.querySelector(
         this.selectors.headerContainer
      );
      this.header = document.querySelector(this.selectors.header);
      this.menu = document.querySelector(this.selectors.menu);

      this.sectionSelect = document.querySelectorAll(this.selectors.section);
      this.hero = document.querySelector('#hero');
      this.headerHeight = this.header.getBoundingClientRect().height;

      if (!this.body || !this.header) return;

      this.timer;
      this.isInitialized = false;
      this.transitionDuration = 300;

      return true;
   }

   loadEvents() {}

   setupEvents() {
      this.btnMenu.addEventListener('click', this.toggle.bind(this));
      this.headerList.addEventListener('click', this.hideMenu.bind(this));
      this.headerLogo.addEventListener('click', this.hideMenu.bind(this));

      this.headerMenu.addEventListener('click', this.smoothScroll.bind(this));
      this.btnBlue.addEventListener('click', () => {
         document
            .querySelector('#about')
            .scrollIntoView({ behavior: 'smooth' });
      });

      window.addEventListener('keydown', e => {
         console.log(e.key);
         if (e.key === 'Escape') {
            this.hideNav();
         }
      });

      window.addEventListener('load', this.showAnimation.bind(this));

      this.fadeInSection();
      this.stickyNav();
   }

   showAnimation() {
      this.body.classList.remove('loading');
   }

   toggle() {
      this.headerMenu.classList.contains('is-active')
         ? this.hideNav()
         : this.showNav();
      return this;
   }

   hideNav() {
      this.headerMenu.classList.remove('is-active');
      this.body.classList.remove('no-scroll');
      this.headerLogo.classList.remove('active-color');
      this.overlay.classList.remove('overlay-active');
      this.btnMenu.setAttribute('aria-expanded', false);
      this.btnIcon.src = './images/icon-hamburger.svg';
   }

   showNav() {
      this.headerMenu.classList.add('is-active');
      this.body.classList.add('no-scroll');
      this.headerLogo.classList.add('active-color');
      this.overlay.classList.add('overlay-active');
      this.btnMenu.setAttribute('aria-expanded', true);
      this.btnIcon.src = './images/icon-close.svg';
   }

   hideMenu() {
      if (window.innerWidth <= 768 && this.headerMenu) {
         this.headerMenu.classList.remove('is-active');
         this.body.classList.remove('no-scroll');
         this.headerLogo.classList.remove('active-color');
         this.overlay.classList.remove('overlay-active');
         this.btnIcon.src = './images/icon-hamburger.svg';
      }
   }

   smoothScroll(e) {
      e.preventDefault();

      if (e.target.classList.contains('header__link')) {
         this.id = e.target.getAttribute('href');
         document.querySelector(this.id).scrollIntoView({ behavior: 'smooth' });
      }
   }

   fadeInSection() {
      this.options = {
         root: null,
         threshold: 0,
      };

      this.sectionObserve = new IntersectionObserver((entries, observer) => {
         entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.remove('section__hidden');

            observer.unobserve(entry.target);
         });
      }, this.options);

      this.sectionSelect.forEach(section => {
         this.sectionObserve.observe(section);
         section.classList.add('section__hidden');
      });
   }

   stickyNav() {
      this.options = {
         root: null,
         threshold: 0,
         rootMargin: `-${this.headerHeight}px`,
      };

      this.heroObserver = new IntersectionObserver((entries, observe) => {
         if (this.isInitialized) {
            entries.forEach(entry => {
               if (!entry.isIntersecting) {
                  this.header.classList.add('header--in');
               } else {
                  this.header.classList.add('scroll-out');

                  this.timer = setTimeout(() => {
                     this.header.classList.remove('header--in');
                     this.header.classList.remove('scroll-out');
                     this.timer = false;
                  }, this.transitionDuration);
                  this.header.classList.remove('header--in');
               }
            });
         }
         this.isInitialized = true;
      }, this.options);

      this.heroObserver.observe(this.hero);
   }
}

const app = new App();
