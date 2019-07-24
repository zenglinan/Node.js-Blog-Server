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
    result = getBlogDetail(+id) // 注意id是string类型的
    return result.then(blogData => {
      if (blogData.length) {  // 返回有数据, 说明这篇博客存在
        return new SuccessModel(blogData)
      }
      return new ErrorModel("博客不存在")
    })
  }

  if (req.path === NEW && req.method === 'POST') {
    result = newBlog(req.body)
    return result.then((res) => {
      return new SuccessModel(res)
    })
  }

  if (req.path === UPDATE && req.method === 'POST') {
    result = updateBlog(+id, req.body)
    return result.then(res => {
      if (res.affectedRows) {  // 有修改
        return new SuccessModel(res)
      }
      return new ErrorModel("文章不存在")
    })
  }

  if (req.path === DELETE && req.method === 'GET') {
    result = delBlog(+id)
    return result.then((res) => {
      return new SuccessModel(res)
    })
  }
}
module.exports = blogRouterHandler