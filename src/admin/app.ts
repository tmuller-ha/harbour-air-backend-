import Logo  from './extensions/logo.png'
import SmallLogo from './extensions/small-logo.png'

export default {
  config: {
    translations: {
      en: {
        "app.components.LeftMenu.navbrand.title": "Harbour Air",
        "app.components.LeftMenu.navbrand.workplace": "Dashboard",
        "Auth.form.welcome.subtitle": "Log in to your account",
        "Auth.form.welcome.title": "Welcome to Harbour Air",
      },
    },
    auth: {
      logo: Logo,
    },
    menu: {
      logo: SmallLogo,
    },
    locales: [
      "en",
      // 'ar',
      // 'fr',
      // 'cs',
      // 'de',
      // 'dk',
      // 'es',
      // 'he',
      // 'id',
      // 'it',
      // 'ja',
      // 'ko',
      // 'ms',
      // 'nl',
      // 'no',
      // 'pl',
      // 'pt-BR',
      // 'pt',
      // 'ru',
      // 'sk',
      // 'sv',
      // 'th',
      // 'tr',
      // 'uk',
      // 'vi',
      // 'zh-Hans',
      // 'zh',
    ],
  },
  bootstrap() {
  },
};
