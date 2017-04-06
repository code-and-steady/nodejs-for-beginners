var http = require('http')

http.createServer(function(req, res) {
    res.writeHead(200, { 'Content-Type': "text/html"})
    res.end("<h1>Hello World!</h1>")
})
.listen(3000, function() {
    console.log("server listening at 127.0.0.1:3000")
})