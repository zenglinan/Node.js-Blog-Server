const env = process.env.NODE_ENV

let MYSQL_CONF, REDIS_CONF

if (env === 'dev') {
  // db
  MYSQL_CONF = {  // 本地的数据库设置
    host: 'localhost',
    user: 'root',
    password: '521linan',
    port: '3306',   // mysql服务端口
    database: 'blogserver'  // 数据库名
  }
  REDIS_CONF = {
    port: 6379,
    host: '127.0.0.1'
  }
}
if (env === 'production') {
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
}
module.exports = {MYSQL_CONF, REDIS_CONF}