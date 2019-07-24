const {getList, delBlog, updateBlog, newBlog, getBlogDetail} = require('../controller/blog.js')
const {SuccessModel, ErrorModel} = require('../model/resModel')
const LIST = '/api/blog/list',
    DETAIL = '/api/blog/detail',
    NEW = '/api/blog/new',
    UPDATE = '/api/blog/update',
    DELETE = '/api/blog/del'
let result  // 返回的数据

const blogRouterHandler = function (req) {
  const {author, keyword, id} = req.query

  if (req.path === LIST && req.method === 'GET') {
    result = getList(author, keyword)
    return result.then(listData => {
      return new SuccessModel(listData)
    })
  }

  if (req.path === DETAIL && req.method === 'GET') {
    result = getBlogDetail(id)
    return new SuccessModel(result)
  }

  if (req.path === NEW && req.method === 'POST') {
    result = newBlog(req.body)
    return new SuccessModel(result)
  }

  if (req.path === UPDATE && req.method === 'POST') {
    result = updateBlog(id, req.body)
    return new SuccessModel(result)
  }

  if (req.path === DELETE && req.method === 'POST') {
    result = delBlog(id)
    return new SuccessModel(result)
  }
}
module.exports = blogRouterHandler