import * as common from '../common/index'
import * as resource from '../resource/index'
import resouceEnMessage from '../resource/locale/en/index'
import resourceZhMessage from '../resource/locale/zh-cn/index'
import * as router from '../router/index'

const constantMap = {
  ...common,
  ...resource,
  ...router
}

type ConstantMap = typeof constantMap

type ConstantKey = keyof ConstantMap

const getOptions = <T extends ConstantKey>(type: T) => {
  gbLocale.i18n.global.mergeLocaleMessage('en', resouceEnMessage)
  gbLocale.i18n.global.mergeLocaleMessage('zh-cn', resourceZhMessage)
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

const getValue = <T extends ConstantKey, P extends keyof ConstantMap[T]>(type: T, prop: P) => {
  const keys = gbUtil.getObjectKeys(constantMap[type])
  if (!keys.includes(prop)) {
    throw new Error('prop not exist')
  }
  return constantMap[type][prop]
}

const getTranslate = <T extends ConstantKey>(type: T, value: string | number | boolean | null) => {
  const keys = gbUtil.getObjectKeys(constantMap[type])
  for (const k of keys) {
    const item = constantMap[type][k]
    if (gbUtil.isObject(item) && item.value === value) {
      return gbLocale.i18n.global.t(item.label as string)
    }
  }
  return value
}

export const gbConstant = { getOptions, getValue, getTranslate }
