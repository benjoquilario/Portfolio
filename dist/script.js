class App{constructor(){this.varSelectors(),this.setupEvents()}varSelectors(){if(this.selectors={btnMenu:".btn--menu",headerMenu:".header__menu",headerList:".header__list",btnIcon:".btn__icon",headerLogo:".header__logo",body:"body",headerContainer:".header__container",header:".header",menu:".is-active",btnBlue:".btn--blue",section:".section__select"},this.btnMenu=document.querySelector(this.selectors.btnMenu),this.headerMenu=document.querySelector(this.selectors.headerMenu),this.headerList=document.querySelector(this.selectors.headerList),this.btnIcon=document.querySelector(this.selectors.btnIcon),this.headerLogo=document.querySelector(this.selectors.headerLogo),this.body=document.querySelector(this.selectors.body),this.headerContainer=document.querySelector(this.selectors.headerContainer),this.header=document.querySelector(this.selectors.header),this.menu=document.querySelector(this.selectors.menu),this.sectionSelect=document.querySelectorAll(this.selectors.section),this.hero=document.querySelector("#hero"),this.headerHeight=this.header.getBoundingClientRect().height,this.body&&this.header)return this.timer,this.isInitialized=!1,this.transitionDuration=300,!0}setupEvents(){this.btnMenu.addEventListener("click",this.toggle.bind(this)),this.headerList.addEventListener("click",this.hideMenu.bind(this)),this.headerLogo.addEventListener("click",this.hideMenu.bind(this)),this.headerMenu.addEventListener("click",this.smoothScroll.bind(this)),window.addEventListener("keydown",(e=>{console.log(e.key),"Escape"===e.key&&this.hideNav()})),window.addEventListener("load",this.showAnimation.bind(this)),this.fadeInSection(),this.stickyNav(),this.getWeekday()}showAnimation(){this.body.classList.remove("loading")}toggle(){return this.headerMenu.classList.contains("is-active")?this.hideNav():this.showNav(),this}hideNav(){this.headerMenu.classList.remove("is-active"),this.body.classList.remove("no-scroll"),this.headerLogo.classList.remove("active-color"),this.btnMenu.setAttribute("aria-expanded",!1),this.btnMenu.classList.remove("menu-active")}showNav(){this.headerMenu.classList.add("is-active"),this.body.classList.add("no-scroll"),this.headerLogo.classList.add("active-color"),this.btnMenu.setAttribute("aria-expanded",!0),this.btnMenu.classList.add("menu-active")}hideMenu(){window.innerWidth<=768&&this.headerMenu&&(this.headerMenu.classList.remove("is-active"),this.body.classList.remove("no-scroll"),this.headerLogo.classList.remove("active-color"),this.btnMenu.classList.remove("menu-active"))}smoothScroll(e){e.preventDefault(),e.target.classList.contains("header__link")&&(this.id=e.target.getAttribute("href"),document.querySelector(this.id).scrollIntoView({behavior:"smooth"}))}fadeInSection(){this.options={root:null,threshold:0},this.sectionObserve=new IntersectionObserver(((e,t)=>{e.forEach((e=>{e.isIntersecting&&(e.target.classList.remove("section__hidden"),t.unobserve(e.target))}))}),this.options),this.sectionSelect.forEach((e=>{this.sectionObserve.observe(e),e.classList.add("section__hidden")}))}stickyNav(){this.options={root:null,threshold:0,rootMargin:`-${this.headerHeight}px`},this.heroObserver=new IntersectionObserver(((e,t)=>{this.isInitialized&&e.forEach((e=>{e.isIntersecting?(this.header.classList.add("scroll-out"),this.timer=setTimeout((()=>{this.header.classList.remove("header--in"),this.header.classList.remove("scroll-out"),this.timer=!1}),this.transitionDuration),this.header.classList.remove("header--in")):this.header.classList.add("header--in")})),this.isInitialized=!0}),this.options),this.heroObserver.observe(this.hero)}getWeekday(){const e=new Date;document.querySelector(".footer__text").textContent=`Happy ${["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"][e.getDay()]}! • Made with ❤ by Benjo M. Quilario - All Right Reserved. 2022`}}const app=new App;
//# sourceMappingURL=script.js.map