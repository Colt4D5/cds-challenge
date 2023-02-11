const mobileMenuBtn = document.querySelector('#mobile-menu-btn-wrapper');
mobileMenuBtn.addEventListener('click', toggleMobileMenu);

function toggleMobileMenu(e) {
  document.body.classList.toggle('mobileMenuIsOpen');
}