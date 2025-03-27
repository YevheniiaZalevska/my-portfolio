import { translations } from './translations.js';

document.addEventListener('DOMContentLoaded', () => {
  const languageSelector = document.getElementById('languages');

function updateLanguage(lang) {
  document.querySelectorAll('[data-lang]').forEach((element) => {
    const key = element.getAttribute('data-lang');
    if (translations[lang] && translations[lang][key]) {
      if (
        element.tagName === 'A' &&
        element.getAttribute('href') &&
        element.getAttribute('href').startsWith('#')
      ) {
        element.innerHTML = translations[lang][key];
      } else if (key === 'about_text') {
        const template = translations[lang][key];
        const name = translations[lang].hero_name;
        element.innerHTML = template.replace('${name}', name);
      } else {
        element.innerHTML = translations[lang][key];
      }
    }
  });
}


  if (languageSelector) {
    languageSelector.addEventListener('change', (e) => {
      const selectedLang = e.target.value;
      updateLanguage(selectedLang);
    });

    updateLanguage(languageSelector.value);
  }
});
