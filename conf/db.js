const env = process.env.NODE_ENV

let MYSQL_CONF

if(env === 'dev'){
  MYSQL_CONF = {  // 本地的数据库设置
    host: 'localhost',
    user: 'root',
    password: '521linan',
    port: '3306',
    database: 'blogserver'
  }
}
else if(env === 'production'){
  MYSQL_CONF = {  // 线上的数据库设置
    host: 'localhost',
    user: 'root',
    password: '521linan',
    port: '3306',
    database: 'blogserver'
  }
}
module.exports = MYSQL_CONF