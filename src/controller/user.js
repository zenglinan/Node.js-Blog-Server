const exec = require('../../mysql/sql')

function checkLogin(username, password) {
  let sql = `
    select username, realname from users 
    where username='${username}' and password='${password}'`
  return exec(sql)
}

module.exports = checkLogin