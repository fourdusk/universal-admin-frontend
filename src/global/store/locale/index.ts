import { defineStore } from 'pinia'

type State = {
  lang: string | null
  loadedLangs: LangType[]
}

export const useLocaleStore = defineStore('locale', {
  state: (): State => ({
    lang: null,
    loadedLangs: []
  }),
  actions: {
    async initLang() {
      const lang = gbLocale.getAppLang()
      await this.setLang(lang)
    },
    async setLang(lang: LangType) {
      this.lang = lang
      await gbLocale.loadAppLang(lang)
      gbUtils.localStorager.setItem(gbConfig.langStorageKey, lang)
      this.setDocumentTitle()
    },
    setDocumentTitle(resourceName?: string) {
      const appName = gbLocale.i18n.global.t('global.label.appName')
      document.title = gbUtils.isString(resourceName) ? `${resourceName} - ${appName}` : appName
    },
    setLoadedLangs(langs: LangType[]) {
      this.loadedLangs = langs
    },
    appendLoadedLang(lang: LangType) {
      this.loadedLangs = [...this.loadedLangs, lang]
    },
    getLangOptions() {
      return [...gbConfig.supportedLangOptions]
    }
  }
})
