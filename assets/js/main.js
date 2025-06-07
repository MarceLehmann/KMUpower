document.addEventListener('DOMContentLoaded', function() {
  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector('.mobile-menu');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener('click', function() {
      navLinks.classList.toggle('active');
    });
  }
  
  // Header Scroll Effect
  const header = document.querySelector('header');
  
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });
  
  // Smooth Scrolling for Anchor Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 80,
          behavior: 'smooth'
        });
        
        // Close mobile menu if open
        if (navLinks.classList.contains('active')) {
          navLinks.classList.remove('active');
        }
      }
    });
  });
  
  // Animation on Scroll
  const animateElements = document.querySelectorAll('.animate');
  
  function checkIfInView() {
    animateElements.forEach(element => {
      const elementTop = element.getBoundingClientRect().top;
      const windowHeight = window.innerHeight;
      
      if (elementTop < windowHeight - 100) {
        element.style.opacity = '1';
        element.style.transform = 'translateY(0)';
      }
    });
  }
  
  // Initial check
  checkIfInView();
  
  // Check on scroll
  window.addEventListener('scroll', checkIfInView);
  
  // Active Navigation Link
  function setActiveNavLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.nav-links a');
    
    let currentSection = '';
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.clientHeight;
      
      if (window.scrollY >= sectionTop - 200 && window.scrollY < sectionTop + sectionHeight - 200) {
        currentSection = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${currentSection}`) {
        link.classList.add('active');
      }
    });
  }
  
  window.addEventListener('scroll', setActiveNavLink);
  
  // Form Validation
  const contactForm = document.querySelector('.contact-form form');
  
  if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
      e.preventDefault();
      
      let isValid = true;
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      
      // Simple validation
      if (!nameInput.value.trim()) {
        isValid = false;
        nameInput.style.borderColor = 'red';
      } else {
        nameInput.style.borderColor = '#ddd';
      }
      
      if (!emailInput.value.trim() || !isValidEmail(emailInput.value)) {
        isValid = false;
        emailInput.style.borderColor = 'red';
      } else {
        emailInput.style.borderColor = '#ddd';
      }
      
      if (!messageInput.value.trim()) {
        isValid = false;
        messageInput.style.borderColor = 'red';
      } else {
        messageInput.style.borderColor = '#ddd';
      }
      
      if (isValid) {
        // Here you would typically send the form data to a server
        alert('Vielen Dank für Ihre Nachricht! Wir werden uns in Kürze bei Ihnen melden.');
        contactForm.reset();
      }
    });
  }
  
  function isValidEmail(email) {
    const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
});

