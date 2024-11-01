export const isType = (val: unknown, type: string): boolean =>
  Object.prototype.toString.call(val) === `[object ${type}]`

export const isUndefined = (val: unknown): val is undefined => typeof val === 'undefined'

export const isNull = (val: unknown): val is null => val === null

export const isNullOrUndefined = (val: unknown): val is null | undefined =>
  isNull(val) || isUndefined(val)

export const isNumber = (val: unknown): val is number =>
  isType(val, 'Number') && Number.isFinite(val) && !Number.isNaN(val)

export const isString = (val: unknown): val is string => isType(val, 'String')

export const isBoolean = (val: unknown): val is boolean => isType(val, 'Boolean')

export const isObject = (val: unknown): val is Record<PropertyKey, unknown> => isType(val, 'Object')

export const isSymbol = (val: unknown): val is symbol => isType(val, 'Symbol')

export const isSet = (val: unknown): val is Set<unknown> => isType(val, 'Set')

export const isWeakSet = (val: unknown): val is WeakSet<object> => isType(val, 'WeakSet')

export const isMap = (val: unknown): val is Map<unknown, unknown> => isType(val, 'Map')

export const isWeakMap = (val: unknown): val is WeakMap<object, unknown> => isType(val, 'WeakMap')

export const isArray = (val: unknown): val is unknown[] => isType(val, 'Array')

export const isFunction = (val: unknown): val is () => unknown => isType(val, 'Function')

export const isDate = (val: unknown): val is Date => isType(val, 'Date')

export const isEmpty = (val: unknown): val is null | undefined | '' =>
  isNullOrUndefined(val) || (isString(val) && val.trim() === '')

export const isStrictEmpty = (val: unknown): val is null | undefined | unknown[] | string =>
  isEmpty(val) || (isArray(val) && val.length === 0)

export const isPromise = <T>(val: unknown): val is Promise<T> => isType(val, 'Promise')

export const isAsyncFunction = <T>(val: unknown): val is Promise<T> => isType(val, 'AsyncFunction')

export const isEqual = (value1: unknown, value2: unknown) => {
  const objectIsEqual = (
    obj1: Record<PropertyKey, unknown>,
    obj2: Record<PropertyKey, unknown>
  ) => {
    const keys1 = Object.keys(obj1)
    const keys2 = Object.keys(obj2)
    if (keys1.length !== keys2.length) {
      return false
    }
    for (const key of keys1) {
      if (!(Object.hasOwn(obj2, key) && isEqual(obj1[key], obj2[key]))) {
        return false
      }
    }
    return true
  }

  const arrayIsEqual = (arr1: unknown[], arr2: unknown[]) => {
    if (arr1.length !== arr2.length) {
      return false
    }

    for (let i = 0; i < arr1.length; i += 1) {
      if (!isEqual(arr1[i], arr2[i])) {
        return false
      }
    }

    return true
  }

  if (Number.isNaN(value1) && Number.isNaN(value2)) {
    return true
  }

  if (value1 === value2) {
    return true
  }

  if (isObject(value1) && isObject(value2)) {
    return objectIsEqual(value1, value2)
  }

  if (isArray(value1) && isArray(value2)) {
    return arrayIsEqual(value1, value2)
  }
  return false
}
