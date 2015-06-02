var calculator= require("./calculator");

module.exports = function(req, res, next){
    if (req.url.pathname === "/calculator"){
        if (req.method === "GET"){
            var number1 = parseInt(req.query.number1),
                number2 = parseInt(req.query.number2);

            var result = calculator[req.query.operation](number1, number2);
            res.write(result.toString());
            res.end();
        } else {
            console.log("Invalid req method - ", req.method);
            res.end();
        }
    } else {
        next();
    }
}
