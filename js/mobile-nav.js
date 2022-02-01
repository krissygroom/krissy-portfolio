// Select nav menu button in mobile (using component code from
// Omnifood course project)
const btnMobileNav = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

// Make mobile navigation work
btnMobileNav.addEventListener('click', function() {
    if (headerEl.classList.contains("nav-open")) {
        headerEl.classList.remove("nav-open");
    } else {
        headerEl.classList.add("nav-open");
    };
});