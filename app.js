// app.js - Handles user interactions for the landing page

document.addEventListener('DOMContentLoaded', function() {
  const getStartedButton = document.getElementById('get-started');

  if (getStartedButton) {
    getStartedButton.addEventListener('click', function() {
      // Smooth scroll to features section
      const featuresSection = document.getElementById('features');
      if (featuresSection) {
        featuresSection.scrollIntoView({ behavior: 'smooth' });
      }
      // Add a subtle animation to the button
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 150);
    });
  }

  // Add intersection observer for scroll animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observe feature cards
  const features = document.querySelectorAll('.feature');
  features.forEach(feature => {
    feature.style.opacity = '0';
    feature.style.transform = 'translateY(30px)';
    feature.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(feature);
  });

  // Add mouse move effect for background
  document.addEventListener('mousemove', function(e) {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    document.body.style.background = `linear-gradient(135deg, rgba(102, 126, 234, ${0.8 + x * 0.2}) 0%, rgba(118, 75, 162, ${0.8 + y * 0.2}) 100%)`;
  });
});
