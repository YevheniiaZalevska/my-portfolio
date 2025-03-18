import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper-container', {
  loop: true, // Безкінечний цикл
  loopAdditionalSlides: 3, // Додає додаткові слайди для плавного циклу
  autoplay: {
    delay: 2000, // Оптимальна пауза між слайдами
    disableOnInteraction: false, // Авто-прокрутка не зупиняється після взаємодії
    pauseOnMouseEnter: true, // Авто-прокрутка зупиняється при наведенні миші
  },
  speed: 1200, // Плавна анімація
  slidesPerView: 1, // За замовчуванням 1 слайд
  spaceBetween: 20, // Відстань між слайдами
  centeredSlides: false, // Центруємо лише на мобільних
  observer: true, // Відслідковує зміни у DOM
  observeParents: true, // Відслідковує зміни у батьківських елементах

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true, // Робить пагінацію адаптивнішою
  },

  grabCursor: true, // UX-поліпшення (курсор "рука")
  keyboard: {
    enabled: true,
    onlyInViewport: true, // Лише коли Swiper у полі зору
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
      centeredSlides: true,
    },
    480: {
      slidesPerView: 1,
      spaceBetween: 15,
      centeredSlides: true,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 20,
      centeredSlides: false,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
      centeredSlides: false,
    },
    // 1440: {
    //   slidesPerView: 4,
    //   spaceBetween: 40,
    // },
  },
});