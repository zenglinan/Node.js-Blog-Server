const {SuccessModel, ErrorModel} = require('../model/resModel')
const checkLogin = require('../controller/user')

const userRouterHandler = function (req) {
  const {username, password} = req.body
  let result
  if (req.path === '/api/user/login' && req.method === 'POST') {
    result = checkLogin(username, password)
    return result.then(res => {
      if (res.length !== 0) {
        return new SuccessModel(res)
      } else {
        return new ErrorModel("登录失败, 请检查用户名或密码是否正确!")
      }
    })
  }
}
module.exports = userRouterHandler