import { t } from './lang/lang.js';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)').matches;

/* ---------- Прогрес прокрутки, кнопка "вгору" ---------- */

const progressBar = document.querySelector('.scroll-progress');
const backToTop = document.querySelector('.back-to-top');
const ring = document.querySelector('.back-to-top-ring');
const RING_LENGTH = 2 * Math.PI * 21;

if (ring) ring.style.strokeDasharray = RING_LENGTH;

function onScroll() {
  const max = document.documentElement.scrollHeight - window.innerHeight;
  const progress = max > 0 ? window.scrollY / max : 0;

  progressBar?.style.setProperty('--progress', progress);
  backToTop?.classList.toggle('is-visible', window.scrollY > 600);
  if (ring) ring.style.strokeDashoffset = RING_LENGTH * (1 - progress);
}

window.addEventListener('scroll', onScroll, { passive: true });
onScroll();

backToTop?.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: reduceMotion ? 'auto' : 'smooth' });
});

/* ---------- Активний пункт меню ---------- */

const navLinks = [...document.querySelectorAll('.header-item a[href^="#"]')];
const sections = navLinks
  .map(link => document.querySelector(link.getAttribute('href')))
  .filter(Boolean);

const navObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navLinks.forEach(link =>
        link.classList.toggle('is-active', link.getAttribute('href') === `#${entry.target.id}`)
      );
    });
  },
  { rootMargin: '-45% 0px -50% 0px' }
);

sections.forEach(section => navObserver.observe(section));

/* ---------- Світіння за курсором ---------- */

const glow = document.querySelector('.cursor-glow');

if (glow && finePointer && !reduceMotion) {
  window.addEventListener(
    'pointermove',
    e => {
      glow.style.setProperty('--x', `${e.clientX}px`);
      glow.style.setProperty('--y', `${e.clientY}px`);
      glow.classList.add('is-active');
    },
    { passive: true }
  );
  document.addEventListener('pointerleave', () => glow.classList.remove('is-active'));
}

/* ---------- Паралакс у hero ---------- */

const heroBox = document.querySelector('.hero-poster-box');

if (heroBox && finePointer && !reduceMotion) {
  const layers = heroBox.querySelectorAll('[data-depth]');

  heroBox.addEventListener('pointermove', e => {
    const rect = heroBox.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;

    layers.forEach(layer => {
      const depth = Number(layer.dataset.depth);
      layer.style.translate = `${px * depth * -24}px ${py * depth * -16}px`;
    });
  });

  heroBox.addEventListener('pointerleave', () => {
    layers.forEach(layer => (layer.style.translate = ''));
  });
}

/* ---------- 3D-нахил карток проєктів ---------- */

if (finePointer && !reduceMotion) {
  document.querySelectorAll('.tilt').forEach(card => {
    card.addEventListener('pointermove', e => {
      const rect = card.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;

      card.style.setProperty('--rx', `${(0.5 - y) * 8}deg`);
      card.style.setProperty('--ry', `${(x - 0.5) * 10}deg`);
      card.style.setProperty('--mx', `${x * 100}%`);
      card.style.setProperty('--my', `${y * 100}%`);
      card.classList.add('is-tilting');
    });

    card.addEventListener('pointerleave', () => {
      card.style.setProperty('--rx', '0deg');
      card.style.setProperty('--ry', '0deg');
      card.classList.remove('is-tilting');
    });
  });
}

/* ---------- "Магнітні" кнопки ---------- */

if (finePointer && !reduceMotion) {
  document.querySelectorAll('.magnetic').forEach(el => {
    el.addEventListener('pointermove', e => {
      const rect = el.getBoundingClientRect();
      const dx = e.clientX - (rect.left + rect.width / 2);
      const dy = e.clientY - (rect.top + rect.height / 2);
      el.style.translate = `${dx * 0.25}px ${dy * 0.35}px`;
    });
    el.addEventListener('pointerleave', () => (el.style.translate = ''));
  });
}

/* ---------- Відео проєкту: грає лише у полі зору ---------- */

document.querySelectorAll('.project-video').forEach(video => {
  if (reduceMotion) {
    video.removeAttribute('autoplay');
    video.pause();
    return;
  }

  new IntersectionObserver(([entry]) => {
    if (entry.isIntersecting) video.play().catch(() => {});
    else video.pause();
  }).observe(video);
});

/* ---------- Розгортання опису проєкту ---------- */

const moreButtons = document.querySelectorAll('.project-more');

function updateMoreButtons() {
  moreButtons.forEach(btn => {
    const card = btn.closest('.project-item');
    if (card.classList.contains('is-expanded')) return;
    const text = card.querySelector('.project-item-text');
    btn.hidden = text.scrollHeight <= text.clientHeight + 1;
  });
}

window.addEventListener('load', updateMoreButtons);
window.addEventListener('resize', updateMoreButtons);
document.getElementById('languages')?.addEventListener('change', updateMoreButtons);
updateMoreButtons();

moreButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const card = btn.closest('.project-item');
    const expanded = card.classList.toggle('is-expanded');
    btn.setAttribute('aria-expanded', String(expanded));
  });
});

/* ---------- Поява елементів при прокрутці ---------- */

const visibilityObserver = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const el = entry.target;
      el.classList.add('is-visible');
      visibilityObserver.unobserve(el);
    });
  },
  { threshold: 0.4 }
);

document
  .querySelectorAll('.lang-item, .timeline')
  .forEach(el => visibilityObserver.observe(el));

/* ---------- Лайтбокс для зображень ---------- */

const lightbox = document.querySelector('.lightbox');
const lightboxImg = lightbox?.querySelector('.lightbox-img');

if (lightbox && typeof lightbox.showModal === 'function') {
  document.querySelectorAll('.zoomable').forEach(trigger => {
    trigger.addEventListener('click', () => {
      const img = trigger.querySelector('img');
      lightboxImg.src = img.currentSrc || img.src;
      lightboxImg.alt = img.alt;
      lightbox.showModal();
    });
  });

  lightbox.addEventListener('click', e => {
    if (e.target === lightbox || e.target.closest('.lightbox-close')) lightbox.close();
  });
}

/* ---------- Копіювання e-mail ---------- */

const toast = document.querySelector('.toast');
let toastTimer;

function showToast(message) {
  if (!toast) return;
  toast.textContent = message;
  toast.classList.add('is-visible');
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove('is-visible'), 2200);
}

document.querySelectorAll('[data-copy]').forEach(btn => {
  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.copy);
      btn.classList.add('is-copied');
      setTimeout(() => btn.classList.remove('is-copied'), 1600);
      showToast(t('copied'));
    } catch {
      showToast(btn.dataset.copy);
    }
  });
});

/* ---------- Рік у футері ---------- */

const yearEl = document.querySelector('.footer-year');
if (yearEl) yearEl.textContent = new Date().getFullYear();
