export const langStorageKey = 'lang'

export const supportedLangOptions = [
  {
    label: 'English',
    value: 'en'
  },
  {
    label: '简体中文',
    value: 'zh-cn'
  }
] as const

export const localeConfig = {
  fallbackLocale: 'en'
} as const

export type LangType = (typeof supportedLangOptions)[number]['value']
