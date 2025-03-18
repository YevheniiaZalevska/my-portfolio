document.addEventListener('DOMContentLoaded', () => {
  const scrollToTopButton = document.getElementById('scrollToTop');

  // Відстеження прокрутки, щоб показати або сховати кнопку
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      scrollToTopButton.style.display = 'flex';
    } else {
      scrollToTopButton.style.display = 'none';
    }
  });

  // Анімація прокрутки наверх при кліку
  scrollToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
});