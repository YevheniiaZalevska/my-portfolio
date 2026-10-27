import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper-container', {
  loop: true, // Безкінечний цикл
  autoplay: {
    delay: 5000, // Пауза між слайдами
    disableOnInteraction: false, // Авто-прокрутка не зупиняється після взаємодії
    pauseOnMouseEnter: true, // Авто-прокрутка зупиняється при наведенні миші
  },
  speed: 900, // Плавна анімація
  slidesPerView: 1, // За замовчуванням 1 слайд
  spaceBetween: 20, // Відстань між слайдами
  observer: true, // Відслідковує зміни у DOM
  observeParents: true, // Відслідковує зміни у батьківських елементах
  autoHeight: false,

  navigation: {
    nextEl: '.swiper-button-next-custom',
    prevEl: '.swiper-button-prev-custom',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  grabCursor: true, // UX-поліпшення (курсор "рука")
  keyboard: {
    enabled: true,
    onlyInViewport: true, // Лише коли Swiper у полі зору
  },

  breakpoints: {
    320: {
      slidesPerView: 1.1,
      spaceBetween: 14,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 22,
      centeredSlides: false,
    },
    1100: {
      slidesPerView: 3,
      spaceBetween: 28,
      centeredSlides: false,
    },
  },
});

swiper.el.addEventListener('touchstart', () => {
  swiper.autoplay.stop();
});

swiper.el.addEventListener('touchend', () => {
  swiper.autoplay.start();
});

export default swiper;
