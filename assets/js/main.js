/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav-close')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')

function linkAction(){
    const navMenu = document.getElementById('nav-menu')
    // When we click on each nav__link, we remove the show-menu class
    navMenu.classList.remove('show-menu')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 50) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 400,
    // reset: true
})

sr.reveal(`.home__header, .section__title, .paragraph, .contact,.carouselContainer,  .wrapper, .centered-text, .pricing-box`,{delay: 600})
sr.reveal(`.home__footer, .container-footer`,{delay: 700})
sr.reveal(`.home__img`,{delay: 900, origin: 'top'})

sr.reveal(`.sponsor__img, .products__card, .footer__logo, .footer__content, .footer__copy`,{origin: 'top', interval: 100})
sr.reveal(`.specs__data, .discount__animate`,{origin: 'left', interval: 100})
sr.reveal(`.specs__img, .discount__img`,{origin: 'right'})
sr.reveal(`.case__img`,{origin: 'top'})
sr.reveal(`.case__data`)
sr.reveal(`.card`,{origin: 'left', interval: 100})


const carouselContainer = document.querySelector(".carouselContainer");
const eachCarousel = document.querySelector(".eachCarousel").clientWidth;
const allEachCarousel = document.querySelectorAll(".eachCarousel");
const allIndicator = document.querySelectorAll(".indicator");

let isDown = false;
let startX;
let scrollLeft;

// Funzione per scorrere il carousel
const slideCarousel = (index) => {
    for (let x = 0; x < allEachCarousel.length; x++) {
        if (x === index) {
            allEachCarousel[x].classList.add("eachCarouselBorder");
            allIndicator[x].classList.add("activeIndicator");
        } else {
            allEachCarousel[x].classList.remove("eachCarouselBorder");
            allIndicator[x].classList.remove("activeIndicator");
        }
    }
    carouselContainer.scrollLeft = (index * (eachCarousel + 10));
    console.log(carouselContainer.scrollLeft);
}

// Eventi per il trascinamento su desktop
carouselContainer.addEventListener('mousedown', (e) => {
    isDown = true;
    carouselContainer.classList.add('active');
    startX = e.pageX - carouselContainer.offsetLeft;
    scrollLeft = carouselContainer.scrollLeft;
});

carouselContainer.addEventListener('mouseleave', () => {
    isDown = false;
    carouselContainer.classList.remove('active');
});

carouselContainer.addEventListener('mouseup', () => {
    isDown = false;
    carouselContainer.classList.remove('active');
});

carouselContainer.addEventListener('mousemove', (e) => {
    if (!isDown) return;  // Se non si sta trascinando, esci
    e.preventDefault();
    const x = e.pageX - carouselContainer.offsetLeft;
    const walk = (x - startX); // Distanza percorsa
    carouselContainer.scrollLeft = scrollLeft - walk;
});

// Eventi per il tocco su mobile
carouselContainer.addEventListener('touchstart', (e) => {
    startX = e.touches[0].pageX - carouselContainer.offsetLeft;
    scrollLeft = carouselContainer.scrollLeft;
}, { passive: true });

carouselContainer.addEventListener('touchmove', (e) => {
    const x = e.touches[0].pageX - carouselContainer.offsetLeft;
    const walk = (x - startX); // Distanza percorsa
    carouselContainer.scrollLeft = scrollLeft - walk;
}, { passive: true });







