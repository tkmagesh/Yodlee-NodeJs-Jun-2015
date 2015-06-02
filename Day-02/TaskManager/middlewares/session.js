var uuid = require("node-uuid");

var sessionStore = {
}

function getNewId(){
    return uuid.v1();
}

function addNewSession(){
    var key = getNewId();
    sessionStore[key] = {
        data : {},
        timeStamp : new Date(),
        isNew : true
    };
    return key;
}
(function(){
    setInterval(function(){
        var currentTime = new Date();
        console.log("clean up @ - ", currentTime);
        var limit = 60000;
        for(var key in sessionStore){
            var session = sessionStore[key];
            var diff = currentTime - session.timeStamp;
            if (diff >= limit){
                console.log("session id removed - ", key);
                delete sessionStore[key];
            }
        }
    }, 60000)
})();

module.exports = function (req, res, next){
    //if new session
    var sessionId = null;
    if (!req.cookies["sessionId"] || !sessionStore[req.cookies["sessionId"]]){
        sessionId = addNewSession();
        res.cookie("sessionId", sessionId);
    } else {
        sessionId = req.cookies["sessionId"]
        sessionStore[sessionId].isNew = false;
    };

    req.session = sessionStore[sessionId];
    next();
}
