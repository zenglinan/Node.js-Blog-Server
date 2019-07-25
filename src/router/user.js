const {SuccessModel, ErrorModel} = require('../model/resModel')
const login = require('../controller/user')


const userRouterHandler = function (req, res) {
  const {username, password} = req.body
  let result
  if (req.path === '/api/user/login' && req.method === 'POST') {
    result = login(username, password)
    return result.then(data => {
      if (data.length !== 0) {
        res.session.username = data[0].username
        res.session.realname = data[0].realname
        return new SuccessModel(data)
      } else {
        return new ErrorModel("登录失败, 请检查用户名或密码是否正确!")
      }
    })
  }
}
module.exports = userRouterHandler