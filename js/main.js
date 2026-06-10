document.addEventListener('DOMContentLoaded', () => {
  // --- Theme Toggle ---
  const themeToggleBtn = document.getElementById('theme-toggle-btn');
  const currentTheme = localStorage.getItem('theme') || 'light';
  
  // Set initial theme based on localStorage
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
  
  if (themeToggleBtn) {
    themeToggleBtn.addEventListener('click', () => {
      document.body.classList.toggle('dark-theme');
      let theme = 'light';
      if (document.body.classList.contains('dark-theme')) {
        theme = 'dark';
      }
      localStorage.setItem('theme', theme);
    });
  }

  // --- Sticky Header Scroll Effect ---
  const header = document.querySelector('.main-header');
  
  const handleScrollHeader = () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };
  
  window.addEventListener('scroll', handleScrollHeader);
  handleScrollHeader(); // Run on init in case page loads scrolled

  // --- Mobile Menu Toggle ---
  const mobileToggle = document.querySelector('.mobile-toggle');
  const mobileNav = document.querySelector('.mobile-nav');
  const menuOverlay = document.querySelector('.menu-overlay');
  const mobileLinks = document.querySelectorAll('.mobile-nav-links a');
  
  const toggleMenu = () => {
    mobileToggle.classList.toggle('open');
    mobileNav.classList.toggle('open');
    menuOverlay.classList.toggle('show');
    
    // Prevent background scrolling when menu is open
    if (mobileNav.classList.contains('open')) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  };

  if (mobileToggle) {
    mobileToggle.addEventListener('click', toggleMenu);
  }
  if (menuOverlay) {
    menuOverlay.addEventListener('click', toggleMenu);
  }
  
  // Close menu when a link is clicked
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (mobileNav.classList.contains('open')) {
        toggleMenu();
      }
    });
  });

  // --- Active Nav Highlighting on Scroll ---
  const sections = document.querySelectorAll('section[id]');
  const navLinks = document.querySelectorAll('.nav-item a');

  const highlightNav = () => {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100; // Account for header height
      const sectionId = current.getAttribute('id');
      
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        navLinks.forEach(link => {
          link.classList.remove('active');
          const href = link.getAttribute('href');
          if (href === `#${sectionId}` || href === `index.html#${sectionId}` || href.endsWith(`#${sectionId}`)) {
            link.classList.add('active');
          }
        });
      }
    });
  };

  window.addEventListener('scroll', highlightNav);
  highlightNav(); // Run on init

  // --- Scroll Reveal Animation ---
  const revealSections = document.querySelectorAll('.fade-in-section');
  
  const revealOnScroll = () => {
    const triggerBottom = window.innerHeight * 0.85;
    
    revealSections.forEach(section => {
      const sectionTop = section.getBoundingClientRect().top;
      
      if (sectionTop < triggerBottom) {
        section.classList.add('is-visible');
      }
    });
  };
  
  window.addEventListener('scroll', revealOnScroll);
  revealOnScroll(); // Run on init to show already visible elements

  // --- Form Interactivity ---
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const nameInput = document.getElementById('name');
      const emailInput = document.getElementById('email');
      const messageInput = document.getElementById('message');
      
      // Simple validation check
      if (nameInput.value.trim() === '' || emailInput.value.trim() === '' || messageInput.value.trim() === '') {
        alert('Por favor, completa todos los campos del formulario.');
        return;
      }
      
      // Feedback simulation
      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      
      submitBtn.textContent = 'Enviando...';
      submitBtn.disabled = true;
      
      setTimeout(() => {
        alert(`¡Gracias, ${nameInput.value}! Tu mensaje ha sido simulado con éxito. (Formulario estático listo para integraciones como Formspree o webhooks).`);
        contactForm.reset();
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }, 1000);
    });
  }
});
