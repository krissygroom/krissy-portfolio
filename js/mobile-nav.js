// Select nav menu button in mobile

const btnMobileNav = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

// Close mobile nav if any of the nav links are clicked
headerEl.addEventListener("click", function (e) {
  const link = e.target;
  console.log(link);
  if (link.matches("li a")) {
    if (headerEl.classList.contains("nav-open")) {
      headerEl.classList.remove("nav-open");
    }
  }
});

btnMobileNav.addEventListener("click", function () {
  if (headerEl.classList.contains("nav-open")) {
    headerEl.classList.remove("nav-open");
  } else {
    headerEl.classList.add("nav-open");
  }
});
