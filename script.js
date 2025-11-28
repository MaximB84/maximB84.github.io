// ----- Mobile navigation toggle -----
const menuToggle = document.querySelector('.menu-toggle');
const body = document.body;
const nav = document.getElementById('site-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = body.classList.toggle('nav-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a nav link is clicked (on mobile)
  nav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && body.classList.contains('nav-open')) {
      body.classList.remove('nav-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}

// ----- Tip of the Day -----
const tips = [
  'Buy tickets for Sagrada Família in advance to avoid long lines.',
  'Walk as much as you can – many sights are closer than they look on the map.',
  'Try to explore at least one neighbourhood away from the tourist areas.',
  'Carry a reusable water bottle – there are free drinking fountains around the city.',
  'Use the metro late at night instead of taxis to save money.'
];

const tipButton = document.getElementById('random-tip-btn');
const tipOutput = document.getElementById('random-tip');

if (tipButton && tipOutput) {
  tipButton.addEventListener('click', () => {
    const randomIndex = Math.floor(Math.random() * tips.length);
    tipOutput.textContent = tips[randomIndex];
  });
}

// ----- Simple image carousel -----
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let currentSlide = 0;

function updateSlides(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('is-active', i === index);
  });
}

if (slides.length > 0 && prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides(currentSlide);
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides(currentSlide);
  });
}

// Optional: show initial random tip on load
if (tipOutput) {
  const randomIndex = Math.floor(Math.random() * tips.length);
  tipOutput.textContent = tips[randomIndex];
}
