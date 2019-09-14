const blogRouterHandler = require("./src/router/blog")
const userRouterHandler = require("./src/router/user")
const getPostData = require('./src/utils/getPostData')
const parseRequest = require('./src/utils/parseRequest')
const parseCookie = require('./src/utils/parseCookie')
const getCookieExpires = require('./src/utils/expires')


const serverHandler = function (req, res) {
  parseRequest(req)
  parseCookie(req)
  res.setHeader('Content-Type', 'application/json')

  getPostData(req).then(postData => { // 获取post的数据后, 执行回调
    req.body = postData

    const blogRouterResult = blogRouterHandler(req) // 检查blog路由
    if (blogRouterResult) { // 命中blog路由
      blogRouterResult.then(blogData => {
        res.end(JSON.stringify(blogData))
      })
      return
    }

    const userRouterResult = userRouterHandler(req, res) // 检查user路由
    if (userRouterResult) { // 命中user路由
      userRouterResult.then((userData) => {
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
