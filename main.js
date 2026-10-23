const fridge = document.querySelector('.fridge-wrap');
const door = document.querySelector('[data-fridge-toggle]');
const openButtons = document.querySelectorAll('[data-open-fridge]');
const header = document.querySelector('[data-header]');
const toast = document.querySelector('[data-toast-message]');
const doorHint = document.querySelector('.note-bottom');
const revealItems = [...document.querySelectorAll('[data-reveal]')];
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function setFridge(open) {
  fridge.classList.toggle('is-open', open);
  if (doorHint) doorHint.classList.toggle('is-hidden', open);
  door.setAttribute('aria-expanded', String(open));
  door.setAttribute('aria-label', open ? '关闭冰箱门' : '打开冰箱门');
}

door.addEventListener('click', () => setFridge(!fridge.classList.contains('is-open')));
openButtons.forEach((button) => button.addEventListener('click', () => {
  setFridge(true);
  fridge.scrollIntoView({ behavior: 'smooth', block: 'center' });
}));

document.documentElement.classList.add('reveal-ready');

let revealFrame = null;
function updateScrollReveal() {
  revealFrame = null;
  const viewport = window.innerHeight;
  const start = viewport * .92;
  const end = viewport * .24;
  revealItems.forEach((item) => {
    if (prefersReducedMotion) {
      item.style.setProperty('--reveal-progress', '1');
      return;
    }
    const rect = item.getBoundingClientRect();
    const progress = Math.max(0, Math.min(1, (start - rect.top) / (start - end)));
    item.style.setProperty('--reveal-progress', progress.toFixed(3));
  });
}

function requestScrollReveal() {
  if (revealFrame === null) revealFrame = window.requestAnimationFrame(updateScrollReveal);
}

updateScrollReveal();
window.addEventListener('scroll', requestScrollReveal, { passive: true });
window.addEventListener('resize', requestScrollReveal, { passive: true });

const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

document.querySelector('[data-toast]').addEventListener('click', () => {
  toast.classList.add('is-visible');
  window.setTimeout(() => toast.classList.remove('is-visible'), 2600);
});

const recipeCard = document.querySelector('.recipe-card');
function playRecipeCardMotion() {
  if (!recipeCard || prefersReducedMotion) return;
  recipeCard.classList.remove('is-animating');
  // restart CSS animations when the card enters view
  void recipeCard.offsetWidth;
  recipeCard.classList.add('is-animating');
}

if (recipeCard && !prefersReducedMotion && 'IntersectionObserver' in window) {
  const io = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        playRecipeCardMotion();
        io.disconnect();
      }
    });
  }, { threshold: 0.35 });
  io.observe(recipeCard);
}
