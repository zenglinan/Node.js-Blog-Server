const {SuccessModel, ErrorModel} = require('../model/resModel')
const login = require('../utils/user/login')
const register = require('../utils/user/register')
const setSession = require('../utils/session/setSession')

const userRouterHandler = function (req, res) {
  const {username, password} = req.body
  let result
  if (req.path === '/api/user/login' && req.method === 'POST') {
    result = login(username, password)
    return result.then(data => {
      if (data.length !== 0) {
        setSession(res, data)
        return new SuccessModel(data)
      } else {
        return new ErrorModel("登录失败, 请检查用户名或密码是否正确!")
      }
    })
  }
  if (req.path === '/api/user/register' && req.method === 'POST') {
    result = register(req.body)
    return result.then((res) => {
      if(res === -1){
        return ErrorModel('用户名重复')
      }else {
        return SuccessModel('注册成功!')
      }
    })

  }
}
module.exports = userRouterHandler