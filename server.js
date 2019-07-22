const blogRouterHandler = require("./src/router/blog")
const userRouterHandler = require("./src/router/user")

const serverHandler = function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  const blogData = blogRouterHandler(req, res)
  // 命中blog路由
  if(blogData){
    res.end(JSON.stringify(blogData))
    return
  }
  const userData = userRouterHandler(req, res)
  // 命中user路由
  if(userData){
    res.end(JSON.stringify(userData))
    return
  }
  // 没有命中路由
  res.writeHead('404', {'Content-Type': 'text/plain'})
  res.write('404 not Found\n')
  res.end()
}
module.exports = serverHandler
// const http = require('http')
// const querystring = require('querystring')
//
// const server = http.createServer((req, res) => {
//   const {method, url} = req
//   const path = url.split('?')[0]
//   const query = querystring.parse(url.split('?')[1])  // querystring将查询参数变成键值对形式
//
//   // 设置返回格式为JSON
//   res.setHeader('Content-Type', 'application/json')
//
//   // 返回的数据, 自己随便设置
//   const resData = {
//     method,
//     url,
//     path,
//     query
//   }
//
//   if (method === 'GET') {
//     res.end(
//         JSON.stringify(resData)  // 返回的一定是字符串, Content-Type指定的是字符串内的数据格式
//     )
//   } else if (method === 'POST') {
//     let postData = ''
//     req.on('data', chunk => {  // 采用数据流
//       postData += chunk.toString()  // chunk默认是二进制格式
//     })
//     req.on('end', () => {
//       resData.postData = postData
//       res.end(JSON.stringify(resData))
//     })
//   }
// })
//
// server.listen(8000)
// console.log('服务器已开启')


// const http = require('http')
//
// const querystring = require('querystring')
//
// const server = http.createServer((req, res) => {
//   if (req.method === 'GET') {
//     const url = req.url
//     req.query = querystring.parse(url.split('?')[1])  // 获取查询参数, 通过querystring.parse转义成对象
//     res.end(JSON.stringify(req.query))  // 将对象转义为字符串返回给浏览器
//     console.log('method:', req.method)
//     console.log('url:', url)
//     console.log('query', req.query)
//     console.log('\n')
//   } else if (req.method === 'POST') {
//     const url = req.url
//     console.log('method:', req.method)
//     console.log('url:', url)
//     console.log('Content-Type', req.headers['content-type'])
//     // 接收数据
//     let postData = ""
//     req.on('data', chunk => {  // 采用数据流
//       postData += chunk.toString()  // chunk默认是二进制格式, 要转为字符串格式
//     })
//     req.on('end', () => {
//       console.log('postData', postData)
//       res.end('Hello, Node.js!')
//     })
//   }
// })
// server.listen(8000)  // 监听端口
// console.log('Hello Node.js')