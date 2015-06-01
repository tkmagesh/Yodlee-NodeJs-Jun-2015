var fs = require("fs");
var fileName = process.argv[2];
if (!fileName || !fs.existsSync(fileName)){
    console.log("Invalid file name or file does not exist");
} else {
    /*fs.readFile(fileName, {encoding : "utf-8"}, function(err, fileContents){
        if (!err){
            console.log(fileContents);
        } else {
            console.log("unknown error - ", err);
        }
    });*/
    var readCount = 0;
    var readStream = fs.createReadStream(fileName, {encoding : "utf8"});
    readStream.pipe(process.stdout);
    /*readStream.on("data", function(contents){
        ++readCount;
        console.log(contents);
    });
    readStream.on("end", function(){
        console.log("done with readCount - ", readCount);
    });*/
}
//var fileContents = fs.readFileSync("test.txt", {encoding : "utf8"});
//console.log(fileContents);
