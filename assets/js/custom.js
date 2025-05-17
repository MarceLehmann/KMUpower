// Benutzerdefiniertes JavaScript für die KMUpower Website
document.addEventListener('DOMContentLoaded', function() {
  console.log("KMUpower website loaded successfully!");
  
  // Smooth scrolling für Anker-Links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth'
        });
      }
    });
  });
  
  // Aktivieren von Bootstrap Tooltips, falls verwendet
  if (typeof jQuery !== 'undefined' && typeof jQuery.fn.tooltip !== 'undefined') {
    jQuery('[data-toggle="tooltip"]').tooltip();
  }
  
  // Back-to-top Button
  const createBackToTopButton = () => {
    const button = document.createElement('button');
    button.innerHTML = '&uarr;';
    button.setAttribute('id', 'back-to-top');
    button.setAttribute('title', 'Nach oben scrollen');
    button.style.display = 'none';
    button.style.position = 'fixed';
    button.style.bottom = '20px';
    button.style.right = '20px';
    button.style.zIndex = '99';
    button.style.border = 'none';
    button.style.outline = 'none';
    button.style.backgroundColor = '#0066cc';
    button.style.color = 'white';
    button.style.cursor = 'pointer';
    button.style.padding = '15px';
    button.style.borderRadius = '4px';
    button.style.fontSize = '18px';
    
    document.body.appendChild(button);
    
    window.addEventListener('scroll', () => {
      if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        button.style.display = 'block';
      } else {
        button.style.display = 'none';
      }
    });
    
    button.addEventListener('click', () => {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  };
  
  createBackToTopButton();
});
