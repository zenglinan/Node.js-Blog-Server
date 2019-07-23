function getList(author, keyword) {
  return [
    {
      'id': 1,
      'author': 'datou',
      'lover': 'linan'
    },
    {
      'id': 2,
      'author': 'linan',
      'lover': 'datou'
    }
  ]
}
function newBlog(blogData = {}){
  return blogData
}
function updateBlog(id, blogData={}){
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