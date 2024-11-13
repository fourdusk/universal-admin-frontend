import { supportedLangOptions } from '@/global/config/index'

export type LangType = (typeof supportedLangOptions)[number]['value']
export type NullOrUndefined = null | undefined
export type WhetherType = 'Y' | 'N'
