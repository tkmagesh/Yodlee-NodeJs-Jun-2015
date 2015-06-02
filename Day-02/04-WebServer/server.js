var http = require("http"),
    app = require("./app");
var dataParser = require("./dataParser");
var staticResourceServer = require("./staticResourceServer");
var calculatorRoute = require("./calculatorRoute");
var notFound = require("./notFound");


app.use(dataParser)
app.use(staticResourceServer);
app.use(calculatorRoute);
app.use(notFound);

var server = http.createServer(app.run());
server.listen(8080);
console.log("Server listening on port 8080!");
