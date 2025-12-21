function toggleMenu() {
  const nav = document.getElementById('nav-container');
  nav.classList.toggle('active');
}
function toggleImage(wrapper) {
  const img = wrapper.querySelector('img');
  const currentSrc = img.getAttribute('src');
  const altSrc = img.getAttribute('data-alt');
  img.setAttribute('src', altSrc);
  img.setAttribute('data-alt', currentSrc);
}


function toggleMenu() {
  const nav = document.getElementById('nav-container');
  const icon = document.getElementById('dropdown-icon');
  nav.classList.toggle('active');
  icon.classList.toggle('rotated');
}