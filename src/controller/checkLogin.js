const {getRedis} = require('../../db/redis')

function checkLogin(req) {
  const userId = req.cookie.userid || ''
  return getRedis(userId)
}

module.exports = checkLogin