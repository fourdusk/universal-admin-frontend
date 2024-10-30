import { createI18n } from 'vue-i18n'

export const i18n = createI18n({
  fallbackLocale: gbConfig.localeConfig.fallbackLocale,
  legacy: false,
  missingWarn: false,
  silentTranslationWarn: true,
  sync: true,
  globalInjection: true
})
