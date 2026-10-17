const fridge = document.querySelector('.fridge-wrap');
const door = document.querySelector('[data-fridge-toggle]');
const openButtons = document.querySelectorAll('[data-open-fridge]');
const header = document.querySelector('[data-header]');
const toast = document.querySelector('[data-toast-message]');

function setFridge(open) {
  fridge.classList.toggle('is-open', open);
  door.setAttribute('aria-expanded', String(open));
  door.setAttribute('aria-label', open ? '关闭冰箱门' : '打开冰箱门');
}

door.addEventListener('click', () => setFridge(!fridge.classList.contains('is-open')));
openButtons.forEach((button) => button.addEventListener('click', () => {
  setFridge(true);
  fridge.scrollIntoView({ behavior: 'smooth', block: 'center' });
}));

const revealItems = document.querySelectorAll('[data-reveal]');
document.documentElement.classList.add('reveal-ready');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: .16 });
revealItems.forEach((item, index) => {
  item.style.transitionDelay = `${Math.min(index * 70, 280)}ms`;
  revealObserver.observe(item);
});

const updateHeader = () => header.classList.toggle('is-scrolled', window.scrollY > 24);
updateHeader();
window.addEventListener('scroll', updateHeader, { passive: true });

document.querySelector('[data-toast]').addEventListener('click', () => {
  toast.classList.add('is-visible');
  window.setTimeout(() => toast.classList.remove('is-visible'), 2600);
});
