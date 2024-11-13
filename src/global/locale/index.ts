export const i18n = createI18n({
  fallbackLocale: gbConfig.localeConfig.fallbackLocale,
  legacy: false,
  missingWarn: false,
  silentTranslationWarn: true,
  sync: true,
  globalInjection: true
})

// Type TArgs = Parameters<typeof i18n.global.t>

export const { t } = i18n.global
