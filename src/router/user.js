const loginCheck = function (method, path) {
  if(path === '/api/user/login' && method === 'POST'){
    return 'login'
  }
}
module.exports = loginCheck