export const getAppLang = (): LangType => {
  let appLang = gbUtils.localStorager.getItem(gbConfig.langStorageKey) as null | string
  if (!appLang) {
    appLang = navigator.language
  }
  // 如果获取不到浏览器设置语言，或者语言不被支持，则返回优先支持语言
  const langItem = gbConfig.supportedLangOptions.find(o => o.value === appLang)
  if (langItem) {
    appLang = langItem.value
  } else {
    appLang = gbConfig.localeConfig.fallbackLocale
  }
  return appLang as LangType
}

export const setAppLang = (lang: LangType): void => {
  const { locale } = gbLocale.i18n.global
  locale.value = lang
  const htmlEl = document.querySelector('html')
  htmlEl?.setAttribute('lang', lang)
}

export const loadAppLang = async (lang: LangType): Promise<void> => {
  const store = gbStore.useLocaleStore()
  if (gbLocale.i18n.global.locale.value !== lang) {
    if (store.loadedLangs.includes(lang)) {
      setAppLang(lang)
    } else {
      const langModule = (await import(`./support/${lang}.ts`)) as { default: object }
      gbLocale.i18n.global.setLocaleMessage(lang, langModule.default)
      store.appendLoadedLang(lang)
      setAppLang(lang)
    }
  }
}
