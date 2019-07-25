const {SuccessModel, ErrorModel} = require('../model/resModel')
const login = require('../controller/user')
const getCookieExpires = require('../controller/expires')
const SESSION_DATA = {}
let sessionId

const userRouterHandler = function (req, res) {
  const {username, password} = req.query
  // const {username, password} = req.body
  let result
  if (req.path === '/api/user/login' && req.method === 'GET') {
    result = login(username, password)
    return result.then(data => {
      if (data.length !== 0) {
        sessionId = `${Date.now()}_${Math.random()}` // 生成返回给用户的session-Id
        SESSION_DATA[sessionId] = {}   // 初始化SESSION_DATA中该session-id存储的数据
        SESSION_DATA[sessionId].username = data[0].username  // 存入 session-id 对应的用户数据
        SESSION_DATA[sessionId].realname = data[0].realname
        console.log(SESSION_DATA[sessionId]);
        res.setHeader('Set-Cookie', `userId=${sessionId}; path=/; httpOnly; expires=${getCookieExpires(30)}`)

        // res.session.realname = data[0].realname
        // res.session.username = data[0].username
        return new SuccessModel(data)
      } else {
        return new ErrorModel("登录失败, 请检查用户名或密码是否正确!")
      }
    })
  }
}
module.exports = userRouterHandler