const {getList} = require('../controller/blog.js')
const {SuccessModel, ErrorModel} = require('../model/resModel')
const blogRouterHandler = function (method, path, query) {

  if (path === '/api/blog/list' && method === 'GET') {
    const {author, keyword} = query
    let listData = getList(author, keyword)
    return new SuccessModel(listData)
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