import { LSGet, LSSet } from '../services/localstorage.service';

import { language } from '../stores/globals';

import messages from '../i18n';

const i18n = {
  allowedLanguages: [
    'pt-BR',
    'en-US',
    'es-AR',
  ],

  options: {
    locale: 'en-US',
    messages: messages['en-US'],
    routes: messages['en-US'].ROUTES
  },

  changeLanguage: (newLang: string) => {
    i18n.options.locale = newLang;
    i18n.options.messages = messages[newLang];
    i18n.options.routes = messages[newLang].ROUTES;

    LSSet('lang', newLang);
    language.update(() => newLang);
  },

  init: () => {
    const language = LSGet('lang') || window.navigator.language.substring(0, 5).replace('_', '-');
  
    if (language) {
      const languageIsAllowed = language in i18n.allowedLanguages;
  
      if (languageIsAllowed) {
        i18n.changeLanguage(language);
      } else {
        i18n.changeLanguage('en-US');
      }
    } else {
      i18n.changeLanguage('en-US');
    }
  }
}

i18n.init();

export default i18n;