var backdrop = document.querySelector('#backdrop');
var toggleButton = document.querySelector('#toggle-button');
var mobileNav = document.querySelector('#mobile-nav');
var body = document.querySelector('body');


function openMenu(){
    mobileNav.classList.add('open');
    backdrop.classList.add('open');
    body.classList.add('menu-open')
}

function closeMenu(){
    mobileNav.classList.remove('open');
    backdrop.classList.remove('open');
    body.classList.remove('menu-open')
}


toggleButton.addEventListener('click', openMenu);
backdrop.addEventListener('click', closeMenu)