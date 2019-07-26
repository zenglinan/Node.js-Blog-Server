const redis = require('redis')
const {REDIS_CONF} = require('../dbConfig/db')
const {port, host} = REDIS_CONF

const redisClient = redis.createClient(port, host)
redisClient.on('error', err => {
  console.err(err)
})

function setRedis(key, value) {
  if (typeof value === 'object') value = JSON.stringify(value)
  redisClient.set(key, value, redis.print)
}

function getRedis(key) {
  return new Promise((resolve, reject) => {
    redisClient.get(key, (err, value) => {
      if (err) {
        reject(err)
        return
      }
      try {
        resolve(JSON.stringify(value))
      } catch {
        resolve(value)
      }
    })
  })
}
module.exports = {setRedis, getRedis}