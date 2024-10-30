const createStorager = (storager: Storage, prefix = 'uni_', delimiter = '|') => {
  const encodeKey = (k: string) => `${prefix}${k}`

  const decodeKey = (k: string) => {
    const reg = new RegExp(`^(?:${prefix})(.*)`, 'u')
    return k.replace(reg, '$1')
  }

  const getAllKey = () => {
    const result: string[] = []
    const len = storager.length
    for (let i = 0; i < len; i += 1) {
      const key = storager.key(i)
      if (!gbUtils.isNullOrUndefined(key)) {
        result.push(key)
      }
    }
    return result.filter(v => v.startsWith(prefix))
  }

  const setItem = (k: string, v: string, expired?: Date | number | string) => {
    let key = k
    let val = v
    if (gbUtils.isObject(v) || gbUtils.isArray(v)) {
      val = JSON.stringify(v)
    }
    if (!gbUtils.isNullOrUndefined(expired)) {
      key = `${k}${delimiter}${gbUtils.formatTime(expired)}`
    }
    storager.setItem(encodeKey(key), val)
  }

  const removeItem = (k: string) => {
    const keys = getAllKey()
    const key = keys.find(v => v.startsWith(encodeKey(k)))
    if (!gbUtils.isNullOrUndefined(key)) {
      storager.removeItem(key)
    }
  }

  const getItem = <T extends string | object>(k: string) => {
    const keys = getAllKey()
    const key = keys.find(v => v.startsWith(encodeKey(k)))
    if (gbUtils.isNullOrUndefined(key)) {
      return null
    }
    const [, expiredTime] = key.split(delimiter)
    const time = new Date(expiredTime).getTime()
    const now = Date.now()
    if (!gbUtils.isNullOrUndefined(expiredTime) && now > time) {
      removeItem(k)
      return null
    }
    const result = storager.getItem(key)
    if (!gbUtils.isNullOrUndefined(result)) {
      try {
        return JSON.parse(result) as T
      } catch {
        return result
      }
    }
    return result
  }

  const clear = () => {
    const keys = getAllKey()
    for (const k of keys) {
      removeItem(decodeKey(k))
    }
  }

  return {
    setItem,
    removeItem,
    getItem,
    clear
  }
}

export const localStorager = createStorager(globalThis.localStorage)
export const sessionStorager = createStorager(globalThis.sessionStorage)
