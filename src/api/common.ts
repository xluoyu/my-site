import { Get } from './request'

// 一言 https://hitokoto.cn/
export const GetHitokoto = () => {
  return Get({
    url: 'https://v1.hitokoto.cn',
  })
}

// 获取指定日期、按年、按月的节假日和万年历信息  https://www.mxnzp.com/doc/detail?id=1
export const GetHoliday = (date: string) => {
  return Get({
    url: `https://www.mxnzp.com/api/holiday/single/${date}`,
    params: {
      app_id: 'ffnvosexglonggdk',
      app_secret: 'R3BBUmE1NG1EaUxPeUtwVVhnQzQ2UT09',
    },
  })
}
