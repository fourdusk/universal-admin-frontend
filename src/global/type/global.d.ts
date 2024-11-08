import { supportedLangOptions } from '@/global/config/index'

declare global {
  type LangType = (typeof supportedLangOptions)[number]['value']
  type NullOrUndefined = null | undefined
  type WhetherType = 'Y' | 'N'
}
