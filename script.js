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

  nav.addEventListener('click', (event) => {
    if (event.target.tagName === 'A' && body.classList.contains('nav-open')) {
      body.classList.remove('nav-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    }
  });
}


/* ---------------------------
   Tip of the Day – Hero Button
----------------------------*/
const tipsHero = [
  'Buy tickets for Sagrada Família in advance to avoid long lines.',
  'Walk as much as you can — many sights are closer than they appear.',
  'Explore at least one neighbourhood away from tourist hotspots.',
  'Carry a reusable bottle — drinking fountains are everywhere.',
  'Use the metro late at night instead of taxis to save money.',
  'Try churros with hot chocolate at small local cafés.',
  'Sunset at the beach is the perfect way to end the day.'
];

const tipButton = document.getElementById('random-tip-btn');
const tipOutput = document.getElementById('random-tip');

function showRandomHeroTip() {
  const randomIndex = Math.floor(Math.random() * tipsHero.length);
  tipOutput.textContent = tipsHero[randomIndex];
}

if (tipButton && tipOutput) {
  tipButton.addEventListener('click', showRandomHeroTip);
  showRandomHeroTip(); // show once on page load
}


/* ---------------------------
   DAILY TIP CARD – Food & Culture
----------------------------*/
const foodDailyTips = [
  'Try the <em>menú del día</em> — 3 courses for a great price.',
  'Visit Boqueria Market early — fresh fruit & olives!', 
  'Order <strong>patatas bravas</strong> — classic Catalan tapas.',
  'Paella tastes best near the sea — avoid tourist traps.',
  'Vermouth Sunday is a tradition — cozy bars everywhere.',
  'Try <strong>pan con tomate</strong> — simple & delicious!',
  'Look for local bakeries — fresh croissants are amazing.',
  'Many museums are free on the first Sunday of each month.'
];

const dailyTipBox = document.getElementById('daily-tip-text');

function setDailyFoodTip() {
  const randomIndex = Math.floor(Math.random() * foodDailyTips.length);
  dailyTipBox.innerHTML = foodDailyTips[randomIndex];
}

if (dailyTipBox) setDailyFoodTip();


/* ---------------------------
   Image Carousel
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

if (slides.length > 0 && prevBtn && nextBtn) {
  prevBtn.addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    updateSlides(currentSlide);
  });

  nextBtn.addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % slides.length;
    updateSlides(currentSlide);
  });

  updateSlides(currentSlide);
}
