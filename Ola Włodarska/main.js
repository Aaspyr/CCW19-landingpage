// // nav-toggler
const burger = document.querySelector(".navbar-toggler");
const iconBurger = document.querySelector(".fa-bars");
const iconX = document.querySelector(".fa-times");
const menu = document.querySelector('.nav-collapse')
burger.addEventListener('click', function () {
    iconBurger.classList.toggle("show");
    iconX.classList.toggle("show");
    menu.classList.toggle("show");
})

// slider
const sliders = [{
    img: 'images/pyzy-430x246.jpg',
    p: 'Fried dumplings'

}, {
    img: 'images/Gyros-480x270.jpg',
    p: 'Gyros salad'

}, {
    img: 'images/zupa-wiosenna-430x242.jpg',
    p: 'Spring soup'

}];

const time = 4000;
let active = 0;
const images = document.querySelector('img.slider');
const text = document.querySelector('p.slider');

const changeSlide = () => {
    active++;
    if (active === sliders.length) {
        active = 0;
    }
    images.src = sliders[active].img;
    text.textContent = sliders[active].p;
}
setInterval(changeSlide, time)