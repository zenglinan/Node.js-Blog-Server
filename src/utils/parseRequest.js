const querystring = require('querystring')

module.exports = function (req) {
  const {method, url} = req
  req.method = method
  req.url = url
  req.path = url.split('?')[0]
  req.query = querystring.parse((url.split('?')[1]))  // 将url里的查询参数变成对象
}