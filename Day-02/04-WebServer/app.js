var dataParser = require("./dataParser");
var staticResourceServer = require("./staticResourceServer");
var calculatorRoute = require("./calculatorRoute");
var notFound = require("./notFound");

var actions = [];
actions.push(dataParser)
actions.push(staticResourceServer);
actions.push(calculatorRoute);
actions.push(notFound);

module.exports = function(req, res){

}
