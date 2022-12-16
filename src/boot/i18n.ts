import { LSGet, LSSet } from '../services/localstorage.service';

import app from '../main';

import messages from '../i18n';

const options = {
  locale: '',
  messages: null
};

export function changeLanguage (newLang: string) {
  options.locale = newLang;
  options.messages = messages[newLang];

  LSSet('lang', newLang);
}

export function init () {
  const POSSIBLE_LANGUAGES = {
    pt: 'pt-BR',
    es: 'es-AR',
    en: 'en-US',
    default: 'en-US',
  };

  const language = LSGet('lang') || window.navigator.language.substring(0, 5).replace('_', '-');

  if (language) {
    const languageIsAllowed = language in POSSIBLE_LANGUAGES;

    if (languageIsAllowed) {
      changeLanguage(language);
    } else {
      changeLanguage(POSSIBLE_LANGUAGES.default);
    }
  } else {
    changeLanguage(POSSIBLE_LANGUAGES.default);
  }

  app.i18n = options;
}