//Toggle Class Active

const navbarNav = document.querySelector('.navbar-nav');

// Ketika Hanburger Menu Diklik

document.querySelector('#hamburger-menu').onclick = () => {
  navbarNav.classList.toggle('active');
};
