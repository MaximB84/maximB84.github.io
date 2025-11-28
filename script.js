/* ---------------------------
   Mobile Navigation Toggle
----------------------------*/
const menuToggle = document.querySelector('.menu-toggle');
const body = document.body;
const nav = document.getElementById('site-nav');

if (menuToggle && nav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = body.classList.toggle('nav-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  // Close menu when a nav link is selected
  nav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && body.classList.contains('nav-open')) {
      body.classList.remove('nav-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}


/* ---------------------------
   Tip of the Day
----------------------------*/
const tips = [
  'Buy tickets for Sagrada Família in advance to avoid long lines.',
  'Walk as much as you can – many sights are closer than they look.',
  'Explore at least one neighbourhood away from tourist areas.',
  'Carry a reusable water bottle – free fountains are everywhere.',
  'Use the metro late at night instead of taxis to save money.'
];

const tipButton = document.getElementById('random-tip-btn');
const tipOutput = document.getElementById('random-tip');

function showRandomTip() {
  const randomIndex = Math.floor(Math.random() * tips.length);
  tipOutput.textContent = tips[randomIndex];
}

if (tipButton && tipOutput) {
  tipButton.addEventListener('click', showRandomTip);

  // Show a random tip on load for better UX
  showRandomTip();
}


/* ---------------------------
   Image Carousel (Manual)
----------------------------*/
const slides = document.querySelectorAll('.carousel-slide');
const prevBtn = document.querySelector('.carousel-prev');
const nextBtn = document.querySelector('.carousel-next');

let currentSlide = 0;

function updateSlides(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('is-active', i === index);
  });
}

// Only activate if carousel exists
if (slides.length > 0 && prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides(currentSlide);
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides(currentSlide);
  });

  // Set initial state
  updateSlides(currentSlide);
}
