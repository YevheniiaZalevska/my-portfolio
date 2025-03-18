import { translations } from './translations.js';

function changeLanguage(lang) {
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-lang]').forEach(element => {
    const key = element.getAttribute('data-lang');

    if (translations[lang] && translations[lang][key]) {
      // Якщо це посилання з якорем (наприклад, href="#projects"), змінюємо тільки текст
      if (
        element.tagName === 'A' &&
        element.getAttribute('href').startsWith('#')
      ) {
        element.innerHTML = translations[lang][key]; // Змінюємо тільки текст
      } else {
        element.textContent = translations[lang][key];
      }
    }
  });

  // Оновлюємо якірні посилання після зміни мови
  setTimeout(attachSmoothScrolling, 50);

  localStorage.setItem('selectedLanguage', lang);
}

// **Функція для плавного скролу**
function attachSmoothScrolling() {
  document.querySelectorAll('.nav-menu a[href^="#"]').forEach(anchor => {
    anchor.removeEventListener('click', smoothScrollHandler); // Видаляємо попередній обробник
    anchor.addEventListener('click', smoothScrollHandler); // Додаємо новий
  });
}

// **Обробник події для плавного скролу**
function smoothScrollHandler(event) {
  event.preventDefault();
  const targetId = this.getAttribute('href').substring(1);
  const targetElement = document.getElementById(targetId);

  if (targetElement) {
    const headerOffset = document.querySelector('header').offsetHeight; // Відступ під хедер
    const elementPosition =
      targetElement.getBoundingClientRect().top + window.scrollY;
    const offsetPosition = elementPosition - headerOffset - 10; // Додаємо невеликий відступ

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  }
}

// **Коли сторінка завантажується**
document.addEventListener('DOMContentLoaded', () => {
  const savedLanguage = localStorage.getItem('selectedLanguage') || 'en';
  document.getElementById('languages').value = savedLanguage;
  changeLanguage(savedLanguage);

  // Виконуємо оновлення якірних посилань після завантаження
  setTimeout(attachSmoothScrolling, 100);
});

// **Обробник зміни мови**
document.getElementById('languages').addEventListener('change', function () {
  changeLanguage(this.value);
});