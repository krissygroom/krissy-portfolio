// Select nav menu button in mobile

const btnMobileNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnMobileNav.addEventListener('click', function() {
    if (headerEl.classList.contains("nav-open")) {
        headerEl.classList.remove("nav-open");
    } else {
        headerEl.classList.add("nav-open");
    };
});