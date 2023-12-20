document.addEventListener('DOMContentLoaded', () => {
  const hamburgerMenu = document.getElementById('menu-icon');
  const menuItems = document.querySelector('.menu-items');

  hamburgerMenu.addEventListener('click', () => {
    menuItems.classList.toggle('show');
  });
});
