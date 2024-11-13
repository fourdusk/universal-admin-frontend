import * as common from '../common/index'
import * as resource from '../resource/index'
import resouceEnMessage from '../resource/locale/en/index'
import resourceZhMessage from '../resource/locale/zh-cn/index'
import * as router from '../router/index'

const constantMap = {
  ...resource
}

const origin = {
  ...common,
  ...resource,
  ...router
}

type ConstantMap = typeof constantMap

type ConstantKey = keyof ConstantMap

const mergeMessage = () => {
  const messages = gbLocale.i18n.global.messages.value as {
    [T in LangType]: Record<PropertyKey, Record<PropertyKey, Record<PropertyKey, unknown>>>
  }
  const keys = gbUtil.getObjectKeys(messages)
  const langMessageMap = {
    en: resouceEnMessage,
    'zh-cn': resourceZhMessage
  }
  for (const k of keys) {
    if (gbConfig.supportedLangs.includes(k) && !messages[k].global.constant.resource) {
      gbLocale.i18n.global.mergeLocaleMessage(k, langMessageMap[k])
    }
  }
}

const getOptions = <T extends ConstantKey>(type: T) => {
  mergeMessage()
  const result = []
  const keys = gbUtil.getObjectKeys(constantMap[type])
  for (const k of keys) {
    const item = constantMap[type][k]
    result.push({
      ...item,
      label: gbUtil.isObject(item) ? gbLocale.i18n.global.t(item.label as string) : item
    })
  }
  return result
}

const getValue = <T extends ConstantKey, P extends keyof ConstantMap[T]>(type: T, prop?: P) => {
  mergeMessage()
  if (gbUtil.isUndefined(prop)) {
    return constantMap[type]
  }
  const keys = gbUtil.getObjectKeys(constantMap[type])
  if (!keys.includes(prop)) {
    throw new Error('prop not exist')
  }
  return constantMap[type][prop]
}

const getTranslate = <T extends ConstantKey>(type: T, value: string | number | boolean | null) => {
  mergeMessage()
  const keys = gbUtil.getObjectKeys(constantMap[type])
  for (const k of keys) {
    const item = constantMap[type][k]
    if (gbUtil.isObject(item) && item.value === value) {
      return gbLocale.i18n.global.t(item.label as string)
    }
  }
  return value
}

export const gbConstant = { origin, getOptions, getValue, getTranslate }
