const blogRouterHandler = function (req, res) {
  const {method, url} = req
  const path = url.split('?')[0]
  const query = url.split('?')[1]

  if (path === '/api/blog/list' && method === 'GET') {
    return "list"
  }
  if (path === '/api/blog/detail' && method === 'GET') {
    return "detail"
  }
  if (path === '/api/blog/new' && method === 'POST') {
    return "new"
  }
  if (path === '/api/blog/update' && method === 'POST') {
    return "update"
  }
  if (path === '/api/blog/del' && method === 'POST') {
    return "del"
  }
}
module.exports = blogRouterHandler