module.exports = function (req) {
  req.cookie = {}
  const cookieStr = req.headers.cookie || ''  // 'k1=v1;k2=v2'
  cookieStr.split(';').forEach(item => {
    if (!item) {
      return
    }
    const arr = item.split('=') // 解析出cookie的键和值
    const key = arr[0].trim()
    const value = arr[1].trim()
    req.cookie[key] = value
  })
}