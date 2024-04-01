//Toggle Class Active Untuk Humberger Menu

const navbarNav = document.querySelector(".navbar-nav");

// Ketika Hanburger Menu Diklik

document.querySelector("#hamburger-menu").onclick = (e) => {
  navbarNav.classList.toggle("active");
  e.preventDefault();
};

// Toggle Class Active Untuk Search Form
const searchForm = document.querySelector(".search-form");
const searchBox = document.querySelector("#search-box");

document.querySelector("#search-btn").onclick = (e) => {
  searchForm.classList.toggle("active");
  searchBox.focus();
  e.preventDefault();
};

//klik diluar element

const hm = document.querySelector("#hamburger-menu");
const sb = document.querySelector("#search-btn");

document.addEventListener("click", function (e) {
  if (!hm.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
  if (!sb.contains(e.target) && !searchForm.contains(e.target)) {
    searchForm.classList.remove("active");
  }
});
