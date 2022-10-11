//REFERENCE TO THE DOM
const menuBtn = document.querySelector('.menu-btn .bars');
const menu = document.querySelector('.nav-bar .list-items');

//DOM MANIPULATION
menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
});
