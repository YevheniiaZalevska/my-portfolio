import ScrollReveal from 'scrollreveal';

const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!reduceMotion) {
  const sr = ScrollReveal({
    distance: '40px',
    duration: 900,
    easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
    cleanup: true,
  });

  sr.reveal('.section-title', { origin: 'bottom', distance: '24px' });
  sr.reveal('.about-me-text', { delay: 150, origin: 'left' });
  sr.reveal('.timeline-item', { delay: 200, origin: 'left', interval: 200 });
  sr.reveal('.lang-item', { delay: 200, origin: 'right', interval: 150 });
  sr.reveal('.cert-btn-content, #statistics .cert-card', {
    delay: 200,
    origin: 'bottom',
    interval: 150,
  });
  sr.reveal('.footer-dectop', { delay: 150, origin: 'bottom', interval: 150 });
}

const box = document.querySelector('.hero-poster-box');

if (box) {
  for (let i = 0; i < 24; i++) {
    const dot = document.createElement('span');
    dot.classList.add('hero-dot');
    dot.style.cssText = `
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      width: ${Math.random() * 4 + 2}px;
      height: ${Math.random() * 4 + 2}px;
      animation-delay: ${Math.random() * 3}s;
      animation-duration: ${Math.random() * 2 + 2}s;
    `;
    box.appendChild(dot);
  }
}
