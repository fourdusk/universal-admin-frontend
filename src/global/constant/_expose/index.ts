import * as common from '../common/index'
import * as resource from '../resource/index'
import * as router from '../router/index'

const constantMap = {
  RESOURCE_TYPE: resource.RESOURCE_TYPE
}

const origin = {
  ...common,
  ...resource,
  ...router
}

type ConstantMap = typeof constantMap

type ConstantKey = keyof ConstantMap

type ConstantItem<T = unknown> = {
  label: string
  value: T
}

const getOptions = <T extends ConstantKey>(type: T) => {
  const result: ConstantItem[] = []
  const keys = gbUtil.getObjectKeys(constantMap[type])
  for (const k of keys) {
    const item = constantMap[type][k] as ConstantItem
    result.push({
      ...item,
      label: gbLocale.i18n.global.t(item.label)
    })
  }
  return result
}

const getValue = <T extends ConstantKey, P extends keyof ConstantMap[T]>(type: T, prop: P) => {
  const item = constantMap[type][prop] as Record<PropertyKey, unknown>
  return item.value as ConstantMap[T][P] extends ConstantItem<infer V> ? V : never
}

const getTranslate = <T extends ConstantKey>(type: T, value: unknown) => {
  const keys = gbUtil.getObjectKeys(constantMap[type])
  for (const k of keys) {
    const item = constantMap[type][k] as ConstantItem
    if (item.value === value) {
      return gbLocale.i18n.global.t(item.label)
    }
  }
  return ''
}

export const gbConstant = { origin, getOptions, getValue, getTranslate }
