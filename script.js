console.log("Portfolio Loaded Successfully!");

// Smooth scroll for navigation
document.querySelectorAll('.main-nav a').forEach(link => {
  link.addEventListener('click', function(e) {
    const href = this.getAttribute('href');
    if (href.startsWith('#')) {
      e.preventDefault();
      document.querySelector(href).scrollIntoView({ behavior: 'smooth' });
      document.querySelectorAll('.main-nav a').forEach(a => a.classList.remove('active'));
      this.classList.add('active');
    }
  });
});

// Simple contact form feedback (no backend)
document.querySelector('.contact-form').addEventListener('submit', function(e) {
  e.preventDefault();
  alert('Thank you for reaching out! I will get back to you soon.');
  this.reset();
});

// Project card mouse events
function highlightCard(card) {
  card.classList.add('active');
}
function unhighlightCard(card) {
  card.classList.remove('active');
}

// Animate skill bars on scroll
function animateSkills() {
  document.querySelectorAll('.skill-level').forEach(bar => {
    const rect = bar.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      bar.style.width = bar.dataset.level;
      bar.classList.add('animate-skill');
    }
  });
}
window.addEventListener('scroll', animateSkills);
window.addEventListener('DOMContentLoaded', animateSkills);