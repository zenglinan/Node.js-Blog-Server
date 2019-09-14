const exec = require('../../../db/mysql')
module.exports = function ({username, password, realname}) {
  let querySql = `select * from users where username = '${username}'`  // 查询用户名是否存在
  return exec(querySql).then((res) => {
    if(res.length === 0){
      // 可进行注册
      let registerSql = `insert into users (username, \`password\`, realname) values('${username}', '${password}', '${realname}');`
      return exec(registerSql).then(()=>{
        return 0
      })
    }else {
      return -1
    }
  })
}