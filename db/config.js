
let MYSQL_CONF, REDIS_CONF

  MYSQL_CONF = {  // 线上的数据库设置
    host: 'localhost',
    user: 'root',
    password: '521linan',
    port: '3306',
    database: 'blogserver'
  }
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }
module.exports = {MYSQL_CONF, REDIS_CONF}