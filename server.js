const querystring = require('querystring')
const blogRouterHandler = require("./src/router/blog")
const userRouterHandler = require("./src/router/user")
const getPostData = require('./src/controller/getPostData')

const serverHandler = function (req, res) {
  const {method, url} = req
  req.method = method
  req.url = url
  req.path = url.split('?')[0]
  req.query = querystring.parse((url.split('?')[1]))  // 将url里的查询参数变成对象
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

    const userRouterResult = userRouterHandler(req) // 检查user路由
    if (userRouterResult) { // 命中user路由
      userRouterResult.then((userData)=>{
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
