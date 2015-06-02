var http = require("http"),
    app = require("./app"),
    path =  require("path");
var dataParser = require("./dataParser");
var staticResourceServer = require("./staticResourceServer");
var calculatorRoute = require("./calculatorRoute");
var notFound = require("./notFound");


app.use(dataParser)
app.use(staticResourceServer(path.join(__dirname, "public")));
app.use(calculatorRoute);
app.use(notFound);

var server = http.createServer(app.run());
server.listen(8080);
console.log("Server listening on port 8080!");
