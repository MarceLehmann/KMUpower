// Simple JavaScript for the MVP website

document.addEventListener('DOMContentLoaded', function() {
    // Handle mobile navigation
    const mobileNavToggle = document.createElement('button');
    mobileNavToggle.className = 'mobile-nav-toggle';
    mobileNavToggle.textContent = 'Menu';
    
    const nav = document.querySelector('nav');
    if(nav) {
        nav.parentNode.insertBefore(mobileNavToggle, nav);
        
        mobileNavToggle.addEventListener('click', function() {
            nav.classList.toggle('active');
        });
    }
    
    // Form validation for contact form
    const contactForm = document.querySelector('.contact-form form');
    if(contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let isValid = true;
            const name = document.getElementById('name');
            const email = document.getElementById('email');
            const message = document.getElementById('message');
            
            if(!name.value.trim()) {
                alert('Bitte geben Sie Ihren Namen ein.');
                isValid = false;
                return;
            }
            
            if(!email.value.trim() || !email.value.includes('@')) {
                alert('Bitte geben Sie eine gültige E-Mail-Adresse ein.');
                isValid = false;
                return;
            }
            
            if(!message.value.trim()) {
                alert('Bitte geben Sie eine Nachricht ein.');
                isValid = false;
                return;
            }
            
            if(isValid) {
                alert('Vielen Dank für Ihre Nachricht! Wir werden uns so schnell wie möglich bei Ihnen melden.');
                contactForm.reset();
            }
        });
    }
});
