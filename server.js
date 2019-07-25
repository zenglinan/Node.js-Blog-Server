const querystring = require('querystring')
const blogRouterHandler = require("./src/router/blog")
const userRouterHandler = require("./src/router/user")
const getPostData = require('./src/controller/getPostData')
const getCookieExpires = require('./src/controller/expires')


const serverHandler = function (req, res) {
  const {method, url} = req
  req.method = method
  req.url = url
  req.path = url.split('?')[0]
  req.query = querystring.parse((url.split('?')[1]))  // 将url里的查询参数变成对象
  res.setHeader('Content-Type', 'application/json')

  // 解析cookie
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

  // 解析session
  // let needSetCookie = false
  // let userId = req.cookie.userid
  // if (userId) { // 如果访问的cookie带有userid, 不需要再设置userid的cookie
  //   if (!SESSION_DATA[userId]) {  // 服务端的SESSION_DATA还没有存储这个userid相关的用户信息
  //     SESSION_DATA[userId] = {} // 先初始化
  //   }
  // } else {  // 需要设置userid的cookie
  //   needSetCookie = true
  //   userId = `${Date.now()}_${Math.random()}`
  //   SESSION_DATA[userId] = {}
  // }
  // res.session = SESSION_DATA[userId]


  getPostData(req).then(postData => { // 获取post的数据后, 执行回调
    req.body = postData

    const blogRouterResult = blogRouterHandler(req) // 检查blog路由
    if (blogRouterResult) { // 命中blog路由
      blogRouterResult.then(blogData => {
        // if (needSetCookie) {
        //   res.setHeader('Set-Cookie', `userId=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`)
        // }
        res.end(JSON.stringify(blogData))
      })
      return
    }

    const userRouterResult = userRouterHandler(req, res) // 检查user路由
    if (userRouterResult) { // 命中user路由
      userRouterResult.then((userData) => {
        console.log('hi');
        // if (needSetCookie) {
        //   res.setHeader('Set-Cookie', `userId=${userId}; path=/; httpOnly; expires=${getCookieExpires()}`)
        // }
        res.end(JSON.stringify(userData))
      })
      return
    }

    // 没有命中路由
    res.writeHead('404', {'Content-Type': 'text/plain'})
    res.write('404 not Found\n')
    res.end()
  })
}
module.exports = serverHandler
