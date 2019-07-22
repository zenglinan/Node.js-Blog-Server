const userRouterHandler = function (req, res) {
  const {method, url} = req
  const path = url.split('?')[0]
  const query = url.split('?')[1]
  if(path === '/api/user/login' && method === 'POST'){
    return 'login'
  }
}
module.exports = userRouterHandler