const http = require('http')
const app = require("./app")

const Port = 3020

let server = http.createServer(app)

server.listen(Port, function() {
    console.log("Connection is ready and running on port 3020!")
})