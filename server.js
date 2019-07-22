const serverHandle = function (req, res) {
  res.setHeader('Content-Type', 'application/json')
  let resData = {
    name: 'linan',
    lover: 'datou love you forever'
  }
  res.end(JSON.stringify(resData))
}
module.exports = serverHandle
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