// hamburger nav

const hamburger = document.querySelector(".nav-hamburger");
const nav = document.querySelector(".nav");
const list = document.querySelector(".nav-list");

hamburger.addEventListener("click", open);

function open() {
 nav.classList.toggle("nav--toggle");
 list.classList.toggle("nav-list--toggle");
 hamburger.classList.toggle("nav-hamburger--rotate");
}


///////////////////////////////////////////////


//section-animation

window.sr = ScrollReveal();
    sr.reveal('.expertise-card__img', {
        reset: true,
        delay: 200,
        origin: 'bottom',
        distance: 0,
        duration: 400,
        scale: 0.5,
        easing: 'linear',
    });
    sr.reveal('.expertise-card__header, .expertise-card__text', {
        reset: true,
        delay: 200,
        origin: 'bottom',
        duration: 400,
        scale: 0.5,
        easing: 'linear',
    });





