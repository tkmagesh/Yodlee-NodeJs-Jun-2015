var fs = require("fs");
var path = require("path");
var qs = require("querystring");

var staticResourceExtns = [".html",".jpg",".js",".css",".ico"];

function isStaticResource(resourceName){
    return staticResourceExtns.indexOf(path.extname(resourceName)) != -1;
}

module.exports = function(req, res, next){
    if (isStaticResource(req.url.pathname)){
        var requestedResource = path.join(__dirname, req.url.pathname);
        if (fs.existsSync(requestedResource)){
            fs.createReadStream(requestedResource).pipe(res);
        } else {
            res.statusCode = 404;
            res.end();
        }
    } else {
        next();
    }
}
