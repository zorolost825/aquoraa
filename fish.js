 // Dynamic year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Simple form handler (demo)
    const form = document.getElementById('contactForm');
    const status = document.getElementById('formStatus');
    form?.addEventListener('submit', (e) => {
      e.preventDefault();
      const data = Object.fromEntries(new FormData(form).entries());
      // Simulate sending (replace with your backend/EmailJS/Netlify forms later)
      status.textContent = 'Sending...';
      setTimeout(() => {
        status.textContent = 'Thanks! We will contact you within 24 hours.';
        form.reset();
      }, 900);
    });