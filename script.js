// language switching
const langSelect = document.getElementById('langSelect');
const html = document.documentElement;

const savedLang = localStorage.getItem('language') || 'en';
langSelect.value = savedLang;
setLanguage(savedLang);

langSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value);
});

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    
    const isAr = lang === 'ar';
    html.setAttribute('dir', isAr ? 'rtl' : 'ltr');
    html.setAttribute('lang', lang);
    
    document.querySelectorAll('[data-en]').forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            element.textContent = text;
        }
    });
    
 
    document.querySelectorAll('[data-en-placeholder]').forEach(element => {
        const placeholder = element.getAttribute(`data-${lang}-placeholder`);
        if (placeholder) {
            element.setAttribute('placeholder', placeholder);
        }
    });
}

const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const target = document.querySelector(targetId);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


const ctaBtn = document.getElementById('ctaBtn');
if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
            contactSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
}

const contactForm = document.getElementById('contactForm');

if (contactForm) {
    contactForm.addEventListener('submit', function() {
        
        const btn = contactForm.querySelector('button[type="submit"]');
        const isAr = langSelect.value === 'ar';
        

        btn.disabled = true;
        btn.textContent = isAr ? 'جاري الإرسال...' : 'Sending...';
        
        //  Netlify handles final message 
    });
}
