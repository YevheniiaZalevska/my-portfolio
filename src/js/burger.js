document.addEventListener('DOMContentLoaded', function () {
  const burgerMenu = document.getElementById('burger-menu');
  const navMenu = document.getElementById('nav-menu');
  const menuLinks = document.querySelectorAll('.nav-menu a');
  const body = document.body; // Отримуємо body для блокування прокрутки

  // Функція для перемикання меню
  function toggleMenu() {
    burgerMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    body.classList.toggle('no-scroll'); // Блокуємо/розблоковуємо прокручування сторінки
  }

  // Відкривання/закривання меню при кліку на бургер-кнопку
  burgerMenu.addEventListener('click', toggleMenu);

  // Закриваємо меню при кліку на будь-яке посилання в меню
  menuLinks.forEach(link => {
    link.addEventListener('click', () => {
      navMenu.classList.remove('active');
      burgerMenu.classList.remove('active');
      body.classList.remove('no-scroll'); // Відновлюємо прокручування
    });
  });
});


burgerMenu.addEventListener('click', () => {
  burgerMenu.classList.toggle('active');
  navMenu.classList.toggle('active');
  body.classList.toggle('no-scroll');
});

