document.addEventListener('DOMContentLoaded', function () {
  const toggle = document.getElementById('menuToggle');
  const links = document.getElementById('navLinks');
  if (toggle && links) {
    toggle.addEventListener('click', () => {
      const open = links.classList.toggle('open');
      toggle.textContent = open ? '✕' : '☰';
      toggle.setAttribute('aria-expanded', String(open));
    });
    links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
      links.classList.remove('open');
      toggle.textContent = '☰';
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }
  const current = decodeURIComponent(location.pathname.split('/').pop() || 'Home.html').toLowerCase();
  links?.querySelectorAll('a[href]').forEach(a => {
    if (a.getAttribute('href').split('#')[0].toLowerCase() === current) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });
});
