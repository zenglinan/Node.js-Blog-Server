const exec = require('../../../db/mysql')

function getList(author, keyword) {
  let sql = `select * from blogs where state=1 `  // 1=1是为了防止author 或 keyword不存在报错
  if (author) {
    sql += `and author=${author} `  // 注意保留空格
  }
  if (keyword) {
    sql += `and title=%${keyword}% `
  }
  sql += `order by id desc`
  return exec(sql)
}

function newBlog(blogData = {}) {
  const {title, content, createtime, author} = blogData
  let sql = `
  insert into blogs 
  (title, content, createtime, author) 
  values('${title}', '${content}', '${createtime}', '${author}')`
  return exec(sql)
}

function updateBlog(id, blogData = {}) {
  const {title, content} = blogData
  let sql = `update blogs set title='${title}', content='${content}' where id=${id} and state=1`
  return exec(sql)
}

function delBlog(id) {
  let sql = `update blogs set state=0 where id=${id}`
  return exec(sql)
}

function getBlogDetail(id) {
  let sql = `select * from blogs where id=${id} and state=1`
  return exec(sql)
}

module.exports = {
  getList,
  newBlog,
  updateBlog,
  delBlog,
  getBlogDetail
}