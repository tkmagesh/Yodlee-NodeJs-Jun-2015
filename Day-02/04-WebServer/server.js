var http = require("http");
var fs = require("fs");
var path = require("path");
var qs = require("querystring");
var calculator= require("./calculator");

var staticResourceExtns = [".html",".jpg",".js",".css",".ico"];

function isStaticResource(resourceName){
    return staticResourceExtns.indexOf(path.extname(resourceName)) != -1;
}


var server = http.createServer(function(req, res){
    req.url = require("url").parse(req.url);
    req.query = qs.parse(req.url.query);
    if (isStaticResource(req.url.pathname)){
        var requestedResource = path.join(__dirname, req.url.pathname);
        if (fs.existsSync(requestedResource)){
            fs.createReadStream(requestedResource).pipe(res);
        } else {
            res.statusCode = 404;
            res.end();
        }
    } else if (req.url.pathname === "/calculator"){
        if (req.method === "GET"){
            var number1 = parseInt(req.query.number1),
                number2 = parseInt(req.query.number2);

            var result = calculator[req.query.operation](number1, number2);
            res.write(result.toString());
            res.end();
        } else if (req.method === "POST"){
            var data = '';
            req.on("data", function(chunk){
                data += chunk;
            });
            req.on("end", function(){
                console.log("req data = ", data);
                var dataObj = qs.parse(data);
                var number1 = parseInt(dataObj.number1),
                    number2 = parseInt(dataObj.number2);

                var result = calculator[dataObj.operation](number1, number2);
                res.write(result.toString());
                res.end();
            });
        } else {
            res.statusCode = 500;
            res.end();
        }
    } else {
        res.statusCode = 404;
        res.end();
    }
});
server.listen(8080);
console.log("Server listening on port 8080!");
