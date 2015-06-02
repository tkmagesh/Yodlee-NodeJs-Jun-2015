var calculator= require("./calculator");

module.exports = function(req, res, next){
    if (req.url.pathname === "/calculator"){
        if (req.method === "GET"){
            var number1 = parseInt(req.query.number1),
                number2 = parseInt(req.query.number2);

            var result = calculator[req.query.operation](number1, number2);
            res.write(result.toString());
            res.end();
        } else if (req.method === "POST"){
            var number1 = parseInt(req.body.number1),
                number2 = parseInt(req.body.number2);

            var result = calculator[req.body.operation](number1, number2);
            res.write(result.toString());
            res.end();
        } else {
            console.log("Invalid request - ", req.method);
            res.end();
        }
    } else {
        next();
    }
}
