document.addEventListener('DOMContentLoaded', () => {
    const menuLinks = document.querySelector('.menu__links');
    const menuIcon = document.querySelector('.menu__icon');
    menuIcon.addEventListener('mouseenter', () => {
        menu.classList.add('menu--shown');
    });
    const menu = document.querySelector('.menu');
    menu.addEventListener('mouseleave', () => {
        menu.classList.remove('menu--shown');
    });
});