//  About Me
// ScrollReveal().reveal('.list2', {
//   delay: 400,
//   distance: '40px',
//   duration: 1000,
//   origin: 'right'
// });

ScrollReveal().reveal('.about-me-text', {
  delay: 300,
  distance: '40px',
  duration: 900,
  origin: 'left',
  interval: 200
});


// Education Section
ScrollReveal().reveal('.education-title', {
  delay: 200,
  distance: '30px',
  duration: 800,
  origin: 'top'
});

ScrollReveal().reveal('.education-item', {
  delay: 300,
  distance: '40px',
  duration: 900,
  origin: 'bottom',
  interval: 200
});


// Certificates Section
ScrollReveal().reveal('.cert-btn-content', {
  delay: 300,
  distance: '40px',
  duration: 900,
  origin: 'bottom'
});


const box = document.querySelector('.hero-poster-box');

for (let i = 0; i < 20; i++) {
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