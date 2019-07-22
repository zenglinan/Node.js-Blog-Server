const http = require('http')
const serverHandle = require('../server')

const httpServer = http.createServer(serverHandle)

httpServer.listen(8000)
console.log("8000端口服务器开启")