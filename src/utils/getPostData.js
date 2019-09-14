const getPostData = function (req) {
  return new Promise((resolve, reject) => {
    if (req.method !== 'POST') {
      resolve({})
      return
    }
    if (req.headers['content-type'] !== 'application/json') {
      resolve({})
      return
    } else {
      let postData = ''
      req.on('data', (chunk) => {
        postData += chunk.toString()  // 默认二进制格式, 需转成字符串
      })
      req.on('end', () => {
        if (!postData) {
          resolve({})
          return
        }
        resolve(JSON.parse(postData))
      })
    }
  })
}
module.exports = getPostData