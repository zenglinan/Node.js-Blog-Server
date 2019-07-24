const exec = require('../../mysql/sql')

function getList(author, keyword) {
  let sql = `select * from blogs where 1=1 `  // 1=1是为了防止author 或 keyword不存在报错
  if (author) {
    sql += `and author=${author} `  // 注意保留空格
  }
  if (keyword) {
    sql += `and title=%${keyword}% `
  }
  sql += `order by createtime desc`
  return exec(sql)
}

function newBlog(blogData = {}) {
  return blogData
}

function updateBlog(id, blogData = {}) {
  return blogData
}

function delBlog(id) {
  return `删除id为${id}的博客`
}

function getBlogDetail(id) {
  return `获取id为${id}的博客成功`
}

module.exports = {
  getList,
  newBlog,
  updateBlog,
  delBlog,
  getBlogDetail
}