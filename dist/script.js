const btnMenu=document.querySelector(".btn--menu"),headerMenu=document.querySelector(".header__menu"),headerList=document.querySelector(".header__list"),btnIcon=document.querySelector(".btn__icon"),headerLogo=document.querySelector(".header__logo"),overlay=document.querySelector(".overlay"),body=document.querySelector("body"),headerContainer=document.querySelector(".header__container"),navShow=function(){headerMenu.classList.contains("is-active")?(headerMenu.classList.remove("is-active"),body.classList.remove("no-scroll"),overlay.classList.remove("overlay-active"),headerLogo.classList.remove("active-color"),btnMenu.setAttribute("aria-expanded",!1),btnIcon.src="./images/icon-hamburger.svg"):(headerMenu.classList.add("is-active"),body.classList.add("no-scroll"),overlay.classList.add("overlay-active"),headerLogo.classList.add("active-color"),btnMenu.setAttribute("aria-expanded",!0),btnIcon.src="./images/icon-close.svg")};btnMenu.addEventListener("click",navShow),window.addEventListener("keydown",(function(e){console.log(e.key),"Escape"===e.key&&navShow()}));const headerScroll=function(){document.body.scrollTop>10||document.documentElement.scrollTop>10?(headerContainer.classList.add("header--scroll"),headerLogo.classList.add("active-color"),btnIcon.src="./images/icon-hamburger-white.svg"):(headerContainer.classList.remove("header--scroll"),headerLogo.classList.remove("active-color"),btnIcon.src="./images/icon-hamburger.svg")},mobileScroll=function(){window.innerWidth<=768?document.body.scrollTop>10||document.documentElement.scrollTop>10?(headerContainer.classList.add("header--scroll"),headerLogo.classList.add("active-color"),btnIcon.src="./images/icon-hamburger-white.svg"):(headerContainer.classList.remove("header--scroll"),headerLogo.classList.remove("active-color"),btnIcon.src="./images/icon-hamburger.svg"):headerContainer.classList.remove("header--scroll")},desktopScroll=function(){};window.addEventListener("scroll",mobileScroll);const hideMobileMenu=function(){const e=document.querySelector(".is-active");window.innerWidth<=768&&headerMenu&&(e.classList.remove("is-active"),body.classList.remove("no-scroll"),overlay.classList.remove("overlay-active"))};headerList.addEventListener("click",hideMobileMenu),headerLogo.addEventListener("click",hideMobileMenu);
//# sourceMappingURL=script.js.map