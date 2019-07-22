const userRouterHandler = function (method, path) {
  if(path === '/api/user/login' && method === 'POST'){
    return 'login'
  }
}
module.exports = userRouterHandler