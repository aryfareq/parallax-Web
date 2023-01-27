let sun = document.getElementById('img2');
let earth = document.getElementById('img1');

window.addEventListener('scroll', () => {
let value = window.scrollY;
earth.style.marginLeft = value * -1.5 + 'px';
sun.style.marginRight = value * -1.5 + 'px';
});