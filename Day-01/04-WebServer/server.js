var http = require("http");
var fs = require("fs");
var path = require("path")


var server = http.createServer(function(req, res){
    console.log(req.url);
    var requestedResource = path.join(__dirname, req.url);
    if (fs.existsSync(requestedResource)){
        fs.createReadStream(requestedResource).pipe(res);
    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(8080);
console.log("Server listening on port 8080!");
