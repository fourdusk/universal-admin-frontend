const moduleLocale = import.meta.glob('@/module/**/locale/en/index.ts')
const constantLocale = import.meta.glob('@/global/constant/**/locale/en/index.ts')

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
      appName: 'Universal Admin'
    },
    action: {
      operate: 'Operation',
      backToHomePage: 'Back to home page',
      refresh: 'Refresh',
      query: 'Query',
      reset: 'Reset',
      maximize: 'Maximize',
      closeCurrent: 'Close Current',
      closeOther: 'Close Other',
      closeAll: 'Close All'
    },
    message: {
      requiredTip: 'Required',
      emptyTip: 'Can not be empty'
    }
  }
}

export default message
