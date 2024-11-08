export const getObjectKeys = <T extends object>(obj: T) => Object.keys(obj) as (keyof T)[]

export const checkObjectProperty = <T extends Record<PropertyKey, unknown>, P extends PropertyKey>(
  obj: T,
  prop: P
): obj is T & Record<P, unknown> => Object.hasOwn(obj, prop)
