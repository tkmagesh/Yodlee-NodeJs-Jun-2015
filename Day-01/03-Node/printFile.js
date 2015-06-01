var fs = require("fs");
var fileName = process.argv[2];
if (!fileName || !fs.existsSync(fileName)){
    console.log("Invalid file name or file does not exist");
} else {
    fs.readFile(fileName, {encoding : "utf-8"}, function(err, fileContents){
        if (!err){
            console.log(fileContents);
        } else {
            console.log("unknown error - ", err);
        }
    });
}
//var fileContents = fs.readFileSync("test.txt", {encoding : "utf8"});
//console.log(fileContents);
