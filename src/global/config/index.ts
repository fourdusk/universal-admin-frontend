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

export const supportedLangs = supportedLangOptions.map(o => o.value)

export const localeConfig = {
  fallbackLocale: 'en'
} as const
