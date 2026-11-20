
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  const navLinks = document.getElementById('navLinks');
  if (menuToggle && navLinks) {
    menuToggle.addEventListener('click', () => {
      const isOpen = navLinks.classList.toggle('open');
      menuToggle.textContent = isOpen ? '✕' : '☰';
      menuToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
    navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      navLinks.classList.remove('open');
      menuToggle.textContent = '☰';
      menuToggle.setAttribute('aria-expanded', 'false');
    }));
  }
});


/* HERO SLIDESHOW
   3 photos, 3 seconds each (0-3s photo 1, 3-6s photo 2, 6-9s photo 3),
   then photo 1 comes straight back and the loop repeats.
   The previous photo stays fully visible underneath while the next one fades in,
   so the background never shows through between slides. */
(function () {
    const slider = document.querySelector('.hero-slider');
    if (!slider) return;

    const slides = Array.from(slider.querySelectorAll('.hero-slide'));
    if (slides.length < 2) return;

    const SLIDE_MS = 3000;
    let current = 0;
    let timer = null;

    function show(next, instant) {
        const previous = current;
        slides.forEach((slide, i) => {
            slide.classList.remove('active', 'prev', 'instant');
            if (i === previous && previous !== next) slide.classList.add('prev');
        });
        slides[next].classList.add('active');
        if (instant) slides[next].classList.add('instant');
        current = next;
    }

    function advance() {
        const next = (current + 1) % slides.length;
        // after the last photo, jump straight back to photo 1 (no transition)
        show(next, next === 0);
    }

    function start() {
        clearInterval(timer);
        timer = setInterval(advance, SLIDE_MS);
    }

    // make sure every photo is loaded before the timer starts, so each one gets its full 3 seconds
    const loaders = slides.map(slide => {
        const img = slide.querySelector('img');
        if (!img) return Promise.resolve();
        if (img.complete) return Promise.resolve();
        return new Promise(resolve => {
            img.addEventListener('load', resolve, { once: true });
            img.addEventListener('error', resolve, { once: true });
        });
    });

    show(0, true);
    Promise.race([
        Promise.all(loaders),
        new Promise(resolve => setTimeout(resolve, 4000))
    ]).then(start);
})();

document.addEventListener('DOMContentLoaded', function () {
  const current = decodeURIComponent(window.location.pathname.split('/').pop() || 'Home.html').toLowerCase();
  document.querySelectorAll('.nav-links a[href]').forEach(link => {
    const target = decodeURIComponent(link.getAttribute('href').split('#')[0]).toLowerCase();
    if (target && target === current) {
      link.classList.add('active');
      link.setAttribute('aria-current', 'page');
    }
  });
});
