const SESSION_DATA = {} // 总session存储
let sessionId
const getCookieExpires = require('./expires')


function setSession(res, data) {
  sessionId = `${Date.now()}_${Math.random()}` // 生成返回给用户的session-Id
  SESSION_DATA[sessionId] = {}   // 初始化SESSION_DATA中该session-id存储的数据
  SESSION_DATA[sessionId].username = data[0].username  // 存入 session-id 对应的用户数据
  SESSION_DATA[sessionId].realname = data[0].realname
  res.setHeader('Set-Cookie', `userId=${sessionId}; path=/; httpOnly; expires=${getCookieExpires(10)}`)
}

module.exports = setSession
