var fs = require("fs");
var path = require("path");
var qs = require("querystring");


module.exports = function(req, res, next){
    req.url = require("url").parse(req.url);
    req.query = qs.parse(req.url.query);
    if (req.method === "POST"){
        var data = '';
        req.on("data", function(chunk){
            data += chunk;
        });
        req.on("end", function(){
            console.log("req data = ", data);
            req.body = qs.parse(data);
            next();
        });
    } else if (req.method === "GET"){
        next();
    }

}
