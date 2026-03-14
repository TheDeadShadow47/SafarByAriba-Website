// ===== LANGUAGE SWITCHING =====
const langSelect = document.getElementById('langSelect');
const html = document.documentElement;
const body = document.body;

// Load saved language preference
const savedLang = localStorage.getItem('language') || 'en';
langSelect.value = savedLang;
setLanguage(savedLang);

langSelect.addEventListener('change', (e) => {
    setLanguage(e.target.value);
});

function setLanguage(lang) {
    localStorage.setItem('language', lang);
    
    // Set direction
    if (lang === 'ar') {
        html.setAttribute('dir', 'rtl');
        html.setAttribute('lang', 'ar');
    } else {
        html.setAttribute('dir', 'ltr');
        html.setAttribute('lang', 'en');
    }
    
    // Update all text elements with data attributes
    document.querySelectorAll('[data-en]').forEach(element => {
        const text = element.getAttribute(`data-${lang}`);
        if (text) {
            element.textContent = text;
        }
    });
    
    // Update placeholders
    document.querySelectorAll('[data-en-placeholder]').forEach(element => {
        const placeholder = element.getAttribute(`data-${lang}-placeholder`);
        if (placeholder) {
            element.setAttribute('placeholder', placeholder);
        }
    });
}

// ===== MOBILE MENU TOGGLE =====
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('navMenu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close menu when link is clicked
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// ===== SMOOTH SCROLLING =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// ===== CONTACT FORM =====
const contactForm = document.getElementById('contactForm');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    
    // Get form values
    const formData = new FormData(contactForm);
    const inputs = contactForm.querySelectorAll('input, textarea');
    const name = inputs[0].value.trim();
    const email = inputs[1].value.trim();
    const phone = inputs[2].value.trim();
    const message = inputs[3].value.trim();
    
    // Validate
    if (!name || !email || !phone || !message) {
        alert('Please fill in all fields');
        return;
    }
    
    if (!isValidEmail(email)) {
        alert('Please enter a valid email');
        return;
    }
    
    // Show success message
    const btn = contactForm.querySelector('button[type="submit"]');
    const originalText = btn.textContent;
    btn.textContent = btn.getAttribute('data-en') === 'Send Message' ? 'Sending...' : 'جاري الإرسال...';
    btn.disabled = true;
    
    setTimeout(() => {
        contactForm.reset();
        btn.textContent = originalText;
        btn.disabled = false;
        alert(langSelect.value === 'ar' ? 'تم إرسال الرسالة بنجاح!' : 'Message sent successfully!');
    }, 1000);
});

// ===== EMAIL VALIDATION =====
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// ===== CTA BUTTON SCROLL =====
const ctaBtn = document.getElementById('ctaBtn');
if (ctaBtn) {
    ctaBtn.addEventListener('click', () => {
        document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
    });
}
