// ===== Language switching (EN / FR / AR) =====
const langButtons = document.querySelectorAll('.lang-btn');
const htmlEl = document.documentElement;
const savedLang = localStorage.getItem('language') || 'en';

setLanguage(savedLang);

langButtons.forEach(btn => {
  btn.addEventListener('click', () => setLanguage(btn.dataset.lang));
});

function setLanguage(lang) {
  localStorage.setItem('language', lang);
  const isAr = lang === 'ar';

  htmlEl.setAttribute('dir', isAr ? 'rtl' : 'ltr');
  htmlEl.setAttribute('lang', lang);

  langButtons.forEach(b => b.classList.toggle('active', b.dataset.lang === lang));

  document.querySelectorAll('[data-en]').forEach(el => {
    const text = el.getAttribute(`data-${lang}`);
    if (text) el.textContent = text;
  });

  document.querySelectorAll('[data-en-placeholder]').forEach(el => {
    const ph = el.getAttribute(`data-${lang}-placeholder`);
    if (ph) el.setAttribute('placeholder', ph);
  });
}

// ===== Mobile menu =====
const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('navLinks');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  navLinks.classList.toggle('open');
});

navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navLinks.classList.remove('open');
  });
});

// ===== Contact form (Netlify handles submission) =====
const contactForm = document.getElementById('contactForm');
if (contactForm) {
  contactForm.addEventListener('submit', () => {
    const btn = contactForm.querySelector('button[type="submit"]');
    const lang = htmlEl.getAttribute('lang');
    btn.disabled = true;
    btn.textContent = lang === 'ar' ? 'جارٍ الإرسال…' : lang === 'fr' ? 'Envoi en cours…' : 'Sending…';
  });
}

// ===== Footer year =====
document.getElementById('year').textContent = new Date().getFullYear();
