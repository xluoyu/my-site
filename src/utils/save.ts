export const isLogin = () => {
  return false
}

/**
 * 存储数据
 *
 * key => music/
 */
export const postData = (key, data) => {
  return new Promise((resolve, reject) => {
    if (isLogin()) {
      // 已登录
      // 存储到服务器
    } else {
      // 未登录
      // 存储到localStorage
    }
  })
}
