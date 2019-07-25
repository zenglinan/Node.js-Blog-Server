const {SuccessModel, ErrorModel} = require('../model/resModel')
const login = require('../controller/user')
const getCookieExpires = () => {
  const d = new Date()
  d.setTime(d.getTime() + (10 * 24 * 60 * 60 * 1000))
  return d.toGMTString()
}

const userRouterHandler = function (req, res) {
  const {username, password} = req.body
  let result
  if (req.path === '/api/user/login' && req.method === 'POST') {
    result = login(username, password)
    return result.then(data => {
      console.log(data);
      if (data.length !== 0) {
        res.setHeader('Set-Cookie', `username=${data[0].username}; path=/; httpOnly; expires=${getCookieExpires()}`)
        return new SuccessModel(data)
      } else {
        return new ErrorModel("登录失败, 请检查用户名或密码是否正确!")
      }
    })
  }
}
module.exports = userRouterHandler