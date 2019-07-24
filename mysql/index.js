const mysql = require('mysql')
const {MYSQL_CONF} = require('../conf/db')
// 创建连接对象
const connectObj = mysql.createConnection(MYSQL_CONF)
// 开始连接
connectObj.connect()

function exec(sql) {  // 传入sql语句
  return new Promise((resolve, reject) => {
    connectObj.query(sql, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(result)
      }
    })
  })

}
