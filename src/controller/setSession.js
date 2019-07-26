const {setRedis} = require('../../db/redis')
let sessionId
const getCookieExpires = require('./expires')


function setSession(res, data) {
  sessionId = `${Date.now()}_${Math.random()}` // 生成返回给用户的session-Id
  setRedis(sessionId, {
    username: data[0].username,
    realname: data[0].realname
  })
  res.setHeader('Set-Cookie', `userid=${sessionId}; path=/; httpOnly; expires=${getCookieExpires(10000)}`)
}

module.exports = setSession
