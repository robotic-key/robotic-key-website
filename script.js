const menuButton = document.getElementById('menu');
const siteNav = document.getElementById('site-nav');

function setMenuOpen(open) {
  siteNav.classList.toggle('open', open);
  menuButton.setAttribute('aria-expanded', String(open));
}

menuButton.addEventListener('click', () => {
  setMenuOpen(!siteNav.classList.contains('open'));
});

siteNav.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => setMenuOpen(false));
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && siteNav.classList.contains('open')) {
    setMenuOpen(false);
    menuButton.focus();
  }
});
