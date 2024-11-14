const moduleLocale = import.meta.glob('@/module/**/locale/zh-cn/index.ts')
const constantLocale = import.meta.glob('@/global/constant/**/locale/zh-cn/index.ts')

type LocaleModule = {
  default: Record<PropertyKey, unknown>
}

const modulePromiseList: Promise<LocaleModule>[] = []

for (const k of gbUtil.getObjectKeys(moduleLocale)) {
  modulePromiseList.push(moduleLocale[k]() as Promise<LocaleModule>)
}

const moduleMessage = (await Promise.all(modulePromiseList))
  .map(o => o.default)
  .reduce<Record<PropertyKey, unknown>>((prev, curr) => ({ ...prev, ...curr }), {})

const constantPromiseList: Promise<LocaleModule>[] = []

for (const k of gbUtil.getObjectKeys(constantLocale)) {
  constantPromiseList.push(constantLocale[k]() as Promise<LocaleModule>)
}

const constantMessage = (await Promise.all(constantPromiseList))
  .map(o => o.default)
  .reduce<Record<PropertyKey, unknown>>((prev, curr) => ({ ...prev, ...curr }), {})

const message = {
  ...moduleMessage,
  global: {
    constant: {
      ...constantMessage
    },
    label: {
      appName: '通用管理后台'
    },
    action: {
      operate: '操作',
      backToHomePage: '返回首页',
      refresh: '刷新',
      query: '查询',
      reset: '重置',
      maximize: '最大化',
      closeCurrent: '关闭当前',
      closeOther: '关闭其他',
      closeAll: '关闭所有'
    },
    message: {
      requiredTip: '必填项',
      emptyTip: '不能为空'
    }
  }
}

export default message
