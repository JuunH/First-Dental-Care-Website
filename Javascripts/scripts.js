const menuicon = document.getElementById('menu');
const menu = document.querySelector('.nav');

/*
 * Toggles on and off the 'active' class on the menu
 * and the toggler button.
 */
menuicon.addEventListener('click', () => {
  menuicon.classList.toggle('active');
  menu.classList.toggle('active');
})