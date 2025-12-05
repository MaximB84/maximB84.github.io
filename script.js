/* ============================
   MOBILE NAVIGATION
============================ */
const menuToggle = document.querySelector('.menu-toggle');
const body = document.body;

if(menuToggle){
  menuToggle.addEventListener('click', () => {
    body.classList.toggle('nav-open');
    menuToggle.setAttribute('aria-expanded', body.classList.contains('nav-open'));
  });
}


/* ============================
   HERO — RANDOM TIP BUTTON
============================ */
const heroTips = [
  "Buy Sagrada Família tickets in advance to skip lines.",
  "Walk instead of taking taxis – Barcelona is very walkable.",
  "Use the metro late evening – cheap & safe.",
  "Bring a reusable bottle — free water fountains everywhere.",
  "Explore El Born & Gràcia – less touristy & lovely vibes.",
  "Visit Barceloneta early morning for a calm beach walk.",
  "Even locals love vermut before lunch — try it!"
];

const heroBtn = document.getElementById("random-tip-btn");
const heroOutput = document.getElementById("random-tip");

function showHeroTip(){
  if(heroOutput){
    const random = Math.floor(Math.random() * heroTips.length);
    heroOutput.textContent = heroTips[random];
  }
}

if(heroBtn){
  heroBtn.addEventListener("click", showHeroTip);
  showHeroTip(); // zeigt direkt einen Tipp beim Laden
}



/* ============================
   FOOD & CULTURE TIP CARD
============================ */
const foodTips = [
  "Try *pan con tomate* — simple, fresh & delicious.",
  "Order *menú del día* — 3 courses for a small price.",
  "Try *patatas bravas* in local bars instead tourist spots.",
  "Go for *bocadillo de jamón* — perfect quick lunch.",
  "Try *churros con chocolate* near Plaça Catalunya.",
  "Markets like *Boquería* & *Santa Caterina* are food heaven.",
  "Try *Cava* — local sparkling wine better than champagne for many."
];

const foodTipText = document.getElementById("daily-tip-text");

function setFoodTip(){
  if(foodTipText){
    const r = Math.floor(Math.random() * foodTips.length);
    foodTipText.innerHTML = foodTips[r];
  }
}

setFoodTip(); // sofort bei Laden der Seite



/* ============================
   IMAGE CAROUSEL
============================ */
const slides = document.querySelectorAll('.carousel-slide');
const prev = document.querySelector('.carousel-prev');
const next = document.querySelector('.carousel-next');

let slideIndex = 0;

function updateSlides(){
  slides.forEach((slide, i) =>
    slide.classList.toggle('is-active', i === slideIndex)
  );
}

if(slides.length > 0){
  updateSlides();

  next?.addEventListener("click", () => {
    slideIndex = (slideIndex + 1) % slides.length;
    updateSlides();
  });

  prev?.addEventListener("click", () => {
    slideIndex = (slideIndex - 1 + slides.length) % slides.length;
    updateSlides();
  });
}
