const http = require('http')
const serverHandler = require('../server')

const httpServer = http.createServer(serverHandler).listen(8000)
console.log("8000端口服务器开启")