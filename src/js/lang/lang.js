import { translations } from './translations.js';

const STORAGE_KEY = 'portfolio-lang';

function readSavedLang() {
  try {
    return localStorage.getItem(STORAGE_KEY);
  } catch {
    return null;
  }
}

function saveLang(lang) {
  try {
    localStorage.setItem(STORAGE_KEY, lang);
  } catch {
    // Сховище недоступне (приватний режим) — просто не запам'ятовуємо мову
  }
}

export function currentLang() {
  return document.documentElement.lang === 'uk' ? 'ua' : 'en';
}

export function t(key) {
  return translations[currentLang()]?.[key] ?? translations.en[key] ?? '';
}

function updateLanguage(lang) {
  document.querySelectorAll('[data-lang]').forEach(element => {
    const key = element.getAttribute('data-lang');
    if (translations[lang] && translations[lang][key]) {
      if (key === 'about_text') {
        const template = translations[lang][key];
        const name = translations[lang].hero_name;
        element.innerHTML = template.replace('${name}', name);
      } else {
        element.innerHTML = translations[lang][key];
      }
    }
  });

  document.documentElement.lang = lang === 'ua' ? 'uk' : 'en';
}

document.addEventListener('DOMContentLoaded', () => {
  const languageSelector = document.getElementById('languages');

  if (languageSelector) {
    const saved = readSavedLang();
    if (saved && translations[saved]) {
      languageSelector.value = saved;
    }

    languageSelector.addEventListener('change', e => {
      const selectedLang = e.target.value;
      updateLanguage(selectedLang);
      saveLang(selectedLang);
    });

    updateLanguage(languageSelector.value);
  }
});
