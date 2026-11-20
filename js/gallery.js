
document.addEventListener('DOMContentLoaded', function () {
 const toggle=document.getElementById('menuToggle');
 const links=document.getElementById('navLinks');
 if(toggle && links){
  toggle.addEventListener('click',()=>{const open=links.classList.toggle('open');toggle.textContent=open?'✕':'☰';toggle.setAttribute('aria-expanded',String(open));});
  links.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{links.classList.remove('open');toggle.textContent='☰';toggle.setAttribute('aria-expanded','false');}));
 }
});


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
