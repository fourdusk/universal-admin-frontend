export const formatTime = (
  date: Date | number | string | undefined,
  format = '{y}-{m}-{d} {h}:{i}:{s}'
): string => {
  const d = typeof date === 'undefined' ? new Date() : new Date(date)
  const formatMap = {
    y: d.getFullYear(),
    m: d.getMonth() + 1,
    d: d.getDate(),
    h: d.getHours(),
    i: d.getMinutes(),
    s: d.getSeconds()
  }

  const result = format.replace(
    /\{(?<placeholder>[ymdhis])+\}/gu,
    (_item, key: keyof typeof formatMap) => {
      const val = formatMap[key]
      return val.toString().padStart(2, '0')
    }
  )

  return result
}
