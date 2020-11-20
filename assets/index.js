"use strict";

let indexSlide = 0;
const prevBtn = document.querySelector('.btncontroll .btncontroll__item #prevBtn');
const nextBtn = document.querySelector('.btncontroll .btncontroll__item #nextBtn');
const listDot = document.querySelectorAll('.dotcontroll .dotcontroll__wrapper');
const mySlides = document.querySelectorAll('#slide .slide__item');
showSlide(indexSlide);
function showSlide(n) {
    if (n > mySlides.length - 1) {
        n = 0;
        indexSlide = -1;
    };
    if (n < 0) {
        n = mySlides.length - 1;
        indexSlide = mySlides.length - 1;
    };
    mySlides.forEach(item => {
        item.classList.remove('active-slide');
    });
    mySlides[n].classList.add('active-slide');
    listDot.forEach(item => {
        item.classList.remove('active-dotslide');
    })
    listDot[n].classList.add('active-dotslide');
};
prevBtn.addEventListener('click', function () {
    showSlide(--indexSlide);
});

nextBtn.addEventListener('click', function () {
    showSlide(++indexSlide);
});
