import * as resource from '../resource/index'
import resouceEnMessage from '../resource/locale/en/index'
import resourceZhMessage from '../resource/locale/zh-cn/index'

const constantMap = {
  ...resource
}

type ConstantMap = typeof constantMap

type ConstantKey = keyof ConstantMap

type ConstantItem = {
  label: string
  value: unknown
}

const getOptions = (key: ConstantKey) => {
  gbLocale.i18n.global.mergeLocaleMessage('en', resouceEnMessage)
  gbLocale.i18n.global.mergeLocaleMessage('zh-cn', resourceZhMessage)
  const result: ConstantItem[] = []
  for (const k of gbUtil.getObjectKeys(constantMap[key])) {
    const item = constantMap[key][k] as ConstantItem
    result.push({
      ...item,
      label: gbLocale.i18n.global.t(item.label)
    })
  }
  return result
}

const getValue = <K extends ConstantKey, I extends keyof ConstantMap[K]>(key: K, itemKey: I) => {
  for (const k of gbUtil.getObjectKeys(constantMap[key])) {
    if (k === itemKey) {
      return (constantMap[key][k] as ConstantItem).value
    }
  }
  return itemKey
}

const getTranslate = (key: ConstantKey, value: unknown) => {
  for (const k of gbUtil.getObjectKeys(constantMap[key])) {
    if (value === constantMap[key][k]) {
      return gbLocale.i18n.global.t((constantMap[key][k] as ConstantItem).label)
    }
  }
  return value
}

export const gbConstant = { getOptions, getValue, getTranslate }
