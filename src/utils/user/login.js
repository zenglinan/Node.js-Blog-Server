const exec = require('../../../db/mysql')

function login(username, password) {
  let sql = `
    select username, realname from users 
    where username='${username}' and password='${password}'`
  return exec(sql)
}

module.exports = login