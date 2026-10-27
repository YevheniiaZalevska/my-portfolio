import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11.1.14/swiper-bundle.min.mjs';

const swiper = new Swiper('.project-slider', {
  rewind: true, // Після останнього слайда повертається до першого
  autoplay: {
    delay: 4000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true, // Пауза при наведенні миші
  },
  speed: 600,
  slidesPerView: 1,
  spaceBetween: 16,
  grabCursor: true,
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  navigation: {
    nextEl: '.slider-next',
    prevEl: '.slider-prev',
  },

  pagination: {
    el: '.slider-controls .swiper-pagination',
    clickable: true,
  },

  breakpoints: {
    769: {
      slidesPerView: 2,
      spaceBetween: 22,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 26,
    },
  },
});

export default swiper;
