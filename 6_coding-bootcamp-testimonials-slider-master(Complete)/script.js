const slides = document.querySelectorAll(".slide");
let curSlide = 0;
const maxSlide = slides.length;
const btnRight = document.querySelector(".btn__right");
const btnLeft = document.querySelector(".btn__left");
const goToSlide = function (slide) {
    slides.forEach(
        (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
};
goToSlide(1);
btnRight.addEventListener("click", function () {
    if (curSlide == maxSlide - 1) {
        curSlide = 0;
    } else curSlide++;
    goToSlide(curSlide);
});

btnLeft.addEventListener("click", function () {
    if (curSlide == 0) {
        curSlide = maxSlide - 1;
    } else {
        curSlide--;
    }
    goToSlide(curSlide);
});
