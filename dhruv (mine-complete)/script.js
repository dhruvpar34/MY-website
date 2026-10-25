const navbar = document.querySelector('.navbar');
const toggle = document.querySelector('.menu-toggle');
if (navbar && toggle) {
  toggle.addEventListener('click', () => {
    const open = navbar.classList.toggle('menu-open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
    toggle.textContent = open ? '✕' : '☰';
  });
  navbar.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    navbar.classList.remove('menu-open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.setAttribute('aria-label', 'Open navigation');
    toggle.textContent = '☰';
  }));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();
