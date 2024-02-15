// Humberger
window.onscroll = function() {
    const header = document.querySelector('header');
    const navItems1 = document.getElementById('nav-items-1');
    const navItems2 = document.getElementById('nav-items-2');
    const navItems3 = document.getElementById('nav-items-3');
    const navItems4 = document.getElementById('nav-items-4');
    const navItems5 = document.getElementById('nav-items-5');
    const navItems6 = document.getElementById('nav-items-6');

    const fixnav = header.offsetTop;
    if (window.pageYOffset > fixnav) {
        header.classList.add('nav-fixed');
        navItems1.classList.add('nav-convert');
        navItems2.classList.add('nav-convert');
        navItems3.classList.add('nav-convert');
        navItems4.classList.add('nav-convert');
        navItems5.classList.add('nav-convert');
        navItems6.classList.add('nav-convert');

    } else {
        header.classList.remove('nav-fixed');
        navItems1.classList.remove('nav-convert');
        navItems2.classList.remove('nav-convert');
        navItems3.classList.remove('nav-convert');
        navItems4.classList.remove('nav-convert');
        navItems5.classList.remove('nav-convert');
        navItems6.classList.remove('nav-convert');

        navItems1.classList.add('nav-first');
        navItems2.classList.add('nav-first');
        navItems3.classList.add('nav-first');
        navItems4.classList.add('nav-first');
        navItems5.classList.add('nav-first');
        navItems6.classList.add('nav-first');
    }
}

const humberger = document.getElementById('humberger');
const navMenu = document.querySelector('#nav-menu');
humberger.addEventListener('click', function (e) {
    humberger.classList.toggle('humberger-active');
    navMenu.classList.toggle('hidden');
});