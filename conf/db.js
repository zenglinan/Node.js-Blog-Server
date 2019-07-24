const env = process.env.NODE_ENV

let MYSQL_CONF

if(env === 'dev'){
  MYSQL_CONF = {  // 本地的数据库设置
    host: 'localhost',
    user: 'root',   // mysql用户名
    password: '521linan',   // mysql密码
    port: '3306',   // mysql服务端口
    database: 'blogserver'  // 数据库名
  }
}
if(env === 'production'){
  MYSQL_CONF = {  // 线上的数据库设置
    host: 'localhost',
    user: 'root',
    password: '521linan',
    port: '3306',
    database: 'blogserver'
  }
}
module.exports = MYSQL_CONF