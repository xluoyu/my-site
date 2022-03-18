/**
 * 为小于10的数字加0
 * @param num
 * @returns
 */
export const numAddZero = (num: number | string): string => {
  num = Number(num)
  if (isNaN(num))
    console.warn('[utils/numAddZero]', '接收参数不是数字')

  return num < 10 ? `0${num}` : `${num}`
}

export const addScript = (url: string, cb?: () => void): void => {
  const s = document.createElement('script')
  s.type = 'text/javascript'
  s.src = url
  document.body.appendChild(s)
  if (cb)
    s.onload = cb
}
